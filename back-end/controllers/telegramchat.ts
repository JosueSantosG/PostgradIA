import { nlp } from "../chatbotia/train_telegram";
import { Telegraf } from 'telegraf';
import Oferta from "../models/oferta";
import Persona from "../models/usuario";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN2 || '');

bot.command('start', ctx =>{
  sendStartMessage(ctx);
})

export function sendStartMessage (ctx:any) {
  const startMessage = "Hola, ¿cómo te puedo ayudar? 😄 \nPuedes seleccionar en una opción 👇";

  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
      reply_markup: {
          inline_keyboard: [
              [
                  {text: "Información de las Facultades", callback_data: 'facultades'}
              ],
              [
                  {text: "Visita nuestro sitio web", url: "https://www.upse.edu.ec/postgrado/"}
              ],
              [
                  {text: "Inscribirse en una maestría", callback_data: 'registro'}
              ]
          ]
      }
  }) 
}

bot.action('registro', async (ctx:any) => {
  ctx.answerCbQuery();
   
bot.hears('text', async ctx => {
  const message = ctx.message.text;
  const uniqueUserId = ctx.chat.id;
  let answer: any;
  let validarNum = false;
  const validarDig = /^\d{10}$/;
  const validarEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const validarLetras =
    /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚñÑ])[-a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s[-a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
try {

  const response = await nlp.process("es", message);
    if (response.intent === 'inscripcion.inscripcion') {
      const intent = 'inscripcion.inscripcion'; // Se define el intento 
      const answer = response && response.intent === intent ? response.answer : '¿Deseas inscribirte? 🤗';
      bot.telegram.sendMessage(ctx.chat.id, answer, {
          reply_markup: {
              keyboard: [
                [{ text: "Si" },
                  {text: "No"}]
               
              ],
              
              resize_keyboard: true,
              one_time_keyboard: true
          }
          
      })
      userStates[uniqueUserId] = {}; // Inicializar el estado de usuario
      userStates[uniqueUserId].currentStep = 1; // Establecer el primer paso del flujo
    } else if (userStates[uniqueUserId] && userStates[uniqueUserId].currentStep) {
      if (
        message.toLowerCase() === "no" ||
        message.toLowerCase() === "cancelar"
      ) {
        delete userStates[uniqueUserId];
        
        answer = "Entiendo...🥺 \nSi cambias de opinión, estaré aquí para ayudarte.😄";
      } else {
        switch ( userStates[uniqueUserId].currentStep) {
          case 1:
            userStates[uniqueUserId].confirm = "temp";
            answer =
              "¡Perfecto! 🥳 (Puedes cancelar el registro si escribes: <b>cancelar</b>) <br><br> Por favor, proporciona tu número de cédula:";
              userStates[uniqueUserId].currentStep=2;
            break;
            }
      }
    }

  
} catch (error) {
  
}

});
});

bot.action('facultades', (ctx: any) => {
  ctx.answerCbQuery();

  const menuMessage = "Elije la facultad que buscas 👇:"
  bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
      reply_markup: {
          keyboard: [
            [{ text: "Ciencias del Mar 🌊🔬" }],
            [{ text: "Sistemas y Telecomunicaciones 📡💻" }],
            [{ text: "Ciencias de la Educación e Idiomas 📚🗣️" }],
            [{ text: "Ciencias de la Ingeniería 🛠️🔌" }],
            [{ text: "Ciencias Sociales y de la Salud 👥🏥" }],
            [{ text: "Ciencias Administrativas 📊💼" }],
            [{ text: "Ciencias Agrarias 🌱🚜" }]
          ],
          resize_keyboard: true,
          one_time_keyboard: true
      }
  })
  
});


bot.hears('Salir', async ctx => {
  const intent = 'despedida.despedida'; // Se define el intento 
  const response = await nlp.process('es', 'chao');
  const answer = response && response.intent === intent ? response.answer : 'Hasta luego';
  // Envía la respuesta
  await bot.telegram.sendMessage(ctx.chat.id, answer, {
    reply_markup: {
      remove_keyboard: true
    }
  });
});



bot.on('text', async ctx => {
  const message = ctx.message.text;
  let answer: any;
  const response = await nlp.process("es", message);
    if (response.intent === "None") {
      answer = ctx.reply("No entiendo lo que quieres decir.");
    } 
    else if (response.intent === 'saludo.saludo') {
      sendStartMessage(ctx);
      
    }else {
      answer = ctx.reply(response.answer, { parse_mode: "HTML" });
    }
});




 



bot.launch();




const userStates: Record<string, UserData> = {};

interface UserData {
  identificacion?: string;
  nombres?: string;
  apellidos?: string;
  sexo?: string;
  celular?: string;
  email_personal?: string;
  selectedMaestria?: string;
  maestria?: string;
  codigo_vendedor?: string;
  confirm?: string;
  maestriasDisponibles?: string[];
  currentStep?:number;
}

export const getMaestriasTlg = async () => {
  const oferta = await Oferta.findAll({
    attributes: ["descripcion"],
    order: [["descripcion", "ASC"]],
  });
  const maestrias = oferta.map((oferta: any) => oferta.descripcion);
  return maestrias;
};

export async function postConsultaTlg(ctx:any) {
  const message = ctx.message.text;
  const uniqueUserId = ctx.chat.id;
  let answer = "";
  let validarNum = false;
  const validarDig = /^\d{10}$/;
  const validarEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const validarLetras =
    /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚñÑ])[-a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s[-a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;

  try {
    const response = await nlp.process("es", message);

    if (response.intent === "inscripcion.inscripcion") {
      answer = response.answer;
      userStates[uniqueUserId] = {}; // Inicializar el estado de usuario
      userStates[uniqueUserId].currentStep = 1; // Establecer el primer paso del flujo
    } else if (userStates[uniqueUserId] && userStates[uniqueUserId].currentStep) {
      if (
        message.toLowerCase() === "no" ||
        message.toLowerCase() === "cancelar"
      ) {
        delete userStates[uniqueUserId];
        
        answer = "Entiendo...🥺 <br>Si cambias de opinión, estaré aquí para ayudarte.😄";
      } else {
        switch ( userStates[uniqueUserId].currentStep) {
          case 1:
            userStates[uniqueUserId].confirm = "temp";
            answer =
              "¡Perfecto! 🥳 (Puedes cancelar el registro si escribes: <b>cancelar</b>) <br><br> Por favor, proporciona tu número de cédula:";
              userStates[uniqueUserId].currentStep=2;
            break;
          case 2:
            if (!validarNum) {
              if (!message.match(validarDig)) {
                answer =
                  "El número de cédula debe tener 10 dígitos numéricos 🙂. Por favor, intenta nuevamente:";
              } else {
                userStates[uniqueUserId].identificacion = message;
                validarNum = true; // Marcar la cédula como válida
                if (validarNum) {
                  answer = "Ingresa tus nombres:";
                  userStates[uniqueUserId].currentStep = 3;
                }
              }
            }
            break;

          case 3:
            if (!message.match(validarLetras)) {
              answer =
                "El nombre debe contener solo letras 🙂. Por favor, intenta nuevamente:";
            } else if (message.trim().length < 3) {
              answer =
                "El nombre debe tener al menos 3 carácteres 🙂. Por favor, intenta nuevamente:";
            } else {
              userStates[uniqueUserId].nombres = message;
              answer = "Ingresa tus apellidos:";
              userStates[uniqueUserId].currentStep = 4;
            }
            break;
          case 4:
            if (!message.match(validarLetras)) {
              answer =
                "El apellido debe contener solo letras 🙂. Por favor, intenta nuevamente:";
            } else if (message.trim().length < 3) {
              answer =
                "El apellido debe tener al menos 3 carácteres 🙂. Por favor, intenta nuevamente:";
            } else {
              userStates[uniqueUserId].apellidos = message;
              answer = `Sexo: F=Femenino, M=Masculino <br>
            <a class="option-link">F</a>
            <a class="option-link">M</a>`;
            userStates[uniqueUserId].currentStep = 5;
            }
            break;
          case 5:
            if (
              message.toUpperCase() === "F" ||
              message.toUpperCase() === "M"
            ) {
              userStates[uniqueUserId].sexo = message.toUpperCase();
              answer = "Ingrese su número de teléfono:";
              userStates[uniqueUserId].currentStep = 6;
            } else {
              answer =
                "Por favor, ingresa 'F' para Femenino o 'M' para Masculino:";
            }
            break;
          case 6:
            if (!validarNum) {
              if (!message.match(validarDig)) {
                answer =
                  "El número de teléfono debe tener 10 dígitos numéricos 🙂. Por favor, intenta nuevamente:";
              } else {
                userStates[uniqueUserId].celular = message;
                validarNum = true; // Marcar la telefono como válido
                if (validarNum) {
                  answer = "Ingrese su correo personal:";
                   userStates[uniqueUserId].currentStep = 7;
                }
              }
            }
            break;
          case 7:
            if (!message.match(validarEmail)) {
              answer =
                "La dirección de correo electrónico no es válida 🙂. Por favor, intenta nuevamente:";
            } else {
              userStates[uniqueUserId].email_personal = message;
              answer = `Ingrese código: (Si no tiene, haga click en el botón)<br>
                <a class="option-link">No tengo código</a>`;
               userStates[uniqueUserId].currentStep = 8;
            }

            break;

          case 8:
            userStates[uniqueUserId].codigo_vendedor = message;
            const maestrias = await getMaestriasTlg(); // Obtener la lista de maestrías
            if (Array.isArray(maestrias)) {
              userStates[uniqueUserId].maestriasDisponibles = maestrias;
              answer =
                'Por favor, elige una maestría de la lista:<br><a class="option-link">' +
                maestrias.join(
                  '<a class="option-link">'
                ) +
                "</a>";
                userStates[uniqueUserId].currentStep = 9;
            } else {
              answer = "Ha ocurrido un error al obtener la lista de maestrías.";
            }
            break;

          case 9:
            userStates[uniqueUserId].maestria = message;
            const selectedMaestria = message.toLowerCase();
            if (userStates[uniqueUserId].maestriasDisponibles) {
              const lowerCaseMaestrias = userStates[uniqueUserId].maestriasDisponibles?.map(
                (maestria: string) => maestria.toLowerCase()
              );
              if (lowerCaseMaestrias?.includes(selectedMaestria)) {
                userStates[uniqueUserId].selectedMaestria = selectedMaestria;
                answer =
                  "¡Registro completado! 🤗 <br>Revise su correo para continuar el proceso 📧. <br> Pronto un asesor se contactará contigo 📱👨‍💼.";

                const personaData = { ...userStates[uniqueUserId] };
                const persona = Persona.build(personaData);
                await persona.save();
                console.log(persona);
                
                delete userStates[uniqueUserId];
              } else {
                answer =
                  "La maestría seleccionada no es válida 🙂. Por favor, elige una maestría de la lista.";
              }
            } else {
              answer = "No hay maestrías disponibles para seleccionar.";
            }
            break;
        }
      }
    } else {
      if (response.intent === "None") {
        answer = "No entiendo lo que quieres decir. 😟";
      } else {
        answer = response.answer;
      }
    }
  } catch (error) {
    console.error("Error en el procesamiento del mensaje:", error);
    answer = "Error en el procesamiento del mensaje";
  } 

}




