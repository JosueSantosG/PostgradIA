
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private intent: string='';
  private idoferta: number =0;
  private idinscrip: number=0;
  private salir: string='';
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/chatbot';
  }

  async sendMessage(message: string,uniqueUserId: string): Promise<string> {
    const url = `${this.myAppUrl}${this.myApiUrl}/consulta`;
    /* const url = 'https://servidor-chatbot-a82543f0f66d.herokuapp.com/api/chatbot/consulta'; */
    const requestBody = { message, uniqueUserId };
    console.log("requestBody",requestBody);
    
    try {
      const response = await this.http.post<any>(url, requestBody).toPromise();
      console.log("requestBodyresponse",response);
      // Verifica si la respuesta contiene un token
      if (response.token === 'Cerrar Sesion') {
        // Almacena el token en localStorage
        /* console.log(response.token); */
        
        localStorage.removeItem('token');      
      }
      

        this.idoferta = response.idoferta;
        this.idinscrip = response.idinscrip;
        this.intent = response.intent;
      return response.response;
      
      
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      throw new Error('Error al enviar el mensaje');
    }
  }
  
  getIntent(): string {
    return this.intent;
  }

  getIdOferta(): any {
    return this.idoferta;
  }

  getIdInscrip(): any {
    return this.idinscrip;
  }

  async sendComent(comentario: string): Promise<string> {
   /*  const url = 'http://localhost:3000/api/chatbot/comentario'; */
    const url = 'https://servidor-chatbot-a82543f0f66d.herokuapp.com/api/chatbot/comentario';

    const requestBody = { comentario }; // Incluye el identificador único en el cuerpo de la solicitud
    console.log("requestBody",requestBody);
    
    try {
      const response = await this.http.post<any>(url, requestBody).toPromise();
      console.log("requestBodyresponse",response);
      return response.response;
      
      
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      throw new Error('Error al enviar el mensaje');
    }
  }



}

