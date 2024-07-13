import {
  Component,
  ViewChild,
  Renderer2,
  ElementRef,
  HostListener,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { ChatService } from '../../services/chatservice.service';
import { SessionService } from '../../services/session.service';
import { UserService } from 'src/app/services/user.service';
import { Iniciosesion } from 'src/app/interfaces/iniciosesion';
import { HttpErrorResponse } from '@angular/common/http';
import { Oferta } from 'src/app/interfaces/oferta';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  @ViewChild('textInput') textInput!: ElementRef;
  @ViewChild('autoscroll') autoscroll!: ElementRef;
  @ViewChild('notificationElement', { static: false })
  notificationElement!: ElementRef;
  @ViewChild('btnSecondary', { static: false }) btnSecondary!: ElementRef;
  @ViewChild('miBoton') miBoton!: ElementRef;
  usuario: string = '';
  clave: string = '';
  response = '';
  intent = '';
  mensaje = '';
  uniqueUserId = '';
  isChatOpen = false;
  showNotification: boolean = false;
  shouldScrollToBottom: boolean = true;
  isSendingMessage: boolean = false;
  isBotTyping: boolean = false;
  idInscrip: any;
  userData: any;
  /* messages: any[]; */
  messages: any[] = [];
  maestria: Oferta[] = [];
  chatbox: any;
  textField: any;
  selectedOption: string = '';
  fileTmp: any;

  constructor(
    private userService: UserService,
    private renderer: Renderer2,
    private chatService: ChatService,
    private sessionService: SessionService,
    private el: ElementRef
  ) {
    this.messages = [];
    /* this.messages= [] = []; */
  }

  ngOnInit() {
    this.initializeMessages();
    this.initializeNotifications();
    this.listenerButton();
    this.listenerFile();
    this.listenerButtonSend();
    this.listenerButtonOferta();
  }

  
  listenerButtonOferta() {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      // verificar si tiene token?
      const token = localStorage.getItem('token');
      if (token && target && target.id === 'capturaNombre') {
        // Verificar si el elemento clicado tiene el id 'capturaNombre'
        const textInsideA = target.innerText;
        this.mostrarDocs(textInsideA);

      }
    }
    document.addEventListener('click', handleClick);
  }

  listenerButton() {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target) {
        if (target.id === 'myButton') {
          this.inicioSesion();
        }
      }
    };

    document.addEventListener('click', handleClick);
  }

  inicioSesion() {
    try {
      // Obtiene el intento del servicio
      this.intent = this.chatService.getIntent();
      if (this.intent === 'campo.campo') {
        const textInput = document.querySelector(
          '#exampleDropdownFormEmail2'
        ) as HTMLInputElement;
        const passInput = document.querySelector(
          '#exampleDropdownFormPassword2'
        ) as HTMLInputElement;

        const usuario = textInput.value;
        const clave = passInput.value;
        const user: Iniciosesion = {
          usuario: usuario,
          clave: clave,
        };

        this.userService.login(user).subscribe({
          next: async (data) => {
            localStorage.setItem('token', data.token);

            const uniqueUserId = this.sessionService.getUniqueUserId();
            const response = await this.chatService.sendMessage(
              usuario,
              uniqueUserId
            );
            const userMessage = { name: 'User', message: 'Iniciar Sesión' };
            this.messages.push(userMessage);
            setTimeout(() => {
              this.scrollToBottom();
            }, 100);
            const iaMessage = { name: 'PostgradIA', message: response };
            this.messages.push(iaMessage);
            this.getMaestrias();
            setTimeout(() => {
              this.scrollToBottomChatbot();
            }, 100);
          },
          error: (e: HttpErrorResponse) => {
            this.messages.push({ name: 'PostgradIA', message: e.error.msg });
            setTimeout(() => {
              this.scrollToBottomChatbot();
            }, 100);
          },
        });
      }
    } catch (error) {
      const iaMessage = {
        name: 'PostgradIA',
        message: 'Ups... ocurrió un error, disculpa las molestias...',
      };
      this.messages.push(iaMessage);
      setTimeout(() => {
        this.scrollToBottomChatbot();
      }, 100);
      console.log('error is');
    }
  }

  listenerFile() {
    //ESTO CAPTURA EL ARCHIVO
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement | null;

      if (target && target.type === 'file') {
        const files = target.files;
        if (files && files.length > 0) {
          const file = files[0];
          this.getFile(file);
        }
      }
    };

    document.addEventListener('change', handleFileChange);
  }

  mostrarDocs(textInsideA: string) {
    this.userService.mostrarMaestrias()
    .subscribe({next: (data: any) => {
        if (data && data.maestrias) {
          this.maestria = data.maestrias;
          
          const maestriaEncontrada: any = this.maestria.find(
            (maestria) => maestria.ofertum.descripcion === String(textInsideA)
          );
          if (maestriaEncontrada) {
            const idOferta = maestriaEncontrada.ofertum.id_oferta;

            this.obtenerDocumentos(idOferta);


          }
        } else {
          console.error(
            'Los datos recibidos no tienen la estructura esperada.'
          );
        }
      }, error: (e: HttpErrorResponse) => {
        this.messages.push({ name: 'PostgradIA', message: e.error.msg });
        setTimeout(() => {
          this.scrollToBottomChatBotOnly();
        }, 100);
        

        }
      });
  }

  obtenerDocumentos(idOferta: number){
    this.userService.mostrarDocumentos(idOferta).subscribe({next:(response:any) => {
      // Maneja la respuesta aquí, si es necesario
      this.userData = response;
      // Accede a los valores específicos
      const userDocs = this.userData.userPersona[0]?.userdocs[0];

      if (userDocs) {
        const cedula = userDocs.cedula ? 'SI' : 'NO';
        const certificado = userDocs.certificado ? 'SI' : 'NO';
        const solicitud = userDocs.solicitud ? 'SI' : 'NO';
        const titulo = userDocs.titulo ? 'SI' : 'NO';
        const comprobante = userDocs.comprobante ? 'SI' : 'NO';
        const hojadevida = userDocs.hojadevida ? 'SI' : 'NO';


        const cedulaClass = userDocs.cedula ? 'table-success' : 'table-danger';
        const certificadoClass = userDocs.certificado ? 'table-success' : 'table-danger';
        const solicitudClass = userDocs.solicitud ? 'table-success' : 'table-danger';
        const tituloClass = userDocs.titulo ? 'table-success' : 'table-danger';
        const comprobanteClass = userDocs.comprobante ? 'table-success' : 'table-danger';
        const hojadevidaClass = userDocs.hojadevida ? 'table-success' : 'table-danger';

        setTimeout(async () => {
          const iaMessage = {
            name: 'PostgradIA',
            message: `
            Cada archivo debe estar en formato <b>PDF</b> (máximo <b>20 Mb</b>):
            <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">D.cargado</th>
                  <th scope="col">Documentos subir</th>
                  <th scope="col">Archivo</th>
                </tr>
                <tr>
                
                
                  <th scope="col" colspan="3" style="text-align: center;">Cédula de ciudadanía</th>
    
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="${cedulaClass}">${cedula}</td>
                  <td>
                  <input class="form-control" type="file" id="formFile" accept="application/pdf">
                </td>
                  <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='cedula'>Guardar</button></td>
                </tr>
                <tr>
                  <thead>
                  <tr>
                    <th scope="col" colspan="3" style="text-align: center;">Certificado de votación vigente</th>
                  </tr>
                  
                  </thead>
                </tr>
                <tr>
                        <td class="${certificadoClass}">${certificado}</td>
                        <td>
                        <input class="form-control" type="file" id="formFile" accept="application/pdf">
                      </td>
                        <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='certificado'>Guardar</button></td>
                      </tr>
                      <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Solicitud de ingreso dirigido al director</th>
                      </tr>
                      
                      </thead>
                    </tr>
                    <tr>
                        <td class="${solicitudClass}">${solicitud}</td>
                        <td>
                        <input class="form-control" type="file" id="formFile" accept="application/pdf">
                      </td>
                        <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='solicitud'>Guardar</button></td>
                      </tr>
                      <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Título de tercer nivel (SENESCYT)</th>
                      </tr>
                      
                      </thead>
                        </tr>
                      <tr>
                      <td class="${tituloClass}">${titulo}</td>
                      <td>
                      <input class="form-control" type="file" id="formFile" accept="application/pdf">
                    </td>
                      <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='titulo'>Guardar</button></td>
                    </tr>
                    <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Combrobante de pago de inscripción</th>
                      </tr>
                      
                      </thead>
                        </tr>
                    <tr>
                        <td class="${comprobanteClass}">${comprobante}</td>
                        <td>
                        <input class="form-control" type="file" id="formFile" accept="application/pdf">
                      </td>
                        <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='comprobante'>Guardar</button></td>
                      </tr>
                      <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Hoja de vida formato UPSE</th>
                      </tr>
                      
                      </thead>
                        </tr>
                      <tr>
                      <td class="${hojadevidaClass}">${hojadevida}</td>
                      <td>
                      <input class="form-control" type="file" id="formFile" accept="application/pdf">
                    </td>
                      <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='hojadevida'>Guardar</button></td>
                    </tr>
              </tbody>
            </table>
            </div>
            `,
          };
          this.messages.push(iaMessage);
          setTimeout(() => {
            this.scrollToBottomChatbot();
          }, 100);
        },2000);
        
      } else {
        console.error(
          'No se encontraron documentos para el usuario.'
        );
      }
    }, error: (e: HttpErrorResponse) => {
      this.messages.push({ name: 'PostgradIA', message: e.error.msg });
      setTimeout(() => {
        this.scrollToBottomChatBotOnly();
      }, 100);
      

      }
    });
  }

  //PROBLEMA #1 : OBTENER EL ID_OFERTA POR MEDIO DEL NOMBRE DE LA MAESTRIA
  getMaestrias() {
    this.userService.mostrarMaestrias()
    .subscribe((data: any) => {
        if (data && data.maestrias) {
          this.maestria = data.maestrias;
          // Iterar sobre cada maestría para obtener información
          const descripcionOferta = this.maestria.map(
            (maestria) => maestria.ofertum.descripcion
          );
          const iaMessage = {
            name: 'PostgradIA',
            message:
              "Elije la maestría para subir tus <b>Documentos/Requisitos</b>👇:<br><a class='option-link' id='capturaNombre'>" +
              descripcionOferta.join(
                '<a class="option-link" id="capturaNombre">'
              ) +
              '</a>',
          };
          this.messages.push(iaMessage);
          setTimeout(() => {
            this.scrollToBottomChatBotOnly();
          }, 100);
        } else {
          console.error(
            'Los datos recibidos no tienen la estructura esperada.'
          );
        }
      
      });
  }

  listenerButtonSend() {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target) {
        if (target.id === 'sendData') {
          const fileType = target.getAttribute('data-file-type');
          if (fileType) {
            this.enviarDatos(fileType);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
  }

  //PROBLEMA #2 : OBTENER EL ID_INSCRIPCION POR MEDIO DE LA INSCRIPCION Y NOMBRE DE LA MAESTRIA O ID
  enviarDatos(tipoDocumento: string) {
    const idInscrip = this.chatService.getIdInscrip();
    const idOferta = this.chatService.getIdOferta();
    const idInscripcion = idInscrip;
    
    if (this.fileTmp) {
      const formData = new FormData();
      formData.append('file', this.fileTmp.fileRaw, this.fileTmp.fileName);
      formData.append(tipoDocumento, this.fileTmp.fileName);
      

      
      this.userService
        .sendFile(formData, idInscripcion)
        .subscribe({next: (res: any) => {
          const iaMessage = { name: 'PostgradIA', message: res.message };
          this.messages.push(iaMessage);
            setTimeout(() => {
              this.scrollToBottomChatBotOnly();
            }, 100);
          this.userService.mostrarDocumentos(idOferta).subscribe({next:(datosOferta: any) => {
            this.userData = datosOferta;

                // Accede a los valores específicos
                const userDocs = this.userData.userPersona[0]?.userdocs[0];

                if (userDocs) {
                  const cedula = userDocs.cedula ? 'SI' : 'NO';
                  const certificado = userDocs.certificado ? 'SI' : 'NO';
                  const solicitud = userDocs.solicitud ? 'SI' : 'NO';
                  const titulo = userDocs.titulo ? 'SI' : 'NO';
                  const comprobante = userDocs.comprobante ? 'SI' : 'NO';
                  const hojadevida = userDocs.hojadevida ? 'SI' : 'NO';

                  const cedulaClass = userDocs.cedula ? 'table-success' : 'table-danger';
                  const certificadoClass = userDocs.certificado ? 'table-success' : 'table-danger';
                  const solicitudClass = userDocs.solicitud ? 'table-success' : 'table-danger';
                  const tituloClass = userDocs.titulo ? 'table-success' : 'table-danger';
                  const comprobanteClass = userDocs.comprobante ? 'table-success' : 'table-danger';
                  const hojadevidaClass = userDocs.hojadevida ? 'table-success' : 'table-danger';

                  const iaMessage = {
                    name: 'PostgradIA',
                    message: `
            Cada archivo debe estar en formato <b>PDF</b> (máximo <b>20 Mb</b>):
            <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">D.cargado</th>
                  <th scope="col">Documentos subir</th>
                  <th scope="col">Archivo</th>
                </tr>
                <tr>
                
                
                  <th scope="col" colspan="3" style="text-align: center;">Cédula de ciudadanía</th>
    
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="${cedulaClass}">${cedula}</td>
                  <td>
                  <input class="form-control" type="file" id="formFile" accept="application/pdf">
                </td>
                  <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='cedula'>Guardar</button></td>
                </tr>
                <tr>
                  <thead>
                  <tr>
                    <th scope="col" colspan="3" style="text-align: center;">Certificado de votación vigente</th>
                  </tr>
                  
                  </thead>
                </tr>
                <tr>
                        <td class="${certificadoClass}">${certificado}</td>
                        <td>
                        <input class="form-control" type="file" id="formFile" accept="application/pdf">
                      </td>
                        <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='certificado'>Guardar</button></td>
                      </tr>
                      <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Solicitud de ingreso dirigido al director</th>
                      </tr>
                      
                      </thead>
                    </tr>
                    <tr>
                        <td class="${solicitudClass}">${solicitud}</td>
                        <td>
                        <input class="form-control" type="file" id="formFile" accept="application/pdf">
                      </td>
                        <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='solicitud'>Guardar</button></td>
                      </tr>
                      <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Título de tercer nivel (SENESCYT)</th>
                      </tr>
                      
                      </thead>
                        </tr>
                      <tr>
                      <td class="${tituloClass}">${titulo}</td>
                      <td>
                      <input class="form-control" type="file" id="formFile" accept="application/pdf">
                    </td>
                      <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='titulo'>Guardar</button></td>
                    </tr>
                    <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Combrobante de pago de inscripción</th>
                      </tr>
                      
                      </thead>
                        </tr>
                    <tr>
                        <td class="${comprobanteClass}">${comprobante}</td>
                        <td>
                        <input class="form-control" type="file" id="formFile" accept="application/pdf">
                      </td>
                        <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='comprobante'>Guardar</button></td>
                      </tr>
                      <tr>
                      <thead>
                      <tr>
                        <th scope="col" colspan="3" style="text-align: center;">Hoja de vida formato UPSE</th>
                      </tr>
                      
                      </thead>
                        </tr>
                      <tr>
                      <td class="${hojadevidaClass}">${hojadevida}</td>
                      <td>
                      <input class="form-control" type="file" id="formFile" accept="application/pdf">
                    </td>
                      <td><button type="button" class="btn btn-secondary" id='sendData' data-file-type='hojadevida'>Guardar</button></td>
                    </tr>
              </tbody>
            </table>
            </div>
            `,
                  };
                  this.messages.push(iaMessage);
                  
                } else {
                  console.error(
                    'No se encontraron documentos para el usuario.'
                  );
                }
              }, error: (e: HttpErrorResponse) => {
        this.messages.push({ name: 'PostgradIA', message: e.error.msg });
        
        setTimeout(() => {
          this.scrollToBottomChatBotOnly();
        }, 100);
        

        }

          });
        },error: (e: HttpErrorResponse) => {
          this.messages.push({ name: 'PostgradIA', message: e.error.msg });
          this.getMaestrias();
          setTimeout(() => {
            this.scrollToBottomChatBotOnly();
          }, 100);
          

          }
        });
    } else {
      alert('No se ha seleccionado un archivo');
    }
  }

  private async initializeMessages() {
    this.messages.push({
      name: 'PostgradIA',
      message: `Hola, ¿cómo te puedo ayudar? 😄<br>
        <a class="option-link">Información sobre las Facultades 🎓</a>
        <a class="option-link">Información Maestrías 📚</a>
        <a class="option-link">Formas de pago 💳</a>
        <a class="option-link">Precio de maestrías 💰</a>
        <a class="option-link">Descuentos 🎉</a>
        <a class="option-link">Quiero inscribirme 📝</a>
        <a class="option-link">¿Dónde subo mis documentos? 📚</a>
        <a class="option-link">¿Cuál es mi campo amplio? 🌐</a><br>
        O escribe tu pregunta en la caja de texto.

        `,
    });
  }

  getFile(file: File): void {
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
    
  }

  private initializeNotifications() {
    setTimeout(() => {
      this.showNotification = true;
      setTimeout(() => {
        this.hideNotification();
      }, 5000);
    }, 2000);
  }

  onEnterKeyPress(event: Event) {
    const keyboardEvent = event as KeyboardEvent; // Realizamos un cast explícito a KeyboardEvent
    if (keyboardEvent.key === 'Enter') {
      keyboardEvent.preventDefault();
      this.onSendButton();
    }
  }

  trackMessageById(message: any): number {
    return message.uniqueUserId; // Cambiar 'id' por la propiedad única que uses en tus mensajes
  }

  hideNotification() {
    this.showNotification = false;
  }

  async onSendButton() {
    if (this.isSendingMessage || this.isBotTyping) {
      return;
    }

    this.isSendingMessage = true;
    const textField = document.querySelector('textarea');
    const text = textField!.value.trim();

    if (text === '') {
      this.isSendingMessage = false;
      return;
    }

    const userMessage = { name: 'User', message: text };

    try {
      // Agregar mensaje del usuario primero
      this.messages.push(userMessage);
      textField!.value = '';

      // Hacer scroll hacia abajo después de agregar el mensaje del usuario
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);

      // Simular escritura del bot
      this.isBotTyping = true;
      const botTypingMessage = { name: 'PostgradIA', message: '   ' };
      this.messages.push(botTypingMessage);

      const uniqueUserId = this.sessionService.getUniqueUserId();
      const response = await this.chatService.sendMessage(text, uniqueUserId);

      // Esperar 2 segundos antes de agregar la respuesta del bot
      setTimeout(async () => {
        // Eliminar el mensaje de escritura del bot
        this.messages = this.messages.filter((msg) => msg !== botTypingMessage);

        // Luego agregar la respuesta del bot
        const iaMessage = { name: 'PostgradIA', message: response };
        this.messages.push(iaMessage);

        // Hacer scroll hacia abajo después de agregar el mensaje del bot
        setTimeout(() => {
          this.scrollToBottomChatbot();
        }, 100);

        setTimeout(() => {
          this.isBotTyping = false;
          this.isSendingMessage = false;
        }, 300);
      }, 700); // Retraso de 1 segundos
    } catch (error) {
      console.error('Error:', error);
      textField!.value = '';
      this.isSendingMessage = false;
    }
  }

  async onSendComent() {
    const textField = document.getElementById(
      'commentInput'
    ) as HTMLTextAreaElement;
    const text = textField.value.trim();
    if (text === '') {
      return;
    }
    try {
      // Llamamos al servicio para enviar el comentario al servidor
      await this.chatService.sendComent(text);
      // Limpia el campo del comentario después de enviarlo
      textField.value = '';
      // Mostrar la notificación al usuario
      this.showNotificationCom('Se envió tu comentario, gracias.');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      // Maneja el error si es necesario
    }
  }

  private showNotificationCom(message: string) {
    const notification = this.notificationElement.nativeElement;
    notification.textContent = message;
    notification.style.display = 'block';
    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  }

  toggleChatWindow() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      this.textInput.nativeElement.focus();
    }
  }

  scrollToBottomChatbot() {
    try {
      // Buscar el último mensaje enviado por el usuario
      const userMessages = Array.from(
        this.autoscroll.nativeElement.getElementsByClassName(
          'messages__item--visitor'
        )
      );
      const lastBotMessage = userMessages[userMessages.length - 2];

      if (lastBotMessage instanceof HTMLElement) {
        // Hacer scroll hacia el último mensaje enviado por el usuario
        lastBotMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Obtener el siguiente mensaje (mensaje de bot)
        const nextMessage = lastBotMessage.nextElementSibling;

        if (nextMessage instanceof HTMLElement) {
          // Hacer scroll hacia el siguiente mensaje (mensaje de bot)
          nextMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } catch (err) {
      console.error(
        'Error al desplazar el scroll hacia el mensaje del usuario:',
        err
      );
    }
  }
  scrollToBottomChatBotOnly() {
    try {
      // Encontrar el contenedor del chat o el área que contiene los mensajes
      const userMessages = Array.from(
        this.autoscroll.nativeElement.getElementsByClassName(
          'messages__item--visitor'
        )
      );
      const lastBotMessage = userMessages[userMessages.length - 1];
      if (lastBotMessage instanceof HTMLElement) {
        // Hacer scroll hacia el siguiente mensaje (mensaje de usuario)
        lastBotMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      

    } catch (err) {
      console.error('Error al desplazar el scroll hacia abajo:', err);
    }
  }
  scrollToBottom() {
    try {
      // Encontrar el contenedor del chat o el área que contiene los mensajes
      const userMessages = Array.from(
        this.autoscroll.nativeElement.getElementsByClassName(
          'messages__item--operator'
        )
      );
      const lastUserMessage = userMessages[userMessages.length - 1];
      if (lastUserMessage instanceof HTMLElement) {
        // Hacer scroll hacia el siguiente mensaje (mensaje de usuario)
        lastUserMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      

    } catch (err) {
      console.error('Error al desplazar el scroll hacia abajo:', err);
    }
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false; // Deshabilitar el desplazamiento hasta el próximo envío
    }
  }

  selectOptionP(event: Event, option: string) {
    event.preventDefault();
    this.selectedOption = option;
    this.textInput.nativeElement.focus();
  }

  async selectOption(event: Event, option: string) {
    event.preventDefault();
    if (this.isSendingMessage || this.isBotTyping) {
      return;
    }
    this.isSendingMessage = true;
    const userMessage = { name: 'User', message: option };

    try {
      // Agregar mensaje del usuario primero
      this.messages.push(userMessage);
      // Hacer scroll hacia abajo después de agregar el mensaje del usuario
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);

      // Simular escritura del bot
      this.isBotTyping = true;
      const botTypingMessage = { name: 'PostgradIA', message: '   ' };
      this.messages.push(botTypingMessage);

      const uniqueUserId = this.sessionService.getUniqueUserId();
      const response = await this.chatService.sendMessage(option, uniqueUserId);
      // Esperar 2 segundos antes de agregar la respuesta del bot
      setTimeout(async () => {
        // Eliminar el mensaje de escritura del bot
        this.messages = this.messages.filter((msg) => msg !== botTypingMessage);

        // Luego agregar la respuesta del bot
        const iaMessage = { name: 'PostgradIA', message: response };
        this.messages.push(iaMessage);

        // Hacer scroll hacia abajo después de agregar el mensaje del bot
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
        setTimeout(() => {
          this.isSendingMessage = false;
          this.isBotTyping = false;
        }, 500);
      }, 1500); // Retraso de 2 segundos
    } catch (error) {
      console.error('Error:', error);
      this.isSendingMessage = false;
    }
  }

  onMessageClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'a') {
      const href = (target as HTMLAnchorElement).href;

      if (href && href.trim() !== '') {
        return;
      }

      const option = target.textContent?.trim() || '';
      this.selectOption(event, option);
    } else {
      if (target.tagName.toLowerCase() === 'p') {
        const option = target.textContent?.trim() || '';
        this.selectOptionP(event, option);
        event.stopPropagation();
      }
    }
  }

  stopClickPropagation(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'p') {
      event.stopPropagation(); // Detener la propagación del clic para evitar conflictos con otros eventos
      const option = target.textContent?.trim() || '';
      this.selectOption(event, option);
    }
  }
}

