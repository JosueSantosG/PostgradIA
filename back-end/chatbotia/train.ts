
const { NlpManager } = require('node-nlp');
import fs from 'fs';
export const nlp = new NlpManager({ languages: ['es'], forceNER: true });
  // Entrenamiento del asistente virtual
  (async () => {
    if (fs.existsSync('./model.nlp')) {
      nlp.load('./model.nlp');
      console.info('Modelo cargado correctamente!')
    }else{
      nlp.addLanguage('es');
    //TAG: NOMBRE BOT
      nlp.addDocument('es', 'Como te llamas', 'nombot.nombot');
      nlp.addDocument('es', 'cual es tu nombre', 'nombot.nombot');
      nlp.addAnswer('es', 'nombot.nombot', 'Mi nombre es PostgradIA 🤖');

    //TAG: SALUDO
      nlp.addDocument('es', 'Hola', 'saludo.saludo');
      nlp.addDocument('es', 'Ey, que tal', 'saludo.saludo');
      nlp.addDocument('es', 'Como estas', 'saludo.saludo');
      nlp.addDocument('es', 'Buenos dias', 'saludo.saludo');

      nlp.addAnswer('es', 'saludo.saludo', `Hola, ¿cómo te puedo ayudar? 😄<br>
      Puedes hacer clic en una opción 👇
      <a class="option-link">Información sobre las Facultades 🎓</a>
      <a class="option-link">Quiero inscribirme 📝</a>
      <a class="option-link">Información Maestrías 📚</a>
      <a class="option-link">Formas de pago 💳</a>
      <a class="option-link">Precio de maestrías 💰</a>
      <a class="option-link">Descuentos 🎉</a>
      <a class="option-link">¿Dónde subo mis documentos? 📚</a>
      <a class="option-link">¿Cuál es mi campo amplio? 🌐</a><br>
      O escribe tu pregunta en la caja de texto.
      `);


    //TAG: DESPEDIDA
      nlp.addDocument('es', 'adios por ahora', 'despedida.despedida');
      nlp.addDocument('es', 'Nos vemos', 'despedida.despedida');
      nlp.addDocument('es', 'debo irme', 'despedida.despedida');
      nlp.addDocument('es', 'Hasta luego', 'despedida.despedida');
      nlp.addDocument('es', 'bye', 'despedida.despedida');
      nlp.addDocument('es', 'Chao', 'despedida.despedida');
      

      nlp.addAnswer('es', 'despedida.despedida', '¡Adios! 👋 Espero haberte ayudado.');
      nlp.addAnswer('es', 'despedida.despedida', 'Hasta luego, que tengas un buen dia. 👋');
      nlp.addAnswer('es', 'despedida.despedida', 'Nos vemos pronto. 👋 ¡Vuelve cuando quieras!');
      nlp.addAnswer('es', 'despedida.despedida', 'Bye cuidate, 👋 si tienes otra consulta no olvides preguntarme!');

    //TAG: GRACIAS
      nlp.addDocument('es', 'Gracias', 'gracias.gracias');
      nlp.addDocument('es', 'Eso es util', 'gracias.gracias');
      nlp.addDocument('es', 'Te lo agradezco', 'gracias.gracias');
      nlp.addDocument('es', 'Me sirvio mucho', 'gracias.gracias');

      nlp.addAnswer('es', 'gracias.gracias', '¡Feliz de ayudar! 😄 Si tienes otra consulta no olvides preguntarme!');
      nlp.addAnswer('es', 'gracias.gracias', 'Es un placer ayudarte. 😄 ¡No olvides preguntarme si tienes otra duda!');


    //coso ``

    //TAG: FACULTADES
  nlp.addDocument('es', 'facultades', 'facultades.facultades');
  nlp.addAnswer('es', 'facultades.facultades', `Hay siete facultades disponibles 🎓: <br>
  <a class="option-link">Ciencias del Mar 🌊🔬</a>
  <a class="option-link">Sistemas y Telecomunicaciones 📡💻</a>
  <a class="option-link">Ciencias de la Educación e Idiomas 📚🗣️</a>
  <a class="option-link">Ciencias de la Ingeniería 🛠️🔌</a>
  <a class="option-link">Ciencias Sociales y de la Salud 👥🏥</a>
  <a class="option-link">Ciencias Administrativas 📊💼</a>
  <a class="option-link">Ciencias Agrarias 🌱🚜</a><br>
  Puedes consultar más información haciendo clic en una facultad 👆`);


//coso ``
//TAG: INFO_FAC_CIENCIAS_DEL_MAR
  nlp.addDocument('es', 'ciencias del mar', 'facultades.fac_cmar');
  nlp.addAnswer('es', 'facultades.fac_cmar', `La facultad de <b>Ciencias del Mar</b> tiene las siguientes maestrías disponibles: <br>
  <a class="option-link">Maestría en Acuicultura</a>
  <a class="option-link">Maestría en Biodiversidad y Cambio Climático</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);

  //TAG: INFO_MAESTRIA_ACUICULTURA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'maestria en Acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'cuanto dura la maestria de acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'que titulo obtendre en acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'la maestria de acui tiene modalidad virtual', 'maestria.acuicultura');
    nlp.addDocument('es', 'que modalidad tiene Acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'cual es la resolucion de Acuicultura', 'maestria.acuicultura');
    nlp.addDocument('es', 'cual es correo de Acuicultura', 'maestria.acuicultura');

    nlp.addAnswer('es', 'maestria.acuicultura', `La Maestría en <b>Acuicultura</b> contiene lo siguiente: 
    <br><strong>Título a obtener:</strong> 
    Magíster en Acuicultura<br><strong>
    Duración:</strong> 2 Semestres Académicos<br><strong>
    Resolución CES:</strong> RPC-SO-18-No.293-2023<br><strong>
    Modalidad:</strong> Híbrida<br><br>Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/acuicultura" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.acuicultura@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Acuicultura?</a>
    <a class="option-link">¿Cuál es la malla de Acuicultura?</a>
    `);
 
    //costo de acuicultura
      nlp.addDocument('es', 'Cual es el costo de Acuicultura', 'maestria.costo_acui');
      nlp.addDocument('es', 'cual es el valor de acuicultura', 'maestria.costo_acui');
      nlp.addDocument('es', 'cuanto se paga por la maestria de acuicultura', 'maestria.costo_acui');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria acuicultura', 'maestria.costo_acui');
      nlp.addDocument('es', 'que precio tiene acuicultura', 'maestria.costo_acui');
      nlp.addDocument('es', 'que vale la maestria de acuicultura', 'maestria.costo_acui');

      nlp.addAnswer('es','maestria.costo_acui', `La maestría de <b>Acuicultura</b> tiene un arancel de <b>$3700</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$4000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a la que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);
      
    //modulos de acuicultura
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de acuicultura', 'modulos.mod_acui');
      nlp.addDocument('es', 'modulos de la maestria de acuicultura', 'modulos.mod_acui');
      nlp.addDocument('es', 'que modulos tiene acuicultura', 'modulos.mod_acui');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de acuicultura', 'modulos.mod_acui');

      nlp.addAnswer('es','modulos.mod_acui',`La maestría de <b>Acuicultura</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de acuicultura</a>
      `);
    //nombre asignaturas acuicultura
        nlp.addDocument('es', 'dime las asignaturas de acuicultura', 'modulos.asig_acui');
        nlp.addDocument('es', 'cual es la malla de acuicultura', 'modulos.asig_acui');
        nlp.addDocument('es', 'cuales son las materias de acuicultura', 'modulos.asig_acui');
        
        nlp.addAnswer('es','modulos.asig_acui',`Puedes revisar la malla de la maestría de <b>Acuicultura</b> con sus módulos (asignaturas) con más detalles
        ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/acuicultura/malla-acuicultura.pdf" target="_blank">link</a>.

      `);

  //TAG: INFO_MAESTRIA_BIODIVERSIDAD
    nlp.addDocument('es', 'dame más información sobre la maestria en biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'maestria en biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'maestria de cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'quiero información de la Maestria en biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'cuanto dura la maestria de biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'que titulo obtendre en biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'la maestria de biodiversidad y cambio climatico tiene modalidad virtual', 'maestria.biodiv');
    nlp.addDocument('es', 'que modalidad tiene biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'cual es la resolucion de biodiversidad y cambio climatico', 'maestria.biodiv');
    nlp.addDocument('es', 'cual es correo de biodiversidad', 'maestria.biodiv');

    nlp.addAnswer('es', 'maestria.biodiv', `La Maestría en <b>Biodiversidad y Cambio Climático</b> contiene lo siguiente: <br>
    <b>Título a obtener:</b> Magíster en Biodiversidad y Cambio Climático<br><b>
    Duración:</b> 2 Semestres Académicos<br><b>
    Resolución CES:</b> RPC-SO-51-NO.834-2022<br><b>
    Modalidad:</b> Presencial (En tiempo real)<br><br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/biodiversidad-y-cambio-climatico" target="_blank">link </a> o comuníquese al 📧 <a href="mailto:maestria.biodiversidadcambioclimatico@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Biodiversidad?</a>
    <a class="option-link">¿Cuál es la malla de Biodiversidad?</a>
    `);

    //costo_maestria_biodiv
    nlp.addDocument('es', 'Cual es el costo de biodiversidad', 'maestria.costobio');
    nlp.addDocument('es', 'cuanto debo pagar en la maestria biodiversidad y cambio climatico', 'maestria.costobio');
    nlp.addDocument('es', 'cual es el valor de biodiversidad y cambio climatico', 'maestria.costobio');
    nlp.addDocument('es', 'pagar en la maestria biodiversidad y cambio climatico', 'maestria.costobio');
    nlp.addDocument('es', 'precio biodiversidad y cambio climatico', 'maestria.costobio');
    nlp.addDocument('es', 'que vale la maestria de biodiversidad y cambio climatico', 'maestria.costobio');


    nlp.addAnswer('es','maestria.costobio', `La maestría de <b>Biodiversidad y Cambio Climático</b> tiene un arancel de <b>$4000</b> dólares y matrícula de <b>$0</b> dólares que dan un total de <b>$4000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a la que puedes aplicar'
    <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);
      
      //modulos de biodiv
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de biodiversidad', 'modulos.mod_biodiv');
      nlp.addDocument('es', 'modulos de la maestria de biodiversidad', 'modulos.mod_biodiv');
      nlp.addDocument('es', 'que modulos tiene biodiversidad', 'modulos.mod_biodiv');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de biodiversidad', 'modulos.mod_biodiv');

      nlp.addAnswer('es','modulos.mod_biodiv',`La maestría de <b>Biodiversidad y Cambio Climático</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Biodiversidad</a>
      `);
        //nombre asignaturas Biodiversidad
        nlp.addDocument('es', 'dime las asignaturas de Biodiversidad', 'modulos.asig_biodiv');
        nlp.addDocument('es', 'cual es la malla de Biodiversidad', 'modulos.asig_biodiv');
        nlp.addDocument('es', 'cuales son las materias de Biodiversidad', 'modulos.asig_biodiv');
        
        nlp.addAnswer('es','modulos.asig_biodiv',`Puedes revisar la malla de la maestría de <b>Biodiversidad y Cambio Climático</b> con sus módulos (asignaturas) con más detalles
        ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestria-biodiversidad/malla-biodiversidad.pdf" target="_blank">link</a>.

      `);

//TAG: INFO_FAC_SISTEMAS_Y_TELECOMUNICACIONES
  nlp.addDocument('es', 'sistemas y telecomunicaciones', 'facultades.fac_sistel');
  nlp.addAnswer('es', 'facultades.fac_sistel', `La facultad de <b>Sistemas y Telecomunicaciones</b> tiene las siguientes maestrías disponibles: <br>
  <a class="option-link">Maestría en Electrónica y Automatización</a>
  <a class="option-link">Maestría en Ciberseguridad</a>
  <a class="option-link">Maestría en Tecnologías de la Información</a>
  <a class="option-link">Maestría en Telecomunicaciones</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);

  //TAG: INFO_MAESTRIA_ELECTRONICA

    nlp.addDocument('es', 'dame mas informacion sobre la maestria de electronica y automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'maestria en Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'cuanto dura la maestria de Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'que titulo obtendre en Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'la maestria de Electronica y Automatizacion tiene modalidad virtual', 'maestria.electronica');
    nlp.addDocument('es', 'que modalidad tiene Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'cual es la resolucion de Electronica y Automatizacion', 'maestria.electronica');
    nlp.addDocument('es', 'cual es correo de Electronica y Automatizacion', 'maestria.electronica');

    nlp.addAnswer('es', 'maestria.electronica', `La Maestría en <b>Electrónica y Automatización</b> contiene lo siguiente: 
    <br><strong>Título a obtener:</strong> Magíster en Electrónica y Automatización<br><strong>
    Duración:</strong> 2 Semestres Académicos<br><strong>
    Resolución CES:</strong> RPC-SO-03-No.049-2023<br><strong>
    Modalidad:</strong> En línea<br><br>Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/electronica-y-automatizacion" target="_blank">enlace</a> o comunícate al 📧<a href="mailto:maestria.electronica.automatizaion@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Electrónica y Automatización?</a>
    <a class="option-link">¿Cuál es la malla de Electrónica y Automatización?</a>
    `);
          
    //costo_maestria_electronica
      nlp.addDocument('es', 'Cual es el costo de electronica y automatizacion', 'maestria.costoelect');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria electronica y automatizacion', 'maestria.costoelect');
      nlp.addDocument('es', 'cual es el valor de electronica y automatizacion', 'maestria.costoelect');
      nlp.addDocument('es', 'pagar en la maestria electronica y automatizacion', 'maestria.costoelect');
      nlp.addDocument('es', 'precio electronica y automatizacion', 'maestria.costoelect');
      nlp.addDocument('es', 'que vale la maestria de electronica y automatizacion', 'maestria.costoelect');

      nlp.addAnswer('es','maestria.costoelect', `La maestría de <br> Electrónica y Automatización</br> tiene un arancel de <b>$3800</b> dólares y matrícula de <b>$230</b> dólares que dan un total de <b>$4030</b> dólares. <br><br>Recuerda que hay diferentes descuentos a la que puedes aplicar
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);


    //modulos de electronica
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de electronica', 'modulos.mod_elect');
      nlp.addDocument('es', 'modulos de la maestria de electronica', 'modulos.mod_elect');
      nlp.addDocument('es', 'que modulos tiene electronica', 'modulos.mod_elect');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de electronica', 'modulos.mod_elect');

      nlp.addAnswer('es','modulos.mod_elect',`La maestría de <b>Electrónica y Automatización</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Electrónica</a>
      `);
    //nombre asignaturas electronica
      nlp.addDocument('es', 'dime las asignaturas de electronica', 'modulos.asig_elect');
      nlp.addDocument('es', 'cual es la malla de Electronica y Automatizacion', 'modulos.asig_elect');
      nlp.addDocument('es', 'cuales son las materias de electronica', 'modulos.asig_elect');
      
      nlp.addAnswer('es','modulos.asig_elect',`Puedes revisar la malla de la maestría de <b>Electrónica y Automatización</b> con sus módulos (asignaturas) con más detalles
      ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/electronica/malla-electronica.pdf" target="_blank">link</a>.

    `);

  //TAG: INFO_MAESTRIA_CIBERSEGURIDAD
    nlp.addDocument('es', 'dame mas informacion sobre la maestria de ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'maestria en Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'cuanto dura la maestria de Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'que titulo obtendre en Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'la maestria de Ciberseguridad tiene modalidad virtual', 'maestria.ciberseg');
    nlp.addDocument('es', 'que modalidad tiene Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'cual es la resolucion de Ciberseguridad', 'maestria.ciberseg');
    nlp.addDocument('es', 'cual es correo de Ciberseguridad', 'maestria.ciberseg');

    nlp.addAnswer('es', 'maestria.ciberseg', `La Maestría en <b>Ciberseguridad</b> contiene lo siguiente: 
    <br><strong>Título a obtener:</strong> Magíster en Ciberseguridad<br><strong>
    Duración:</strong> 2 Semestres Académicos<br><strong>
    Resolución CES:</strong> RPC-SO-39-NO.627-2022<br><strong>
    Modalidad:</strong> Online<br><br>Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/ciberseguridad" target="_blank">enlace</a> o comunícate al 📧<a href="mailto:maestria.ciberseguridad@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Ciberseguridad?</a>
    <a class="option-link">¿Cuál es la malla de Ciberseguridad?</a>
    `);
    
    //costo_maestria_ciberseguridad
      nlp.addDocument('es', 'Cual es el costo ciberseguridad', 'maestria.costociber');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria ciberseguridad', 'maestria.costociber');
      nlp.addDocument('es', 'cual es el valor de ciberseguridad', 'maestria.costociber');
      nlp.addDocument('es', 'pagar en la maestria de ciberseguridad', 'maestria.costociber');
      nlp.addDocument('es', 'precio ciberseguridad', 'maestria.costociber');
      nlp.addDocument('es', 'que vale la maestria de ciberseguridad', 'maestria.costociber');

      nlp.addAnswer('es','maestria.costociber', `La maestría de <br> Ciberseguridad</br> tiene un arancel de <b>$4000</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$4400</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos_ciberseguridad
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de ciberseguridad', 'modulos.mod_ciber');
      nlp.addDocument('es', 'modulos de la maestria de ciberseguridad', 'modulos.mod_ciber');
      nlp.addDocument('es', 'que modulos tiene ciberseguridad', 'modulos.mod_ciber');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Ciberseguridad', 'modulos.mod_ciber');

      nlp.addAnswer('es','modulos.mod_ciber',`La maestría de <b>Ciberseguridad</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Ciberseguridad</a>
      `);

    //nombre_asignaturas_ciberseguridad
      nlp.addDocument('es', 'dime las asignaturas de ciberseguridad', 'modulos.asig_ciber');
      nlp.addDocument('es', 'cual es la malla de ciberseguridad', 'modulos.asig_ciber');
      nlp.addDocument('es', 'cuales son las materias de ciberseguridad', 'modulos.asig_ciber');

      nlp.addAnswer('es','modulos.asig_ciber',`Puedes revisar la malla de la maestría de <b>Ciberseguridad</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/ciberseguridad.pdf" target="_blank">link</a>.
      `);




  //TAG: INFO_MAESTRIA_TELECOMUNICACIONES
    nlp.addDocument('es', 'dame mas informacion sobre la maestria de telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'maestria en Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'cuanto dura la maestria de Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'que titulo obtendre en Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'la maestria de Telecomunicaciones tiene modalidad virtual', 'maestria.telecom');
    nlp.addDocument('es', 'que modalidad tiene Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'cual es la resolucion de Telecomunicaciones', 'maestria.telecom');
    nlp.addDocument('es', 'cual es el correo de Telecomunicaciones', 'maestria.telecom');

    nlp.addAnswer('es', 'maestria.telecom', `La Maestría en <b>Telecomunicaciones</b> contiene lo siguiente: 
    <br><strong>Título a obtener:</strong> Magíster en Telecomunicaciones<br><strong>
    Duración:</strong> 2 Semestres Académicos<br><strong>
    Resolución CES:</strong> RPC-SO-51-NO.834-2022<br><strong>
    Modalidad:</strong> Online<br><br>Si quieres más información visita este 👉<a href="https://www.upse.edu.ec/postgrado/index.php/telecomunicaciones" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.telecomunicaciones@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Telecomunicaciones?</a>
    <a class="option-link">¿Cuál es la malla de Telecomunicaciones?</a>
    `);
    //costo_maestria_telecomunicaciones
      nlp.addDocument('es', 'Cual es el costo de telecomunicaciones', 'maestria.costo_telecom');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria telecomunicaciones', 'maestria.costo_telecom');
      nlp.addDocument('es', 'cual es el valor de telecomunicaciones', 'maestria.costo_telecom');
      nlp.addDocument('es', 'pagar en la maestria telecomunicaciones', 'maestria.costo_telecom');
      nlp.addDocument('es', 'precio telecomunicaciones', 'maestria.costo_telecom');
      nlp.addDocument('es', 'que vale la maestria de telecomunicaciones', 'maestria.costo_telecom');

      nlp.addAnswer('es', 'maestria.costo_telecom', `La maestría de <b>Telecomunicaciones</b> tiene un arancel de <b>$3800</b> dólares y matrícula de <b>$200</b> dólares que dan un total de <b>$4000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de telecomunicaciones
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de telecomunicaciones', 'modulos.mod_telecom');
      nlp.addDocument('es', 'modulos de la maestria de telecomunicaciones', 'modulos.mod_telecom');
      nlp.addDocument('es', 'que modulos tiene telecomunicaciones', 'modulos.mod_telecom');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Telecomunicaciones', 'modulos.mod_telecom');

      nlp.addAnswer('es', 'modulos.mod_telecom', `La maestría de <b>Telecomunicaciones</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Telecomunicaciones</a>
      `);

    //nombre asignaturas telecomunicaciones
      nlp.addDocument('es', 'dime las asignaturas de telecomunicaciones', 'modulos.asig_telecom');
      nlp.addDocument('es', 'cual es la malla de telecomunicaciones', 'modulos.asig_telecom');
      nlp.addDocument('es', 'cuales son las materias de telecomunicaciones', 'modulos.asig_telecom');

      nlp.addAnswer('es', 'modulos.asig_telecom', `Puedes revisar la malla de la maestría de <b>Telecomunicaciones</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/telecomunicaciones/malla-telecomunicaciones.pdf" target="_blank">link</a>.
      `);



  //TAG: INFO_MAESTRIA_TECNOLOGIAS_INFORMACION
    nlp.addDocument('es', 'dame mas informacion sobre la maestria de tecnologias de la informacion', 'maestria.ti');
    nlp.addDocument('es', 'maestria en Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'cuanto dura la maestria de Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'que titulo obtendre en Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'la maestria de Tecnologias de la Informacion tiene modalidad virtual', 'maestria.ti');
    nlp.addDocument('es', 'que modalidad tiene Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'cual es la resolucion de Tecnologias de la Informacion', 'maestria.ti');
    nlp.addDocument('es', 'cual es correo de Tecnologias de la Informacion', 'maestria.ti');

    nlp.addAnswer('es', 'maestria.ti', `La Maestría en <b>Tecnologías de la Información</b> contiene lo siguiente: 
    <br><strong>Título a obtener:</strong> Magíster en Tecnologías de la Información<br><strong>
    Duración:</strong> 2 Semestres Académicos<br><strong>
    Resolución CES:</strong> RPC-SO-14-NO.287-2020<br><strong>
    Modalidad:</strong> Presencial<br><br>Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/tecnologias-informacion" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.tic@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Tecnologías de la Información?</a>
    <a class="option-link">¿Cuál es la malla de Tecnologías de la Información?</a>
    `);
    
    //costo_maestria_ti
      nlp.addDocument('es', 'Cual es el costo de tecnologias de la informacion', 'maestria.costo_ti');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria tecnologias de la informacion', 'maestria.costo_ti');
      nlp.addDocument('es', 'cual es el valor de tecnologias de la informacion', 'maestria.costo_ti');
      nlp.addDocument('es', 'pagar en la maestria tecnologias de la informacion', 'maestria.costo_ti');
      nlp.addDocument('es', 'precio tecnologias de la informacion', 'maestria.costo_ti');
      nlp.addDocument('es', 'que vale la maestria de tecnologias de la informacion', 'maestria.costo_ti');

      nlp.addAnswer('es', 'maestria.costo_ti', `La maestría de <b>Tecnologías de la Información</b> tiene un arancel de <b>$5500</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$5800</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de tecnologias de la informacion
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de tecnologias de la informacion', 'modulos.mod_ti');
      nlp.addDocument('es', 'modulos de la maestria de tecnologias de la informacion', 'modulos.mod_ti');
      nlp.addDocument('es', 'que modulos tiene tecnologias de la informacion', 'modulos.mod_ti');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de tecnologias de la informacion', 'modulos.mod_ti');

      nlp.addAnswer('es', 'modulos.mod_ti', `La maestría de <b>Tecnologías de la Información</b> tiene: 
      <div>
      <ul>
      <li>3 periodos académicos</li>
      <li>14 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Tecnologías de la Información</a>
      `); 

    //nombre asignaturas tecnologias de la informacion
      nlp.addDocument('es', 'dime las asignaturas de tecnologias de la informacion', 'modulos.asig_ti');
      nlp.addDocument('es', 'cual es la malla de tecnologias de la informacion', 'modulos.asig_ti');
      nlp.addDocument('es', 'cuales son las materias de tecnologias de la informacion', 'modulos.asig_ti');

      nlp.addAnswer('es', 'modulos.asig_ti', `Puedes revisar la malla de la maestría de <b>Tecnologías de la Información</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/tecnologias/malla-tecnologias-informacion.pdf" target="_blank">link</a>.
      `);




//TAG: INFO_FAC_CIENCIAS_EDUCACION_IDIOMAS
  nlp.addDocument('es', 'ciencias de la educacion e idiomas', 'facultades.fac_idiomas');
  nlp.addAnswer('es', 'facultades.fac_idiomas', `La facultad de <b>Ciencias de la Educacion e Idiomas</b> tiene las siguientes maestrías disponibles: <br>
  <a class="option-link">Maestría en Educación Inicial</a>
  <a class="option-link">Maestría en Educación Básica</a>
  <a class="option-link">Maestría en Educación mención Tecnología e Innovación Educativa</a>
  <a class="option-link">Maestría en Entrenamiento Deportivo</a>
  <a class="option-link">Maestría en Psicopedagogía</a>
  <a class="option-link">Maestría en Pedagogía de los Idiomas Nacionales y Extranjeros mención Enseñanza de Inglés</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);
 
  //TAG: INFO_MAESTRIA_EDUCACION_INICIAL
    nlp.addDocument('es', 'dame más información sobre la maestria en Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'maestria en Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'cuanto dura la maestria de Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'que título obtendre en Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'la maestria de Educacion Inicial tiene modalidad virtual', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'que modalidad tiene Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'cual es la resolucion de Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addDocument('es', 'cual es correo de Educacion Inicial', 'maestria.educacion_inicial');
    nlp.addAnswer('es', 'maestria.educacion_inicial', `La Maestría en <b>Educación Inicial</b> contiene lo siguiente: <br>
    <b>Título a obtener:</b> Magíster en Educación Inicial<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-04-No.077-2023<br>
    <b>Modalidad:</b> En línea<br>
    <br>
    Si quieres más información visita este 👉<a href="https://www.upse.edu.ec/postgrado/index.php/educacion-inicial" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.educacion.inicial@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Educación Inicial?</a>
    <a class="option-link">¿Cuál es la malla de Educación Inicial?</a>

    `);
    
    //costo maestria Educacion inicial
      nlp.addDocument('es', 'Cual es el costo de educacion inicial', 'maestria.costo_edu_ini');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria educacion inicial', 'maestria.costo_edu_ini');
      nlp.addDocument('es', 'cual es el valor de educacion inicial', 'maestria.costo_edu_ini');
      nlp.addDocument('es', 'pagar en la maestria de educacion inicial', 'maestria.costo_edu_ini');
      nlp.addDocument('es', 'precio de educacion inicial', 'maestria.costo_edu_ini');
      nlp.addDocument('es', 'que vale la maestria de educacion inicial', 'maestria.costo_edu_ini');

      nlp.addAnswer('es','maestria.costo_edu_ini', `La maestría de <b>Educacion Inicial</b> tiene un arancel de <b>$2000</b> dólares y matrícula de <b>$0</b> dólares que dan un total de <b>$2000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a la que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);
      
    //modulos de Educacion Inicial
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de Educacion Inicial', 'modulos.mod_edu_ini');
      nlp.addDocument('es', 'modulos de la maestria de Educacion Inicial', 'modulos.mod_edu_ini');
      nlp.addDocument('es', 'que modulos tiene Educacion Inicial', 'modulos.mod_edu_ini');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Educacion Inicial', 'modulos.mod_edu_ini');

      nlp.addAnswer('es','modulos.mod_edu_ini',`La maestría de <b>Educación Inicial</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Educacion Inicial</a>
      `);
    //nombre asignaturas Educacion Inicial
        nlp.addDocument('es', 'dime las asignaturas de Educacion Inicial', 'modulos.asig_edu_ini');
        nlp.addDocument('es', 'cual es la malla de Educacion Inicial', 'modulos.asig_edu_ini');
        nlp.addDocument('es', 'cuales son las materias de Educacion Inicial', 'modulos.asig_edu_ini');
        
        nlp.addAnswer('es','modulos.asig_edu_ini',`Puedes revisar la malla de la maestría de <b>Educacion Inicial</b> con sus módulos (asignaturas) con más detalles
        ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/educacion-inicial/malla-educacion-inicial.pdf" target="_blank">link</a>.

      `);
  //TAG: INFO_MAESTRIA_EDUCACION_BASICA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'maestria en Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'cuanto dura la maestria de Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'que titulo obtendre en Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'la maestria de Educacion Basica tiene modalidad en linea', 'maestria.educacion_basica');
    nlp.addDocument('es', 'que modalidad tiene Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'cual es la resolucion de Educacion Basica', 'maestria.educacion_basica');
    nlp.addDocument('es', 'cual es el correo de Educacion Basica', 'maestria.educacion_basica');
    nlp.addAnswer('es', 'maestria.educacion_basica', `La Maestría en <b>Educación Básica</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Educación Básica<br>
    <b>Duración:</b> 2 años académicos<br>
    <b>Resolución CES:</b> RPC-SO-04-No.077-2023<br>
    <b>Modalidad:</b> En línea<br>
    <br>
    Si quieres más información visita este 👉<a href="https://www.upse.edu.ec/postgrado/index.php/educacion-basica" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.educacionbasica@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Educación Básica?</a>
    <a class="option-link">¿Cuál es la malla de Educación Básica?</a>
    `);

    //costo de educación básica
      nlp.addDocument('es', 'Cual es el costo de Educacion basica', 'maestria.costo_edubasica');
      nlp.addDocument('es', 'cual es el valor de educacion basica', 'maestria.costo_edubasica');
      nlp.addDocument('es', 'cuanto se paga por la maestria de educacion basica', 'maestria.costo_edubasica');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria educacion basica', 'maestria.costo_edubasica');
      nlp.addDocument('es', 'que precio tiene educacion basica', 'maestria.costo_edubasica');
      nlp.addDocument('es', 'que vale la maestria de educacion basica', 'maestria.costo_edubasica');

      nlp.addAnswer('es', 'maestria.costo_edubasica', `La maestría de <b>Educacion basica</b> tiene un arancel de <b>$2000</b> dólares y matrícula de <b>$0</b> dólares que dan un total de <b>$2000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de educación básica
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de educacion basica', 'modulos.mod_edubasica');
      nlp.addDocument('es', 'modulos de la maestria de educacion basica', 'modulos.mod_edubasica');
      nlp.addDocument('es', 'que modulos tiene educacion basica', 'modulos.mod_edubasica');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de educacion basica', 'modulos.mod_edubasica');

      nlp.addAnswer('es', 'modulos.mod_edubasica', `La maestría de <b>Educación básica</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Educacion basica</a>
      `);

    //nombre asignaturas educación básica
      nlp.addDocument('es', 'dime las asignaturas de educacion basica', 'modulos.asig_edubasica');
      nlp.addDocument('es', 'cual es la malla de educacion basica', 'modulos.asig_edubasica');
      nlp.addDocument('es', 'cuales son las materias de educacion basica', 'modulos.asig_edubasica');

      nlp.addAnswer('es', 'modulos.asig_edubasica', `Puedes revisar la malla de la maestría de <b>Educación Básica</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/educacion-basica/malla-educacion-basica.pdf" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_EDUCACION_TECNOLOGIA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Educacion con Mencion en Tecnologia', 'maestria.edutecnol');
    nlp.addDocument('es', 'maestria en Educacion con Mencion en Tecnologia', 'maestria.edutecnol');
    nlp.addDocument('es', 'Educacion con Mencion en Tecnologia e Innovacion Educativa', 'maestria.edutecnol');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Educacion con Mencion', 'maestria.edutecnol');
    nlp.addDocument('es', 'cuanto dura la maestria de Educacion con Mencion en Tecnologia', 'maestria.edutecnol');
    nlp.addDocument('es', 'que titulo obtendre en Educacion con Mencion en Tecnologia e Innovacion Educativa', 'maestria.edutecnol');
    nlp.addDocument('es', 'la maestria de Educacion con Mencion en Tecnologia tiene modalidad virtual', 'maestria.edutecnol');
    nlp.addDocument('es', 'que modalidad tiene Educacion con Mencion en Tecnologia ', 'maestria.edutecnol');
    nlp.addDocument('es', 'cual es la resolucion de Educacion con Mencion en Tecnologia', 'maestria.edutecnol');
    nlp.addDocument('es', 'cual es correo de Educacion con Mencion en Tecnologia', 'maestria.edutecnol');

    nlp.addAnswer('es', 'maestria.edutecnol', `La Maestría en <b>Educación</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Educación Básica mención Tecnología E Innovación Educativa<br>
    <b>Duración:</b> 2 años académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.393-2022<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/educacion" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.educacion@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Educación con Mención en Tecnología?</a>
    <a class="option-link">¿Cuál es la malla de Educación con Mención en Tecnología?</a>
    `);
    //costo de educación con mención en tecnología e innovación educativa
      nlp.addDocument('es', 'Cual es el costo de Educacion con mencion en Tecnologia', 'maestria.costo_eduinnov');
      nlp.addDocument('es', 'cual es el valor de educacion con mencion en Tecnologia', 'maestria.costo_eduinnov');
      nlp.addDocument('es', 'cuanto se paga por la maestria de educacion con mencion en Tecnologia', 'maestria.costo_eduinnov');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria educacion con mencion en Tecnologia', 'maestria.costo_eduinnov');
      nlp.addDocument('es', 'que precio tiene educacion con mencion en Tecnologia', 'maestria.costo_eduinnov');
      nlp.addDocument('es', 'que vale la maestria de educacion con mencion en Tecnologia', 'maestria.costo_eduinnov');

      nlp.addAnswer('es', 'maestria.costo_eduinnov', `La maestría de <b>Educación con mención en Tecnología e Innovación Educativa</b> tiene un arancel de <b>$4200</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$4500</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de educación con mención en tecnología e innovación educativa
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de educacion con mencion en Tecnologia', 'modulos.mod_eduinnov');
      nlp.addDocument('es', 'modulos de la maestria de educacion con mencion en Tecnologia', 'modulos.mod_eduinnov');
      nlp.addDocument('es', 'que modulos tiene educacion con mencion en Tecnologia', 'modulos.mod_eduinnov');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de educacion con mencion en Tecnologia', 'modulos.mod_eduinnov');
      nlp.addDocument('es', 'cuantos modulos tiene la maestria de educacion con mencion', 'modulos.mod_eduinnov');

      nlp.addAnswer('es', 'modulos.mod_eduinnov', `La maestría de <b>Educación con mención en Tecnología e Innovación Educativa</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Educación con mención en Tecnología</a>
      `);

    //nombre asignaturas educación con mención en tecnología e innovación educativa
      nlp.addDocument('es', 'dime las asignaturas de educacion con mencion en Tecnologia', 'modulos.asig_eduinnov');
      nlp.addDocument('es', 'cual es la malla de educacion con mencion en Tecnologia', 'modulos.asig_eduinnov');
      nlp.addDocument('es', 'cuales son las materias de educacion con mencion en Tecnologia', 'modulos.asig_eduinnov');

      nlp.addAnswer('es', 'modulos.asig_eduinnov', `Puedes revisar la malla de la maestría de <b>Educación con mención en Tecnología e Innovación Educativa</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/educacion.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_ENTRENAMIENTO_DEPORTIVO
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'maestria en Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'cuanto dura la maestria de Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'que titulo obtendre en Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'la maestria de Entrenamiento Deportivo tiene modalidad presencial', 'maestria.entrenamiento');
    nlp.addDocument('es', 'que modalidad tiene Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'cual es la resolucion de Entrenamiento Deportivo', 'maestria.entrenamiento');
    nlp.addDocument('es', 'cual es correo de Entrenamiento Deportivo', 'maestria.entrenamiento');

    nlp.addAnswer('es', 'maestria.entrenamiento', `La Maestría en <b>Entrenamiento Deportivo</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Entrenamiento Deportivo<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-21-NO.449-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/entrenamiento-deportivo" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.entrenamiento@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Entrenamiento Deportivo?</a>
    <a class="option-link">¿Cuál es la malla de Entrenamiento Deportivo?</a>
    `); 
    //costo de entrenamiento deportivo
      nlp.addDocument('es', 'Cual es el costo de Entrenamiento Deportivo', 'maestria.costo_entdep');
      nlp.addDocument('es', 'cual es el valor de entrenamiento deportivo', 'maestria.costo_entdep');
      nlp.addDocument('es', 'cuanto se paga por la maestria de entrenamiento deportivo', 'maestria.costo_entdep');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria entrenamiento deportivo', 'maestria.costo_entdep');
      nlp.addDocument('es', 'que precio tiene entrenamiento deportivo', 'maestria.costo_entdep');
      nlp.addDocument('es', 'que vale la maestria de entrenamiento deportivo', 'maestria.costo_entdep');

      nlp.addAnswer('es', 'maestria.costo_entdep', `La maestría de <b>Entrenamiento Deportivo</b> tiene un arancel de <b>$3200</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$3500</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de entrenamiento deportivo
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de entrenamiento deportivo', 'modulos.mod_entdep');
      nlp.addDocument('es', 'modulos de la maestria de entrenamiento deportivo', 'modulos.mod_entdep');
      nlp.addDocument('es', 'que modulos tiene entrenamiento deportivo', 'modulos.mod_entdep');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de entrenamiento deportivo', 'modulos.mod_entdep');

      nlp.addAnswer('es', 'modulos.mod_entdep', `La maestría de <b>Entrenamiento Deportivo</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Entrenamiento Deportivo</a>
      `);

    //nombre asignaturas entrenamiento deportivo
      nlp.addDocument('es', 'dime las asignaturas de entrenamiento deportivo', 'modulos.asig_entdep');
      nlp.addDocument('es', 'cual es la malla de entrenamiento deportivo', 'modulos.asig_entdep');
      nlp.addDocument('es', 'cuales son las materias de entrenamiento deportivo', 'modulos.asig_entdep');

      nlp.addAnswer('es', 'modulos.asig_entdep', `Puedes revisar la malla de la maestría de <b>Entrenamiento Deportivo</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/entrenamientodeportivo.pdf" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_PSICOPEDAGOGIA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'maestria en Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'cuanto dura la maestria de Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'que titulo obtendre en Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'la maestria de Psicopedagogia tiene modalidad presencial', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'que modalidad tiene Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'cual es la resolucion de Psicopedagogia', 'maestria.psicopedagogia');
    nlp.addDocument('es', 'cual es correo de Psicopedagogia', 'maestria.psicopedagogia');

    nlp.addAnswer('es', 'maestria.psicopedagogia', `La Maestría en <b>Psicopedagogía</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Psicopedagogía<br>
    <b>Duración:</b> 3 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-21-NO.445-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/psicopedagogia" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.psicopedagogia@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Psicopedagogia?</a>
    <a class="option-link">¿Cuál es la malla de Psicopedagogia?</a>
    `);
    //costo de psicopedagogía
      nlp.addDocument('es', 'Cual es el costo de Psicopedagogia', 'maestria.costo_psicoped');
      nlp.addDocument('es', 'cual es el valor de psicopedagogia', 'maestria.costo_psicoped');
      nlp.addDocument('es', 'cuanto se paga por la maestria de psicopedagogia', 'maestria.costo_psicoped');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria psicopedagogia', 'maestria.costo_psicoped');
      nlp.addDocument('es', 'que precio tiene psicopedagogia', 'maestria.costo_psicoped');
      nlp.addDocument('es', 'que vale la maestria de psicopedagogia', 'maestria.costo_psicoped');

      nlp.addAnswer('es', 'maestria.costo_psicoped', `La maestría de <b>Psicopedagogía</b> tiene un arancel de <b>$4000</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$4400</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de psicopedagogía
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de psicopedagogia', 'modulos.mod_psicoped');
      nlp.addDocument('es', 'modulos de la maestria de psicopedagogia', 'modulos.mod_psicoped');
      nlp.addDocument('es', 'que modulos tiene psicopedagogia', 'modulos.mod_psicoped');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de psicopedagogia', 'modulos.mod_psicoped');

      nlp.addAnswer('es', 'modulos.mod_psicoped', `La maestría de <b>Psicopedagogía</b> tiene: 
      <div>
      <ul>
      <li>3 periodos académicos</li>
      <li>13 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Psicopedagogía</a>
      `);

    //nombre asignaturas psicopedagogía
      nlp.addDocument('es', 'dime las asignaturas de psicopedagogia', 'modulos.asig_psicoped');
      nlp.addDocument('es', 'cual es la malla de psicopedagogia', 'modulos.asig_psicoped');
      nlp.addDocument('es', 'cuales son las materias de psicopedagogia', 'modulos.asig_psicoped');

      nlp.addAnswer('es', 'modulos.asig_psicoped', `Puedes revisar la malla de la maestría de <b>Psicopedagogía</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/psicopedagogia.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_PEDAGOGIA_IDIOMAS
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'maestria en Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'cuanto dura la maestria de Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'que titulo obtendre en Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'la maestria de Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles tiene modalidad presencial', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'que modalidad tiene Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'cual es la resolucion de Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');
    nlp.addDocument('es', 'cual es correo de Pedagogia de los Idiomas Nacionales y Extranjeros mencion Enseñanza de Ingles', 'maestria.pedagogiaidiomas');

    nlp.addAnswer('es', 'maestria.pedagogiaidiomas', `La Maestría en <b>Pedagogía de los Idiomas Nacionales y Extranjeros</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Pedagogía de los Idiomas Nacionales y Extranjeros mención Enseñanza de Inglés<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-21-NO.440-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/idiomas-nacionales-extranjeros" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.idiomas@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Pedagogía de los Idiomas?</a>
    <a class="option-link">¿Cuál es la malla de Pedagogía de los Idiomas?</a>
    `);
    //costo de pedagogía de los idiomas nacionales y extranjeros con mención en enseñanza de inglés
      nlp.addDocument('es', 'Cual es el costo de Pedagogia de los Idiomas', 'maestria.costo_pedidiomas');
      nlp.addDocument('es', 'cual es el valor de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'maestria.costo_pedidiomas');
      nlp.addDocument('es', 'cuanto se paga por la maestria de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'maestria.costo_pedidiomas');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'maestria.costo_pedidiomas');
      nlp.addDocument('es', 'que precio tiene pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'maestria.costo_pedidiomas');
      nlp.addDocument('es', 'que vale la maestria de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'maestria.costo_pedidiomas');

      nlp.addAnswer('es', 'maestria.costo_pedidiomas', `La maestría de <b>Pedagogía de los Idiomas Nacionales y Extranjeros</b> con mencion en <b>Enseñanza de ingles</b> tiene un arancel de <b>$3700</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$4000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de pedagogía de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'modulos.mod_pedidiomas');
      nlp.addDocument('es', 'modulos de la maestria de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'modulos.mod_pedidiomas');
      nlp.addDocument('es', 'que modulos tiene pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'modulos.mod_pedidiomas');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'modulos.mod_pedidiomas');

      nlp.addAnswer('es', 'modulos.mod_pedidiomas', `La maestría de <b>Pedagogía de los Idiomas Nacionales y Extranjeros</b> con mencion en <b>Enseñanza de ingles</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Pedagogía de los Idiomas</a>
      `);

    //nombre asignaturas pedagogía de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles
      nlp.addDocument('es', 'dime las asignaturas de pedagogia de los idiomas nacionales', 'modulos.asig_pedidiomas');
      nlp.addDocument('es', 'cual es la malla de pedagogia de los idiomas nacionales', 'modulos.asig_pedidiomas');
      nlp.addDocument('es', 'cuales son las materias de pedagogia de los idiomas nacionales y extranjeros con mencion en enseñanza de ingles', 'modulos.asig_pedidiomas');

      nlp.addAnswer('es', 'modulos.asig_pedidiomas', `Puedes revisar la malla de la maestría de <b>Pedagogía de los Idiomas Nacionales y Extranjeros</b> con mencion en <b>Enseñanza de ingles</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/pine/malla-pine-corr.pdf" target="_blank">link</a>.
      `);



//TAG: INFO_FAC_CIENCIAS_INGENIERIA
  nlp.addDocument('es', 'ciencias de la ingenieria', 'facultades.fac_cing');
  nlp.addAnswer('es', 'facultades.fac_cing', `La facultad de <b>Ciencias de la Ingeniería</b> tiene las siguientes maestrías disponibles: <br>
  <a class="option-link">Maestría en Gestión Ambiental</a>
  <a class="option-link">Maestría en Gestión de Riesgos mención Prevención de Riesgos Laborales</a>
  <a class="option-link">Maestría en Ingeniería Civil mención Gestión de la Construcción</a>
  <a class="option-link">Maestría en Petróleos</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);
  //TAG: INFO_MAESTRIA_GESTION_AMBIENTAL
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'maestria en gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'quiero informacion de la Maestria en gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'cuanto dura la maestria de gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'que titulo obtendre en gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'la maestria de gestion Ambiental tiene modalidad presencial', 'maestria.gestionambiental');
    nlp.addDocument('es', 'que modalidad tiene gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'cual es la resolucion de gestion Ambiental', 'maestria.gestionambiental');
    nlp.addDocument('es', 'cual es correo de gestion Ambiental', 'maestria.gestionambiental');

    nlp.addAnswer('es', 'maestria.gestionambiental', `La Maestría en <b>Gestión Ambiental</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Gestión Ambiental<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-51-NO.834-2022<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/gestion-ambiental" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.gestionambiental@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Gestión Ambiental?</a>
    <a class="option-link">¿Cuál es la malla de Gestión Ambiental?</a>
    `);
    //costo de gestión ambiental
      nlp.addDocument('es', 'Cual es el costo de gestion Ambiental', 'maestria.costo_ambiental');
      nlp.addDocument('es', 'cual es el valor de gestion ambiental', 'maestria.costo_ambiental');
      nlp.addDocument('es', 'cuanto se paga por la maestria de gestion ambiental', 'maestria.costo_ambiental');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria gestion ambiental', 'maestria.costo_ambiental');
      nlp.addDocument('es', 'que precio tiene gestion ambiental', 'maestria.costo_ambiental');
      nlp.addDocument('es', 'que vale la maestria de gestion ambiental', 'maestria.costo_ambiental');

      nlp.addAnswer('es', 'maestria.costo_ambiental', `La maestría de <b>Gestión Ambiental</b> tiene un arancel de <b>$4200</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$4500</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de gestión ambiental
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de gestion ambiental', 'modulos.mod_ambiental');
      nlp.addDocument('es', 'modulos de la maestria de gestion ambiental', 'modulos.mod_ambiental');
      nlp.addDocument('es', 'que modulos tiene gestion ambiental', 'modulos.mod_ambiental');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de gestion ambiental', 'modulos.mod_ambiental');

      nlp.addAnswer('es', 'modulos.mod_ambiental', `La maestría de <b>Gestión Ambiental</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Gestión Ambiental</a>
      `);

    //nombre asignaturas gestión ambiental
      nlp.addDocument('es', 'dime las asignaturas de gestion ambiental', 'modulos.asig_ambiental');
      nlp.addDocument('es', 'cual es la malla de gestion ambiental', 'modulos.asig_ambiental');
      nlp.addDocument('es', 'cuales son las materias de gestion ambiental', 'modulos.asig_ambiental');

      nlp.addAnswer('es', 'modulos.asig_ambiental', `Puedes revisar la malla de la maestría de <b>Gestión Ambiental</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/gestion-ambiental.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_RIESGOS
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'maestria en Gestion de Riesgos', 'maestria.riesgos');
    nlp.addDocument('es', 'Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'cuanto dura la maestria de Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'que titulo obtendre en Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'la maestria de Gestion de Riesgos mencion Prevencion de Riesgos Laborales tiene modalidad presencial', 'maestria.riesgos');
    nlp.addDocument('es', 'que modalidad tiene Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'cual es la resolucion de Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');
    nlp.addDocument('es', 'cual es correo de Gestion de Riesgos mencion Prevencion de Riesgos Laborales', 'maestria.riesgos');

    nlp.addAnswer('es', 'maestria.riesgos', `La Maestría en <b>Gestión de Riesgos</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Gestión de Riesgos mención Prevención de Riesgos Laborales<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-01-N.016-2023<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/gestion-de-riesgos" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.gestionriesgos@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Gestion de Riesgos?</a>
    <a class="option-link">¿Cuál es la malla de Gestion de Riesgos?</a>
    `);
    //costo de gestión de riesgos
      nlp.addDocument('es', 'Cual es el costo de gestion de Riesgos', 'maestria.costo_riesgos');
      nlp.addDocument('es', 'cual es el valor de gestion de riesgos', 'maestria.costo_riesgos');
      nlp.addDocument('es', 'cuanto se paga por la maestria de gestion de riesgos', 'maestria.costo_riesgos');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria gestion de riesgos', 'maestria.costo_riesgos');
      nlp.addDocument('es', 'que precio tiene gestion de riesgos', 'maestria.costo_riesgos');
      nlp.addDocument('es', 'que vale la maestria de gestion de riesgos', 'maestria.costo_riesgos');

      nlp.addAnswer('es', 'maestria.costo_riesgos', `La maestría de <b>Gestión de Riesgos mención Prevención de Riesgos Laborales</b> tiene un arancel de <b>$4200</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$4500</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de gestión de riesgos
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de gestion de riesgos', 'modulos.mod_riesgos');
      nlp.addDocument('es', 'modulos de la maestria de gestion de riesgos', 'modulos.mod_riesgos');
      nlp.addDocument('es', 'que modulos tiene gestion de riesgos', 'modulos.mod_riesgos');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de gestion de riesgos', 'modulos.mod_riesgos');

      nlp.addAnswer('es', 'modulos.mod_riesgos', `La maestría de <b>Gestión de Riesgos mención Prevención de Riesgos Laborales</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Gestión de Riesgos</a>
      `);

    //nombre asignaturas gestión de riesgos
      nlp.addDocument('es', 'dime las asignaturas de gestion de riesgos', 'modulos.asig_riesgos');
      nlp.addDocument('es', 'cual es la malla de gestion de riesgos', 'modulos.asig_riesgos');
      nlp.addDocument('es', 'cuales son las materias de gestion de riesgos', 'modulos.asig_riesgos');

      nlp.addAnswer('es', 'modulos.asig_riesgos', `Puedes revisar la malla de la maestría de <b>Gestión de Riesgos mención Prevención de Riesgos Laborales</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/malla_griesgos.pdf" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_CIVIL
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'maestria en Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'cuanto dura la maestria de Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'que titulo obtendre en Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'la maestria de Ingenieria Civil tiene modalidad presencial', 'maestria.civil');
    nlp.addDocument('es', 'que modalidad tiene Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'cual es la resolucion de Ingenieria Civil', 'maestria.civil');
    nlp.addDocument('es', 'cual es correo de Ingenieria Civil', 'maestria.civil');

    nlp.addAnswer('es', 'maestria.civil', `La Maestría en <b>Ingeniería Civil</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Ingeniería Civil mención Gestión de la Construcción<br>
    <b>Duración:</b> 3 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.571-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/ingenieria-civil" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.civil@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Ingenieria Civil?</a>
    <a class="option-link">¿Cuál es la malla de Ingenieria Civil?</a>
    `);

    //costo de ingeniería civil
      nlp.addDocument('es', 'Cual es el costo de Ingenieria Civil', 'maestria.costo_ingenieria');
      nlp.addDocument('es', 'cual es el valor de ingenieria civil', 'maestria.costo_ingenieria');
      nlp.addDocument('es', 'cuanto se paga por la maestria de ingenieria civil', 'maestria.costo_ingenieria');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria ingenieria civil', 'maestria.costo_ingenieria');
      nlp.addDocument('es', 'que precio tiene ingenieria civil', 'maestria.costo_ingenieria');
      nlp.addDocument('es', 'que vale la maestria de ingenieria civil', 'maestria.costo_ingenieria');

      nlp.addAnswer('es', 'maestria.costo_ingenieria', `La maestría de <b>Ingeniería Civil mención Gestión de la Construcción</b> tiene un arancel de <b>$5500</b> dólares y matrícula de <b>$350</b> dólares que dan un total de <b>$5850</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de ingeniería civil
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de ingenieria civil', 'modulos.mod_ingenieria');
      nlp.addDocument('es', 'modulos de la maestria de ingenieria civil', 'modulos.mod_ingenieria');
      nlp.addDocument('es', 'que modulos tiene ingenieria civil', 'modulos.mod_ingenieria');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de ingenieria civil', 'modulos.mod_ingenieria');

      nlp.addAnswer('es', 'modulos.mod_ingenieria', `La maestría de <b>Ingeniería Civil mención Gestión de la Construcción</b> tiene: 
      <div>
      <ul>
      <li>3 periodos académicos</li>
      <li>14 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Ingeniería Civil</a>
      `);

    //nombre asignaturas ingeniería civil
      nlp.addDocument('es', 'dime las asignaturas de ingenieria civil', 'modulos.asig_ingenieria');
      nlp.addDocument('es', 'cual es la malla de ingenieria civil', 'modulos.asig_ingenieria');
      nlp.addDocument('es', 'cuales son las materias de ingenieria civil', 'modulos.asig_ingenieria');

      nlp.addAnswer('es', 'modulos.asig_ingenieria', `Puedes revisar la malla de la maestría de <b>Ingeniería Civil mención Gestión de la Construcción</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/malla%20maestria%20civil.pdf" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_PETROLEOS
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'maestria en Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'cuanto dura la maestria de Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'que titulo obtendre en Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'la maestria de Petroleos tiene modalidad presencial', 'maestria.petroleos');
    nlp.addDocument('es', 'que modalidad tiene Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'cual es la resolucion de Petroleos', 'maestria.petroleos');
    nlp.addDocument('es', 'cual es correo de Petroleos', 'maestria.petroleos');

    nlp.addAnswer('es', 'maestria.petroleos', `La Maestría en <b>Petróleos</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Petróleos<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-22-NO.479-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/petroleos" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.petroleos@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Petroleos?</a>
    <a class="option-link">¿Cuál es la malla de Petroleos?</a>
    `);
    //costo de petróleos
      nlp.addDocument('es', 'Cual es el costo de Petroleos', 'maestria.costo_petroleos');
      nlp.addDocument('es', 'cual es el valor de petroleos', 'maestria.costo_petroleos');
      nlp.addDocument('es', 'cuanto se paga por la maestria de petroleos', 'maestria.costo_petroleos');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria petroleos', 'maestria.costo_petroleos');
      nlp.addDocument('es', 'que precio tiene petroleos', 'maestria.costo_petroleos');
      nlp.addDocument('es', 'que vale la maestria de petroleos', 'maestria.costo_petroleos');

      nlp.addAnswer('es', 'maestria.costo_petroleos', `La maestría de <b>Petróleos</b> tiene un arancel de <b>$6000</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$6400</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de petróleos
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de petroleos', 'modulos.mod_petroleos');
      nlp.addDocument('es', 'modulos de la maestria de petroleos', 'modulos.mod_petroleos');
      nlp.addDocument('es', 'que modulos tiene petroleos', 'modulos.mod_petroleos');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de petroleos', 'modulos.mod_petroleos');

      nlp.addAnswer('es', 'modulos.mod_petroleos', `La maestría de <b>Petróleos</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Petróleos</a>
      `);

    //nombre asignaturas petróleos
      nlp.addDocument('es', 'dime las asignaturas de petroleos', 'modulos.asig_petroleos');
      nlp.addDocument('es', 'cual es la malla de petroleos', 'modulos.asig_petroleos');
      nlp.addDocument('es', 'cuales son las materias de petroleos', 'modulos.asig_petroleos');

      nlp.addAnswer('es', 'modulos.asig_petroleos', `Puedes revisar la malla de la maestría de <b>Petróleos</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/petroleos.pdf" target="_blank">link</a>.
      `);


//TAG: INFO_FAC_CIENCIAS_SOCIALES_SALUD
  nlp.addDocument('es', 'ciencias sociales y de la salud', 'facultades.fac_salud');
  nlp.addDocument('es', 'cuales son las maestrias de derecho', 'facultades.fac_salud');
  nlp.addDocument('es', 'cuantas maestrias de derecho hay', 'facultades.fac_salud');
  nlp.addDocument('es', 'dime las maestrias de derecho', 'facultades.fac_salud');
  nlp.addAnswer('es', 'facultades.fac_salud', `La facultad de <b>Ciencias Sociales y de la Salud</b> tiene las siguientes maestrías disponibles: <br>
  <a class="option-link">Maestría en Derecho Procesal</a>
  <a class="option-link">Maestría en Derecho</a>
  <a class="option-link">Maestría en Derecho mención Derecho Constitucional</a>
  <a class="option-link">Maestría en Gestión Social y Desarrollo mención Desarrollo Local</a>
  <a class="option-link">Maestría en Comunicación</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);

  //TAG: INFO_MAESTRIA_DERECHO_PROCESAL
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'maestria en Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'cuanto dura la maestria de Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'que titulo obtendre en Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'la maestria de Derecho Procesal tiene modalidad presencial', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'que modalidad tiene Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'cual es la resolucion de Derecho Procesal', 'maestria.derecho_procesal');
    nlp.addDocument('es', 'cual es correo de Derecho Procesal', 'maestria.derecho_procesal');

    nlp.addAnswer('es', 'maestria.derecho_procesal', `La Maestría en <b>Derecho Procesal</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Derecho Procesal<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-50-No.805-2022<br>
    <b>Modalidad:</b> En línea<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/derecho-procesal" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.derechoprocesal@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Derecho Procesal?</a>
    <a class="option-link">¿Cuál es la malla de Derecho Procesal?</a>
    `);

    //costo de derecho procesal
      nlp.addDocument('es', 'Cual es el costo de Derecho Procesal', 'maestria.costo_derechoprocesal');
      nlp.addDocument('es', 'cual es el valor de derecho procesal', 'maestria.costo_derechoprocesal');
      nlp.addDocument('es', 'cuanto se paga por la maestria de derecho procesal', 'maestria.costo_derechoprocesal');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria derecho procesal', 'maestria.costo_derechoprocesal');
      nlp.addDocument('es', 'que precio tiene derecho procesal', 'maestria.costo_derechoprocesal');
      nlp.addDocument('es', 'que vale la maestria de derecho procesal', 'maestria.costo_derechoprocesal');

      nlp.addAnswer('es', 'maestria.costo_derechoprocesal', `La maestría de <b>Derecho Procesal</b> tiene un arancel de <b>$2500</b> dólares y matrícula de <b>$0</b> dólares que dan un total de <b>$2500</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de derecho procesal
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de derecho procesal', 'modulos.mod_derechoprocesal');
      nlp.addDocument('es', 'modulos de la maestria de derecho procesal', 'modulos.mod_derechoprocesal');
      nlp.addDocument('es', 'que modulos tiene derecho procesal', 'modulos.mod_derechoprocesal');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de derecho procesal', 'modulos.mod_derechoprocesal');

      nlp.addAnswer('es', 'modulos.mod_derechoprocesal', `La maestría de <b>Derecho Procesal</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Derecho Procesal</a>
      `);

    //nombre asignaturas derecho procesal
      nlp.addDocument('es', 'dime las asignaturas de derecho procesal', 'modulos.asig_derechoprocesal');
      nlp.addDocument('es', 'cual es la malla de derecho procesal', 'modulos.asig_derechoprocesal');
      nlp.addDocument('es', 'cuales son las materias de derecho procesal', 'modulos.asig_derechoprocesal');

      nlp.addAnswer('es', 'modulos.asig_derechoprocesal', `Puedes revisar la malla de la maestría de <b>Derecho Procesal</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/derecho-procesal" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_DERECHO
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'maestria en Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'cuanto dura la maestria de Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'que titulo obtendre en Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'la maestria de Derecho tiene modalidad presencial', 'maestria.derecho');
    nlp.addDocument('es', 'que modalidad tiene Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'cual es la resolucion de Derecho', 'maestria.derecho');
    nlp.addDocument('es', 'cual es correo de Derecho', 'maestria.derecho');

    nlp.addAnswer('es', 'maestria.derecho', `La Maestría en <b>Derecho</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Derecho<br>
    <b>Duración:</b> 3 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.570-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/derecho" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.derecho@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Derecho?</a>
    <a class="option-link">¿Cuál es la malla de Derecho?</a>
    `);
    //costo de derecho
      nlp.addDocument('es', 'Cual es el costo de Derecho', 'maestria.costo_derecho');
      nlp.addDocument('es', 'cual es el valor de derecho', 'maestria.costo_derecho');
      nlp.addDocument('es', 'cuanto se paga por la maestria de derecho', 'maestria.costo_derecho');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria derecho', 'maestria.costo_derecho');
      nlp.addDocument('es', 'que precio tiene derecho', 'maestria.costo_derecho');
      nlp.addDocument('es', 'que vale la maestria de derecho', 'maestria.costo_derecho');

      nlp.addAnswer('es', 'maestria.costo_derecho', `La maestría de <b>Derecho</b> tiene un arancel de <b>$4600</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$5000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de derecho
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de derecho', 'modulos.mod_derecho');
      nlp.addDocument('es', 'modulos de la maestria de derecho', 'modulos.mod_derecho');
      nlp.addDocument('es', 'que modulos tiene derecho', 'modulos.mod_derecho');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de derecho', 'modulos.mod_derecho');

      nlp.addAnswer('es', 'modulos.mod_derecho', `La maestría de <b>Derecho</b> tiene: 
      <div>
      <ul>
      <li>3 periodos académicos</li>
      <li>14 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Derecho</a>
      `);

    //nombre asignaturas derecho
      nlp.addDocument('es', 'dime las asignaturas de derecho', 'modulos.asig_derecho');
      nlp.addDocument('es', 'cual es la malla de derecho', 'modulos.asig_derecho');
      nlp.addDocument('es', 'cuales son las materias de derecho', 'modulos.asig_derecho');

      nlp.addAnswer('es', 'modulos.asig_derecho', `Puedes revisar la malla de la maestría de <b>Derecho</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/Derecho.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_DERECHO_CONSTITUCIONAL
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'maestria en Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'cuanto dura la maestria de Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'que titulo obtendre en Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'la maestria de Derecho mencion Derecho Constitucional tiene modalidad presencial', 'maestria.derecho_const');
    nlp.addDocument('es', 'que modalidad tiene Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'cual es la resolucion de Derecho mencion Derecho Constitucional', 'maestria.derecho_const');
    nlp.addDocument('es', 'cual es correo de Derecho mencion Derecho Constitucional', 'maestria.derecho_const');

    nlp.addAnswer('es', 'maestria.derecho_const', `La Maestría en <b>Derecho</b> con mención en <b>Derecho Constitucional</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Derecho mención Derecho Constitucional<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-21-NO.449-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/derecho-constitucional" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.derechoconstitucional@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Derecho mención Derecho Constitucional?</a>
    <a class="option-link">¿Cuál es la malla de Derecho mención Derecho Constitucional?</a>
    `);
    //costo de Derecho mención Derecho Constitucional
      nlp.addDocument('es', 'Cual es el costo de Derecho mencion Derecho Constitucional', 'maestria.costo_derechoconstitucional');
      nlp.addDocument('es', 'cual es el valor de Derecho mencion Derecho Constitucional', 'maestria.costo_derechoconstitucional');
      nlp.addDocument('es', 'cuanto se paga por la maestria de Derecho mencion Derecho Constitucional', 'maestria.costo_derechoconstitucional');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria Derecho mencion Derecho Constitucional', 'maestria.costo_derechoconstitucional');
      nlp.addDocument('es', 'que precio tiene Derecho mencion Derecho Constitucional', 'maestria.costo_derechoconstitucional');
      nlp.addDocument('es', 'que vale la maestria de Derecho mencion Derecho Constitucional', 'maestria.costo_derechoconstitucional');

      nlp.addAnswer('es', 'maestria.costo_derechoconstitucional', `La maestría en <b>Derecho mención Derecho Constitucional</b> tiene un arancel de <b>$4600</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$5000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Derecho mención Derecho Constitucional
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de Derecho mencion Derecho Constitucional', 'modulos.mod_derechoconstitucional');
      nlp.addDocument('es', 'modulos de la maestria de Derecho mencion Derecho Constitucional', 'modulos.mod_derechoconstitucional');
      nlp.addDocument('es', 'que modulos tiene Derecho mencion Derecho Constitucional', 'modulos.mod_derechoconstitucional');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Derecho mencion Derecho Constitucional', 'modulos.mod_derechoconstitucional');

      nlp.addAnswer('es', 'modulos.mod_derechoconstitucional', `La maestría en <b>Derecho mención Derecho Constitucional</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Derecho mención Derecho Constitucional</a>
      `);

    //nombre asignaturas Derecho mención Derecho Constitucional
      nlp.addDocument('es', 'dime las asignaturas de Derecho mencion Derecho Constitucional', 'modulos.asig_derechoconstitucional');
      nlp.addDocument('es', 'cual es la malla de Derecho mencion Derecho Constitucional', 'modulos.asig_derechoconstitucional');
      nlp.addDocument('es', 'cuales son las materias de Derecho mencion Derecho Constitucional', 'modulos.asig_derechoconstitucional');

      nlp.addAnswer('es', 'modulos.asig_derechoconstitucional', `Puedes revisar la malla de la maestría en <b>Derecho mención Derecho Constitucional</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/programas/derecho_constitucional/MALLA%20DE%20DERECHO%20CONSTITUCIONAL.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_GESTION_SOCIAL
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'quiero informacion de la Maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'cuanto dura la maestria de gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'que titulo obtendre en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'la maestria de gestion Social y Desarrollo mencion Desarrollo Local tiene modalidad presencial', 'maestria.gestion_social');
    nlp.addDocument('es', 'que modalidad tiene gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'cual es la resolucion de gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');
    nlp.addDocument('es', 'cual es correo de gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.gestion_social');

    nlp.addAnswer('es', 'maestria.gestion_social', `La Maestría en <b>Gestión Social y Desarrollo</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Gestión Social y Desarrollo mención Desarrollo Local<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-19-NO.404-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/gestion-social-y-desarrollo" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.desarrollolocal@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Gestión Social y Desarrollo?</a>
    <a class="option-link">¿Cuál es la malla de Gestión Social y Desarrollo?</a>
    `);
    //costo de Maestría en Gestión Social y Desarrollo mención Desarrollo Local
      nlp.addDocument('es', 'Cual es el costo de la maestria en gestion Social y Desarrollo', 'maestria.costo_gestiondesarrollo');
      nlp.addDocument('es', 'cual es el valor de la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.costo_gestiondesarrollo');
      nlp.addDocument('es', 'cuanto se paga por la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.costo_gestiondesarrollo');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.costo_gestiondesarrollo');
      nlp.addDocument('es', 'que precio tiene maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.costo_gestiondesarrollo');
      nlp.addDocument('es', 'que vale la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'maestria.costo_gestiondesarrollo');

      nlp.addAnswer('es', 'maestria.costo_gestiondesarrollo', `La maestría en <b>Gestión Social y Desarrollo</b> con mención en <b>Desarrollo Local</b> tiene un arancel de <b>$3600</b> dólares y matrícula de <b>$300</b> dólares que dan un total de <b>$3900</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Maestría en Gestión Social y Desarrollo mención Desarrollo Local
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de gestion Social y Desarrollo mencion Desarrollo Local', 'modulos.mod_gestiondesarrollo');
      nlp.addDocument('es', 'modulos de la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'modulos.mod_gestiondesarrollo');
      nlp.addDocument('es', 'que modulos tiene la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'modulos.mod_gestiondesarrollo');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'modulos.mod_gestiondesarrollo');

      nlp.addAnswer('es', 'modulos.mod_gestiondesarrollo', `La maestría en <b>Gestión Social y Desarrollo</b> con mención en <b>Desarrollo Local</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>10 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de la Maestría en Gestión Social y Desarrollo</a>
      `);

    //nombre asignaturas Maestría en Gestión Social y Desarrollo mención Desarrollo Local
      nlp.addDocument('es', 'dime las asignaturas de la maestria en gestion Social y Desarrollo', 'modulos.asig_gestiondesarrollo');
      nlp.addDocument('es', 'cual es la malla de maestria en gestion Social y Desarrollo', 'modulos.asig_gestiondesarrollo');
      nlp.addDocument('es', 'cuales son las materias de maestria en gestion Social y Desarrollo mencion Desarrollo Local', 'modulos.asig_gestiondesarrollo');

      nlp.addAnswer('es', 'modulos.asig_gestiondesarrollo', `Puedes revisar la malla de la maestría en <b>Gestión Social y Desarrollo</b> con mención en <b>Desarrollo Local</b> y sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/gestion-social-y-desarrollo" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_COMUNICACION
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'maestria en Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'cuanto dura la maestria de Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'que titulo obtendre en Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'la maestria de Comunicacion tiene modalidad presencial', 'maestria.comunicacion');
    nlp.addDocument('es', 'que modalidad tiene Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'cual es la resolucion de Comunicacion', 'maestria.comunicacion');
    nlp.addDocument('es', 'cual es correo de Comunicacion', 'maestria.comunicacion');

    nlp.addAnswer('es', 'maestria.comunicacion', `La Maestría en <b>Comunicación</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Comunicación<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-24-NO.543-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/comunicacion" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.comunicacion@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Comunicación?</a>
    <a class="option-link">¿Cuál es la malla de Comunicación?</a>
    `);
    //costo maestria Comunicación
      nlp.addDocument('es', 'Cual es el costo de comunicacion', 'maestria.costo_comunicacion');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria comunicacion', 'maestria.costo_comunicacion');
      nlp.addDocument('es', 'cual es el valor de comunicacion', 'maestria.costo_comunicacion');
      nlp.addDocument('es', 'pagar en la maestria de comunicacion', 'maestria.costo_comunicacion');
      nlp.addDocument('es', 'precio de comunicacion', 'maestria.costo_comunicacion');
      nlp.addDocument('es', 'que vale la maestria de comunicacion', 'maestria.costo_comunicacion');

      nlp.addAnswer('es','maestria.costo_comunicacion', `La maestría de <b>Comunicación</b> tiene un arancel de <b>$3500</b> dólares y matrícula de <b>$350</b> dólares que dan un total de <b>$3850</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Comunicación
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de Comunicacion', 'modulos.mod_comunicacion');
      nlp.addDocument('es', 'modulos de la maestria de Comunicacion', 'modulos.mod_comunicacion');
      nlp.addDocument('es', 'que modulos tiene Comunicacion', 'modulos.mod_comunicacion');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Comunicacion', 'modulos.mod_comunicacion');

      nlp.addAnswer('es','modulos.mod_comunicacion',`La maestría de <b>Comunicación</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Comunicación</a>
      `);

    //nombre asignaturas Comunicación
      nlp.addDocument('es', 'dime las asignaturas de Comunicacion', 'modulos.asig_comunicacion');
      nlp.addDocument('es', 'cual es la malla de Comunicacion', 'modulos.asig_comunicacion');
      nlp.addDocument('es', 'cuales son las materias de Comunicacion', 'modulos.asig_comunicacion');

      nlp.addAnswer('es','modulos.asig_comunicacion',`Puedes revisar la malla de la maestría de <b>Comunicación</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/comunicacion.pdf" target="_blank">link</a>.
      `);


//TAG: INFO_FAC_CIENCIAS_ADMINISTRATIVAS
  nlp.addDocument('es', 'ciencias administrativas', 'facultades.fac_adminis');
  nlp.addAnswer('es', 'facultades.fac_adminis', `La facultad de <b>Ciencias Administrativas</b> tiene las siguientes maestrías disponibles: <br>
  <a class="option-link">Maestría en Gestión del Talento Humano</a>
  <a class="option-link">Maestría en Administración Pública</a>
  <a class="option-link">Maestría en Contabilidad y Auditoría</a>
  <a class="option-link">Maestría en Turismo mención Gestión Sostenible en Destinos Turísticos</a>
  <a class="option-link">Maestría en Administración de Empresas mención Gestión de las Pymes</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);
  //TAG: INFO_MAESTRIA_TALENTO_HUMANO
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'maestria en gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'gestion del Talento Humano', 'maestria.talento_humano');   
    nlp.addDocument('es', 'quiero informacion de la Maestria en gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'cuanto dura la maestria de gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'que titulo obtendre en gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'la maestria de gestion del Talento Humano tiene modalidad presencial', 'maestria.talento_humano');
    nlp.addDocument('es', 'que modalidad tiene gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'cual es la resolucion de gestion del Talento Humano', 'maestria.talento_humano');
    nlp.addDocument('es', 'cual es correo de gestion del Talento Humano', 'maestria.talento_humano');

    nlp.addAnswer('es', 'maestria.talento_humano', `La Maestría en <b>Gestión del Talento Humano</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Gestión del Talento Humano<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.571-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/talento-humano" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.talentohumano@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Gestión del Talento Humano?</a>
    <a class="option-link">¿Cuál es la malla de Gestión del Talento Humano?</a>
    `);
    //costo maestria Gestión del Talento Humano
      nlp.addDocument('es', 'Cual es el costo de gestion del Talento Humano', 'maestria.costo_talento_humano');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria gestion del Talento Humano', 'maestria.costo_talento_humano');
      nlp.addDocument('es', 'cual es el valor de gestion del Talento Humano', 'maestria.costo_talento_humano');
      nlp.addDocument('es', 'pagar en la maestria de gestion del Talento Humano', 'maestria.costo_talento_humano');
      nlp.addDocument('es', 'precio de gestion del Talento Humano', 'maestria.costo_talento_humano');
      nlp.addDocument('es', 'que vale la maestria de gestion del Talento Humano', 'maestria.costo_talento_humano');

      nlp.addAnswer('es','maestria.costo_talento_humano', `La maestría de <b>Gestión del Talento Humano</b> tiene un arancel de <b>$4000</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$4400</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Gestión del Talento Humano
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de gestion del Talento Humano', 'modulos.mod_talento_humano');
      nlp.addDocument('es', 'modulos de la maestria de gestion del Talento Humano', 'modulos.mod_talento_humano');
      nlp.addDocument('es', 'que modulos tiene gestion del Talento Humano', 'modulos.mod_talento_humano');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de gestion del Talento Humano', 'modulos.mod_talento_humano');

      nlp.addAnswer('es','modulos.mod_talento_humano',`La maestría de <b>Gestión del Talento Humano</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Gestión del Talento Humano</a>
      `);

    //nombre asignaturas Gestión del Talento Humano
      nlp.addDocument('es', 'dime las asignaturas de gestion del Talento Humano', 'modulos.asig_talento_humano');
      nlp.addDocument('es', 'cual es la malla de gestion del Talento Humano', 'modulos.asig_talento_humano');
      nlp.addDocument('es', 'cuales son las materias de gestion del Talento Humano', 'modulos.asig_talento_humano');

      nlp.addAnswer('es','modulos.asig_talento_humano',`Puedes revisar la malla de la maestría de <b>Gestión del Talento Humano</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/talentohumano.pdf" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_ADMINISTRACION_PUBLICA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'maestria en Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'cuanto dura la maestria de Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'que titulo obtendre en Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'la maestria de Administracion Publica tiene modalidad presencial', 'maestria.admin_publica');
    nlp.addDocument('es', 'que modalidad tiene Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'cual es la resolucion de Administracion Publica', 'maestria.admin_publica');
    nlp.addDocument('es', 'cual es correo de Administracion Publica', 'maestria.admin_publica');

    nlp.addAnswer('es', 'maestria.admin_publica', `La Maestría en <b>Administración Pública</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Administración Pública<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.571-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/administracion-publica" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.admpublica@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Administración Pública?</a>
    <a class="option-link">¿Cuál es la malla de Administración Pública?</a>
    `);
    //costo maestria Administracion Publica
      nlp.addDocument('es', 'Cual es el costo de Administracion Publica', 'maestria.costo_admin_publica');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria Administracion Publica', 'maestria.costo_admin_publica');
      nlp.addDocument('es', 'cual es el valor de Administracion Publica', 'maestria.costo_admin_publica');
      nlp.addDocument('es', 'pagar en la maestria de Administracion Publica', 'maestria.costo_admin_publica');
      nlp.addDocument('es', 'precio de Administracion Publica', 'maestria.costo_admin_publica');
      nlp.addDocument('es', 'que vale la maestria de Administracion Publica', 'maestria.costo_admin_publica');

      nlp.addAnswer('es','maestria.costo_admin_publica', `La maestría de <b>Administración Pública</b> tiene un arancel de <b>$4500</b> dólares y matrícula de <b>$450</b> dólares que dan un total de <b>$4950</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Administración Pública
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de Administración Pública', 'modulos.mod_admin_publica');
      nlp.addDocument('es', 'modulos de la maestria de Administración Pública', 'modulos.mod_admin_publica');
      nlp.addDocument('es', 'que modulos tiene Administración Pública', 'modulos.mod_admin_publica');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Administración Pública', 'modulos.mod_admin_publica');

      nlp.addAnswer('es','modulos.mod_admin_publica',`La maestría de <b>Administración Pública</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Administración Pública</a>
      `);

    //nombre asignaturas Administración Pública
      nlp.addDocument('es', 'dime las asignaturas de Administración Pública', 'modulos.asig_admin_publica');
      nlp.addDocument('es', 'cual es la malla de Administración Pública', 'modulos.asig_admin_publica');
      nlp.addDocument('es', 'cuales son las materias de Administración Pública', 'modulos.asig_admin_publica');

      nlp.addAnswer('es','modulos.asig_admin_publica',`Puedes revisar la malla de la maestría de <b>Administración Pública</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/administracionpublica.pdf" target="_blank">link</a>.
      `);
  //TAG: INFO_MAESTRIA_CONTABILIDAD_AUDITORIA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'maestria en Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'cuanto dura la maestria de Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'que titulo obtendre en Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'la maestria de Contabilidad y Auditoria tiene modalidad presencial', 'maestria.contabilidad');
    nlp.addDocument('es', 'que modalidad tiene Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'cual es la resolucion de Contabilidad y Auditoria', 'maestria.contabilidad');
    nlp.addDocument('es', 'cual es correo de Contabilidad y Auditoria', 'maestria.contabilidad');

    nlp.addAnswer('es', 'maestria.contabilidad', `La Maestría en <b>Contabilidad y Auditoría</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Contabilidad y Auditoría<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-24-NO.543-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/contabilidad" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.contabilidad@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Contabilidad y Auditoría?</a>
    <a class="option-link">¿Cuál es la malla de Contabilidad y Auditoría?</a>
    `);
    //costo maestria Contabilidad y Auditoria
      nlp.addDocument('es', 'Cual es el costo de Contabilidad y Auditoria', 'maestria.costo_contabilidad');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria Contabilidad y Auditoria', 'maestria.costo_contabilidad');
      nlp.addDocument('es', 'cual es el valor de Contabilidad y Auditoria', 'maestria.costo_contabilidad');
      nlp.addDocument('es', 'pagar en la maestria de Contabilidad y Auditoria', 'maestria.costo_contabilidad');
      nlp.addDocument('es', 'precio de Contabilidad y Auditoria', 'maestria.costo_contabilidad');
      nlp.addDocument('es', 'que vale la maestria de Contabilidad y Auditoria', 'maestria.costo_contabilidad');

      nlp.addAnswer('es', 'maestria.costo_contabilidad', `La maestría de <b>Contabilidad y Auditoría</b> tiene un arancel de <b>$4000</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$4400</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Contabilidad y Auditoría
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de Contabilidad y Auditoría', 'modulos.mod_contabilidad');
      nlp.addDocument('es', 'modulos de la maestria de Contabilidad y Auditoría', 'modulos.mod_contabilidad');
      nlp.addDocument('es', 'que modulos tiene Contabilidad y Auditoría', 'modulos.mod_contabilidad');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Contabilidad y Auditoría', 'modulos.mod_contabilidad');

      nlp.addAnswer('es', 'modulos.mod_contabilidad', `La maestría de <b>Contabilidad y Auditoría</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Contabilidad y Auditoría</a>
      `);

    //nombre asignaturas Contabilidad y Auditoría
      nlp.addDocument('es', 'dime las asignaturas de Contabilidad y Auditoría', 'modulos.asig_contabilidad');
      nlp.addDocument('es', 'cual es la malla de Contabilidad y Auditoría', 'modulos.asig_contabilidad');
      nlp.addDocument('es', 'cuales son las materias de Contabilidad y Auditoría', 'modulos.asig_contabilidad');

      nlp.addAnswer('es', 'modulos.asig_contabilidad', `Puedes revisar la malla de la maestría de <b>Contabilidad y Auditoría</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/contabilidadyauditoria.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_TURISMO
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'maestria en Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'Turismo mencion Gestion Sostenible en Destinos Turisticos', 'maestria.turismo');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'cuanto dura la maestria de Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'que titulo obtendre en Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'la maestria de Turismo tiene modalidad presencial', 'maestria.turismo');
    nlp.addDocument('es', 'que modalidad tiene Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'cual es la resolucion de Turismo', 'maestria.turismo');
    nlp.addDocument('es', 'cual es correo de Turismo', 'maestria.turismo');

    nlp.addAnswer('es', 'maestria.turismo', `La Maestría en <b>Turismo</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Turismo mención Gestión Sostenible en Destinos Turísticos<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-01-NO.026-2021<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/turismo" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.turismo@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Turismo?</a>
    <a class="option-link">¿Cuál es la malla de Turismo?</a>
    `);

    //costo maestria Turismo
      nlp.addDocument('es', 'Cual es el costo de Turismo', 'maestria.costo_turismo');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria Turismo', 'maestria.costo_turismo');
      nlp.addDocument('es', 'cual es el valor de Turismo', 'maestria.costo_turismo');
      nlp.addDocument('es', 'pagar en la maestria de Turismo', 'maestria.costo_turismo');
      nlp.addDocument('es', 'precio de Turismo', 'maestria.costo_turismo');
      nlp.addDocument('es', 'que vale la maestria de Turismo', 'maestria.costo_turismo');

      nlp.addAnswer('es', 'maestria.costo_turismo', `La maestría de <b>Turismo</b> con mención <b>Gestión Sostenible en Destinos Turísticos</b> tiene un arancel de <b>$5000</b> dólares y matrícula de <b>$0</b> dólares que dan un total de <b>$5000</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de Turismo
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de Turismo', 'modulos.mod_turismo');
      nlp.addDocument('es', 'modulos de la maestria de Turismo', 'modulos.mod_turismo');
      nlp.addDocument('es', 'que modulos tiene Turismo', 'modulos.mod_turismo');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Turismo', 'modulos.mod_turismo');

      nlp.addAnswer('es', 'modulos.mod_turismo', `La maestría de <b>Turismo mención Gestión Sostenible en Destinos Turísticos</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Turismo</a>
      `);

    //nombre asignaturas Turismo
      nlp.addDocument('es', 'dime las asignaturas de Turismo', 'modulos.asig_turismo');
      nlp.addDocument('es', 'cual es la malla de Turismo', 'modulos.asig_turismo');
      nlp.addDocument('es', 'cuales son las materias de Turismo', 'modulos.asig_turismo');

      nlp.addAnswer('es', 'modulos.asig_turismo', `Puedes revisar la malla de la maestría de <b>Turismo</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/turismo.pdf" target="_blank">link</a>.
      `);

  //TAG: INFO_MAESTRIA_ADMINISTRACION_EMPRESAS
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'maestria en Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'Administracion de Empresas mención Gestión de las Pymes', 'maestria.admin_empresas');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'cuanto dura la maestria de Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'que titulo obtendre en Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'la maestria de Administracion de Empresas tiene modalidad presencial', 'maestria.admin_empresas');
    nlp.addDocument('es', 'que modalidad tiene Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'cual es la resolucion de Administracion de Empresas', 'maestria.admin_empresas');
    nlp.addDocument('es', 'cual es correo de Administracion de Empresas', 'maestria.admin_empresas');

    nlp.addAnswer('es', 'maestria.admin_empresas', `La Maestría en <b>Administración de Empresas</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Administración de Empresas mención Gestión de las Pymes<br>
    <b>Duración:</b> 2 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.571-2020<br>
    <b>Modalidad:</b> Presencial<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/administracion-empresas" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.pymes@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Administración de Empresas?</a>
    <a class="option-link">¿Cuál es la malla de Administración de Empresas?</a>
    `);
  //costo maestria Administración de Empresas
    nlp.addDocument('es', 'Cual es el costo de Administracion de Empresas', 'maestria.costo_admin_empresas');
    nlp.addDocument('es', 'cuanto debo pagar en la maestria Administracion de Empresas', 'maestria.costo_admin_empresas');
    nlp.addDocument('es', 'cual es el valor de Administracion de Empresas', 'maestria.costo_admin_empresas');
    nlp.addDocument('es', 'pagar en la maestria de Administracion de Empresas', 'maestria.costo_admin_empresas');
    nlp.addDocument('es', 'precio de Administracion de Empresas', 'maestria.costo_admin_empresas');
    nlp.addDocument('es', 'que vale la maestria de Administracion de Empresas', 'maestria.costo_admin_empresas');

    nlp.addAnswer('es', 'maestria.costo_admin_empresas', `La maestría de <b>Administración de Empresas</b> tiene un arancel de <b>$4000</b> dólares y matrícula de <b>$400</b> dólares que dan un total de <b>$4400</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
    <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
    `);

  //modulos de Administración de Empresas
    nlp.addDocument('es', 'cuantos modulos hay en la maestria de Administración de Empresas', 'modulos.mod_admin_empresas');
    nlp.addDocument('es', 'modulos de la maestria de Administración de Empresas', 'modulos.mod_admin_empresas');
    nlp.addDocument('es', 'que modulos tiene Administración de Empresas', 'modulos.mod_admin_empresas');
    nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de Administración de Empresas', 'modulos.mod_admin_empresas');

    nlp.addAnswer('es', 'modulos.mod_admin_empresas', `La maestría de <b>Administración de Empresas mención Gestión de las Pymes</b> tiene: 
    <div>
    <ul>
    <li>2 periodos académicos</li>
    <li>12 módulos (asignaturas)</li>
    </ul> 
    </div>
    <a class="option-link">Dime las asignaturas de Administración de Empresas</a>
    `);

  //nombre asignaturas Administración de Empresas
    nlp.addDocument('es', 'dime las asignaturas de Administración de Empresas', 'modulos.asig_admin_empresas');
    nlp.addDocument('es', 'cual es la malla de Administración de Empresas', 'modulos.asig_admin_empresas');
    nlp.addDocument('es', 'cuales son las materias de Administración de Empresas', 'modulos.asig_admin_empresas');

    nlp.addAnswer('es', 'modulos.asig_admin_empresas', `Puedes revisar la malla de la maestría de <b>Administración de Empresas mención Gestión de las Pymes</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/administraciondeempresas.pdf" target="_blank">link</a>.
    `);


//TAG: INFO_FAC_CIENCIAS_AGRARIAS
  nlp.addDocument('es', 'ciencias agrarias', 'facultades.fac_cagraria');
  nlp.addAnswer('es', 'facultades.fac_cagraria', `La facultad de <b>Ciencias Agrarias</b> tiene la siguiente maestría disponible: <br>

  <a class="option-link">Maestría en Agropecuaria mención Gestión del Desarrollo Rural Sostenible</a><br>
  Puedes obtener más detalles haciendo clic en una maestría 👆.`);

  //TAG: INFO_MAESTRIA_AGROPECUARIA
    nlp.addDocument('es', 'dame mas informacion sobre la maestria en Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'maestria en Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'quiero informacion de la Maestria en Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'cuanto dura la maestria de Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'que titulo obtendre en Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'la maestria de Agropecuaria mencion gestion del Desarrollo Rural Sostenible tiene modalidad presencial', 'maestria.agropecuaria');
    nlp.addDocument('es', 'que modalidad tiene Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'cual es la resolucion de Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');
    nlp.addDocument('es', 'cual es correo de Agropecuaria mencion gestion del Desarrollo Rural Sostenible', 'maestria.agropecuaria');

    nlp.addAnswer('es', 'maestria.agropecuaria', `La Maestría en <b>Agropecuaria</b> contiene lo siguiente: 
    <br><b>Título a obtener:</b> Magíster en Agropecuaria mención Gestión del Desarrollo Rural Sostenible<br>
    <b>Duración:</b> 3 Semestres Académicos<br>
    <b>Resolución CES:</b> RPC-SO-25-NO.571-2020<br>
    <b>Modalidad:</b> Presencial / Virtualidad<br>
    <br>
    Si quieres más información visita este 👉 <a href="https://www.upse.edu.ec/postgrado/index.php/agropecuaria" target="_blank">enlace</a> o comunícate al 📧 <a href="mailto:maestria.agropecuaria@upse.edu.ec">correo</a>.
    <br>O intenta una de estas opciones 👇
    <a class="option-link">¿Cuál es el costo de Agropecuaria?</a>
    <a class="option-link">¿Cuál es la malla de Agropecuaria?</a>
    `);
    //costo de agropecuaria con mención en gestión del desarrollo rural sostenible
      nlp.addDocument('es', 'Cual es el costo de Agropecuaria', 'maestria.costo_agropecuaria');
      nlp.addDocument('es', 'cual es el valor de agropecuaria', 'maestria.costo_agropecuaria');
      nlp.addDocument('es', 'cuanto se paga por la maestria de agropecuaria con mencion en gestion del desarrollo rural sostenible', 'maestria.costo_agropecuaria');
      nlp.addDocument('es', 'cuanto debo pagar en la maestria agropecuaria con mencion en gestion del desarrollo rural sostenible', 'maestria.costo_agropecuaria');
      nlp.addDocument('es', 'que precio tiene agropecuaria con mencion en gestion del desarrollo rural sostenible', 'maestria.costo_agropecuaria');
      nlp.addDocument('es', 'que vale la maestria de agropecuaria con mencion en gestion del desarrollo rural sostenible', 'maestria.costo_agropecuaria');

      nlp.addAnswer('es', 'maestria.costo_agropecuaria', `La maestría de <b>Agropecuaria</b> con mencion en <b>Gestión del Desarrollo Rural Sostenible</b> tiene un arancel de <b>$4200</b> dólares y matrícula de <b>$250</b> dólares que dan un total de <b>$4450</b> dólares. <br><br>Recuerda que hay diferentes descuentos a los que puedes aplicar.
      <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
      `);

    //modulos de agropecuaria con mencion en gestión del desarrollo rural sostenible
      nlp.addDocument('es', 'cuantos modulos hay en la maestria de agropecuaria con mencion en gestion del desarrollo rural sostenible', 'modulos.mod_agropecuaria');
      nlp.addDocument('es', 'modulos de la maestria de agropecuaria con mencion en gestion del desarrollo rural sostenible', 'modulos.mod_agropecuaria');
      nlp.addDocument('es', 'que modulos tiene agropecuaria con mencion en gestion del desarrollo rural sostenible', 'modulos.mod_agropecuaria');
      nlp.addDocument('es', 'cuantos periodos academicos tiene la maestria de agropecuaria con mencion en gestion del desarrollo rural sostenible', 'modulos.mod_agropecuaria');

      nlp.addAnswer('es', 'modulos.mod_agropecuaria', `La maestría de <b>Agropecuaria</b> con mencion en <b>Gestión del Desarrollo Rural Sostenible</b> tiene: 
      <div>
      <ul>
      <li>2 periodos académicos</li>
      <li>12 módulos (asignaturas)</li>
      </ul> 
      </div>
      <a class="option-link">Dime las asignaturas de Agropecuaria</a>
      `);

    //nombre asignaturas agropecuaria con mencion en gestión del desarrollo rural sostenible
      nlp.addDocument('es', 'dime las asignaturas de agropecuaria', 'modulos.asig_agropecuaria');
      nlp.addDocument('es', 'cual es la malla de agropecuaria', 'modulos.asig_agropecuaria');
      nlp.addDocument('es', 'cuales son las materias de agropecuaria con mencion en gestion del desarrollo rural sostenible', 'modulos.asig_agropecuaria');

      nlp.addAnswer('es', 'modulos.asig_agropecuaria', `Puedes revisar la malla de la maestría de <b>Agropecuaria</b> con mención en <b>Gestión del Desarrollo Rural Sostenible</b> con sus módulos (asignaturas) con más detalles ingresando a este 👉 <a href="https://www.upse.edu.ec/postgrado/images/2022/marzo/mallascurriculares/agropecuaria.pdf" target="_blank">link</a>.
      `);





//TAG: MAESTRIAS GENERAL
  nlp.addDocument('es', 'Puedes decirme algunas maestrias', 'maestrias.gen');
  nlp.addDocument('es', 'Que maestrias hay', 'maestrias.gen');
  nlp.addDocument('es', 'Que maestrias ofrecen', 'maestrias.gen');
  nlp.addDocument('es', 'Cuales son las maestrias actuales', 'maestrias.gen');
  nlp.addDocument('es', 'dime las maestrias disponibles', 'maestrias.gen');
  nlp.addDocument('es', 'Cuantas maestrias son', 'maestrias.gen');

  nlp.addAnswer('es', 'maestrias.gen', `Ofrecemos una amplia gama de programas de 
  maestrías (26 en total) en diferentes áreas, como por ejemplo: 
  <a class="option-link">Maestría en Acuicultura</a>
  <a class="option-link">Maestría en Tecnología de Información</a>
  <a class="option-link">Maestría en Gestión Ambiental</a>
  <a class="option-link">Maestría en Derecho</a>
  <a class="option-link">Maestría en Entrenamiento Deportivo</a>
  También puedes consultar más
  <a class="option-link">Información sobre las Facultades 🎓</a>
  y sus maestrías respectivas. O inscribete a una maestría a la que quieres ofertar, y un asesor se 
  pondrá en contacto contigo para brindarte más información.
  <a class="option-link">Si, quiero inscribirme 📝</a>
  `);




//TAG: PREGUNTAS_FRECUENTES
  nlp.addDocument('es', 'modalidades que tiene una maestria', 'preg_frec.preg_frec');
  nlp.addDocument('es', 'cuanto dura una maestria', 'preg_frec.preg_frec');
  nlp.addDocument('es', 'cual es la duracion de una maestria', 'preg_frec.preg_frec');

  nlp.addAnswer('es', 'preg_frec.preg_frec', 'Puede variar según la maestría que elijas. Por ejemplo, en la facultad de Ciencias del Mar, sus maestrías tienen una duración de 2 semestres académicos y pueden ser de modalidad híbrida, presencial o virtual. Pero puedes consultar más información específica sobre la maestría que estás buscando. <p class="option-link">Información sobre la maestría ...</p>');

//TAG: PREGUNTA DOCENTES
  nlp.addDocument('es', 'quienes son los profesores las maestrias', 'preg_frec.preg_doc');
  nlp.addDocument('es', 'cuales son los maestros de las maestrias', 'preg_frec.preg_doc');
  nlp.addDocument('es', 'cuantos docentes son en cada maestria', 'preg_frec.preg_doc');

  nlp.addAnswer('es', 'preg_frec.preg_doc', `Nuestros programas de maestrías cuenta con un equipo docente altamente capacitado y experimentado en diversas áreas de conocimiento. <br>Estos profesionales poseen títulos como <b>PhD</b> o <b>Mgtr</b> con una sólida formación académica y una amplia trayectoria en la enseñanza e investigación. 
  <br><br>Recuerda que todos los programas de maestrías poseen el título de <b>PhD</b> incoporado en sus plantas docente.
  <br><br>Si deseas más información de los docentes de una maestría en particular puedes comunicarte al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo</a>.
  `);




//TAG: COSTO_MAESTRIA
  nlp.addDocument('es', 'cuanto cuesta una maestria', 'costo_maestria.costo_maestria');
  nlp.addDocument('es', 'que vale una maestria', 'costo_maestria.costo_maestria');
  nlp.addDocument('es', 'que precio tiene una maestria', 'costo_maestria.costo_maestria');
  nlp.addDocument('es', 'cual es el costo de una maestria', 'costo_maestria.costo_maestria');

  nlp.addAnswer('es', 'costo_maestria.costo_maestria', `El precio varía dependiendo de la maestría que elijas. Por ejemplo, en la maestría de <b>Tecnologías de la Información</b> tiene un arancel de <b>$5500</b> dólares y una matrícula de <b>$300</b> dólares, lo que da un total de <b>$5800</b> dólares. 
  <br><br>Recuerda que también hay diferentes descuentos a los que puedes aplicar. 
  <a class="option-link">¿Cuáles son esos descuentos?🤔</a>
  <a class="option-link">¿Cuáles son las Facultades?</a>
  <a class="option-link">Quiero inscribirme</a>`
  );

//GESTIÓN DEL APRENDIZAJE Y EVALUACIÓN
//TAG: FALTA ASISTENCIA
  nlp.addDocument('es', 'Cuantas faltas se permiten durante una maestria', 'preg_frec.asist');
  nlp.addDocument('es', 'si falto a clases cuantas faltas son permitidas', 'preg_frec.asist');
  nlp.addDocument('es', 'cual es el limite de faltas que puedo tener en una maestria', 'preg_frec.asist');
  nlp.addDocument('es', 'en una maestria puedo tener faltas', 'preg_frec.asist');

  nlp.addAnswer('es', 'preg_frec.asist', `Según la <b>Gestión del Aprendizaje y Evaluación</b> del Reglamento Académico de Postgrado, dice que: Se necesita una asistencia mínima del 85% del total de horas de clases programadas para aprobar la asignatura, módulo o curso.<br><br> El registro de asistencia será realizado por el asistente administrativo con la colaboración del profesor correspondiente.
  <br><br>Recuerda que esto solo aplica para las maestrías <b>Presenciales</b>.<br>
  Para más información comunícate al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo</a>.
  <a class="option-link">¿Cuáles son las maestrías presenciales?</a>
  <a class="option-link">¿Cuáles son las maestrías virtuales?</a>

  `);
  //maestrias virtuales
    nlp.addDocument('es', 'Cuales son las maestrias virtuales', 'mod.modv');
    nlp.addDocument('es', 'Cuales son las maestrias virtuales', 'mod.modv');
    nlp.addDocument('es', 'que maestrias son virtuales', 'mod.modv');
    nlp.addDocument('es', 'que maestrias son online', 'mod.modv');
    nlp.addDocument('es', 'maestrias en linea', 'mod.modv');

    nlp.addAnswer('es', 'mod.modv', `
    Las maestrías <b>En Línea</b> son:
    <a class="option-link">Maestría en Educación Inicial</a>
    <a class="option-link">Maestría en Educación Básica</a>
    <a class="option-link">Maestría en Electrónica y Automatización</a>
    <a class="option-link">Maestría en Ciberseguridad</a>
    <a class="option-link">Maestría en Telecomunicaciones</a>
    <a class="option-link">Maestría en Derecho Procesal</a>
    <br>
    
    Puedes obtener más detalles haciendo clic en una maestría 👆.
    Para más información comunícate al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo</a>.

    <a class="option-link">¿Cuáles son las maestrías presenciales?</a>
    <a class="option-link">Quiero inscribirme</a>

    `);

    //maestrias presenciales 
    nlp.addDocument('es', 'Cuales son las maestrias presenciales', 'mod.modp');
    nlp.addDocument('es', 'Cuales son las maestrias presenciales', 'mod.modp');
    nlp.addDocument('es', 'que maestrias son presenciales', 'mod.modp');
    nlp.addDocument('es', 'maestrias en presencial', 'mod.modv');
    nlp.addAnswer('es', 'mod.modp', `
    Las maestrías <b>Presenciales</b> son:
    
    <a class="option-link">Maestría en Acuicultura</a>
    <a class="option-link">Maestría en Administración de Empresas Mención Gestión de las PYMES</a>
    <a class="option-link">Maestría en Administración Pública</a>
    <a class="option-link">Maestría en Agropecuaria Mención en Gestión del Desarrollo Rural Sostenible</a>
    <a class="option-link">Maestría en Biodiversidad y Cambio Climático</a>
    <a class="option-link">Maestría en Comunicación</a>
    <a class="option-link">Maestría en Contabilidad y Auditoría</a>
    <a class="option-link">Maestría en Derecho</a>
    <a class="option-link">Maestría en Derecho Mención Derecho Constitucional</a>
    <a class="option-link">Maestría en Educación Mención Tecnología e Innovación Educativa</a>
    <a class="option-link">Maestría en Entrenamiento Deportivo</a>
    <a class="option-link">Maestría en Gestión Ambiental</a>
    <a class="option-link">Maestría en Gestión de Riesgos Mención Prevención de Riesgos Laborales</a>
    <a class="option-link">Maestría en Gestión de Talento Humano</a>
    <a class="option-link">Maestría en Gestión Social y Desarrollo con Mención en Desarrollo Local</a>
    <a class="option-link">Maestría en Ingeniería Civil Mención en Gestión de Construcción</a>
    <a class="option-link">Maestría en Petróleo</a>
    <a class="option-link">Maestría en Psicopedagogía</a>
    <a class="option-link">Maestría en Tecnología de Información</a>
    <a class="option-link">Maestría en Turismo Mención Gestión Sostenible de Destinos Turísticos</a>
    
    <br>
    
    Puedes obtener más detalles haciendo clic en una maestría 👆.
    Para más información comunícate al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo</a>.

    <a class="option-link">¿Cuáles son las maestrías virtuales?</a>
    <a class="option-link">Quiero inscribirme</a>

    `);



//TAG: COSTO_INSCRIPCION
  nlp.addDocument('es', 'cuanto cuesta una inscripcion', 'costo_ins.costo_ins');
  nlp.addDocument('es', 'cual es el costo de la inscripcion', 'costo_ins.costo_ins');
  nlp.addDocument('es', 'que vale la inscripcion', 'costo_ins.costo_ins');
  nlp.addDocument('es', 'cuanto tengo que pagar por la inscripcion', 'costo_ins.costo_ins');
  nlp.addDocument('es', 'pago inscripcion', 'costo_ins.costo_ins');

  nlp.addAnswer('es', 'costo_ins.costo_ins', 'El costo de la inscripción es de <b>30 dólares</b>, según la resolución # N° 01-IPG-UPSE-2022.');


//TAG: FORMA_PAGO
  nlp.addDocument('es', 'cuales son las formas de pago', 'forma_pago.forma_pago');
  nlp.addDocument('es', 'puedo pagar con tarjeta de credito', 'forma_pago.forma_pago');
  nlp.addDocument('es', 'es permitido cancelar con financiamiento directo', 'forma_pago.forma_pago');
  nlp.addDocument('es', 'cual es el numero de pagos', 'forma_pago.forma_pago');

  nlp.addAnswer('es', 'forma_pago.forma_pago', `La Empresa Pública (EP) y el Instituto de Postgrado (IPG) de UPSE brindan descuentos diferenciados para que evoluciones a otro nivel, por eso te otorgamos descuentos especiales por tu forma de pago: 
  <a class="option-link">Pronto pago efectivo 💰</a>
  <a class="option-link">Pronto pago tarjeta de crédito 💳</a>
  <a class="option-link">Convenio de financiamiento directo 📄💳</a>
  
  <br>
  Para mayor información comuníquese al: 📞 <b>0939937721`);

  //info forma de pago efectivo
    nlp.addDocument('es', 'Pronto pago efectivo', 'forma_pago.info_pago_efec');
    nlp.addAnswer('es', 'forma_pago.info_pago_efec', `<b>Pronto pago efectivo</b>
    <br>Si cancelas por completo tu maestría antes de 
    que comiencen las clases, usando depósitos o transferencias, obtendrás un 5% de descuento 
    adicional en el costo total de la matrícula de la maestría. Este descuento se aplicará 
    según el tipo de descuento que tengas al momento de tu aceptación al programa.
    <br><br>
    <b>Nota: </b>Los formatos de los requisitos a presentar, los otorga la Empresa Pública UPSE, 
    mediante el correo <a href="mailto:gcobros@upse.gob.ec">gcobros@upse.gob.ec</a><br><br>
    Para mayor información comuníquese al: 📞 <a href="https://wa.me/593939937721" target="_blank">0939937721</a>`);
  
  //info forma de pago tarjeta de crédito 
    nlp.addDocument('es', 'Pronto pago tarjeta de crédito', 'forma_pago.info_pago_tarjeta');
    nlp.addAnswer('es', 'forma_pago.info_pago_tarjeta', `<b>Pronto pago tarjeta de crédito</b>
    <br>Tienes la opción de pagar la totalidad de tu programa de maestría con una Tarjeta de 
    Crédito común (sin intereses) de forma presencial en las oficinas de EP UPSE Salinas. <br>
    Al hacerlo, recibirás un 5% de descuento extra en la matrícula de la Maestría, de acuerdo 
    al descuento que se te haya otorgado inicialmente.<br>
    También puedes solicitar un enlace de pago en línea a través del sistema DataLink. Solo sigue este 👉 
    <a href="https://empresapublicaupse.gob.ec/index.php/formularios/formulario-pagos" target="_blank">enlace</a>.
    <br><br>
    <b>Nota: </b>Los formatos de los requisitos a presentar, los otorga la Empresa Pública UPSE, 
    mediante el correo <a href="mailto:gcobros@upse.gob.ec">gcobros@upse.gob.ec</a><br><br>
    Para mayor información comuníquese al: 📞<a href="https://wa.me/593939937721" target="_blank">0939937721</a>`);

  //info forma de pago financiamiento
    nlp.addDocument('es', 'Convenio de financiamiento directo', 'forma_pago.info_pago_finan');
    nlp.addDocument('es', 'financiamiento directo', 'forma_pago.info_pago_finan');
    nlp.addDocument('es', 'cuales son los requisitos para el financiamiento directo', 'forma_pago.info_pago_finan');
    nlp.addAnswer('es', 'forma_pago.info_pago_finan', `<b>Convenio de financiamiento directo</b>
    <br>En EP UPSE, también brindamos la oportunidad de financiar tu colegiatura a través de pagos 
    mensuales, mediante la firma de un acuerdo de financiamiento que puede extenderse hasta 2 meses 
    más de la duración de tu programa (según tu plan de estudios). <br>Para acceder a este convenio con 
    la Empresa Pública UPSE, los <b>postulantes admitidos</b> en la maestría deben cumplir con los siguientes 
    <b>REQUISITOS:</b>
    <div>
    <ul>
      <li>Copia del Comprobante de Depósito o transferencia por el pago de inscripción ($30) y matriculación registrado en el Sistema de Gestión Académico (SGA)</li>
      <li>Carta de Solicitud Crédito de Financiamiento*</li>
      <li>Formulario de Solicitud de Crédito Educativo*</li>
      <li>Carta Autorización Revisión del Buró de Crédito*</li>
      <li>Copia de Cédula de Identidad a Color</li>
      <li>Copia de Certificado de Votación Vigente a color</li>
      <li>Para <b>profesionales</b> que laboran <b>bajo relación de dependencia:</b>
        <ul>
          <li>Certificado Laboral y Rol de pagos de los 3 últimos meses</li>
        </ul>
      </li>
      <li>Para <b>profesionales</b> en <b>libre ejercicio:</b>
        <ul>
          <li>3 últimas declaraciones de IVA, última Declaración de Impuesto a la Renta (para el caso que tenga negocio propio, <b>profesionales independientes</b>)</li>
        </ul>
      </li>
    </ul>
    </div>
    <br>
    <b>Nota: </b>Los formatos de los requisitos a presentar, los otorga la Empresa Pública UPSE, 
    mediante el correo <a href="mailto:gcobros@upse.gob.ec">gcobros@upse.gob.ec</a><br><br>
    Para mayor información comuníquese al: 📞 <a href="https://wa.me/593939937721" target="_blank">0939937721</a>`);

// boton click 
//<a class="option-link"></a>

//TAG: DESCUENTOS
  nlp.addDocument('es', 'descuentos de maestrias', 'descuentos.descuentos');
  nlp.addDocument('es', 'Cuales son esos descuentos', 'descuentos.descuentos');

  nlp.addAnswer('es', 'descuentos.descuentos', `Estos son los descuentos que puedes aplicar: 
  <div>
  <ul>
  <li>Descuentos por Convenios Institucionales</li>
  <li>Descuento Institucional</li>
  <li>Descuentos Grupales</li>
  <li>Pronto Pago</li>
  <li>Descuentos para: Graduados, Personal Académico y Personal Administrativo</li>
  </ul>
  </div>
  Puedes comunicarte al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo</a> para saber más información sobre estos descuentos.
  `);
    //descripcion descuentos
/*     nlp.addDocument('es', 'Descuentos por Convenios Institucionales', 'descuentos.desc_descuentos');
    nlp.addAnswer('es', 'descuentos.desc_descuentos', `Estos son los descuentos que puedes aplicar: `);

 */

//TAG: FECHA DE INICIO MAESTRIAS
  nlp.addDocument('es', 'cuando inician las maestrias', 'fecha.fecha');
  nlp.addDocument('es', 'Cuales son las fechas de inicio de las maestrias', 'fecha.fecha');

  nlp.addAnswer('es', 'fecha.fecha', `Las fechas de inicio de las maestrías varían según la planificación académica de cada programa. 
  Para obtener más detalles puedes comunicarte al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo de Postgrado</a>.<br>
  <br>
  También puedes consultar más
  <a class="option-link">Información sobre las Facultades 🎓</a>
  y sus maestrías respectivas. O inscribete a una maestría a la que quieres ofertar, y un asesor se 
  pondrá en contacto contigo para brindarte más información.
  <a class="option-link">Si, quiero inscribirme 📝</a>

  `);

//TAG: COMUNICAR MAESTRIA
  nlp.addDocument('es', 'como puedo comunicarme con la direccion de la maestria', 'num.maestria');
  nlp.addDocument('es', 'Cuales son los numeros de contacto de postgrado', 'num.maestria');
  nlp.addDocument('es', 'Cual es correo de postgrado', 'num.maestria');
  nlp.addDocument('es', 'como me comunico con postgrado', 'num.maestria');

  nlp.addAnswer('es', 'num.maestria', `
  Para obtener más detalles puedes comunicarte al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo de Postgrado</a>.<br>
  <br>
  También puedes consultar el correo de la maestría que buscas en 👇
  <a class="option-link">Información sobre las Facultades 🎓</a>
  y elige la maestría respectiva. O puedes intentar escribiendo 📝
  <p class="option-link">Cual el correo de la maestria de ...</p>
  y especifíca el nombre de la maestría.

  `);

//TAG: HORARIO MAESTRIAS
  nlp.addDocument('es', 'como son los horarios de la maestria', 'fecha.horario');
  nlp.addDocument('es', 'Cuales son los horarios de las maestrias', 'fecha.horario');
  nlp.addDocument('es', 'Cual es el horario de una maestrias', 'fecha.horario');

  nlp.addAnswer('es', 'fecha.horario', `Los horarios de las maestrías varían según la planificación académica de cada programa. 
  <br>Para obtener más detalles puedes comunicarte al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo de Postgrado</a>, y un asesor se 
  pondrá en contacto contigo para brindarte más información.<br>
  También puedes consultar más 👇
  <a class="option-link">Información sobre las Facultades 🎓</a>
  y sus maestrías respectivas. 

  `);

//TAG: MODULOS GENERAL
  nlp.addDocument('es', 'cual es el numero de modulos de una maestrias', 'mod_gen.mod_gen');
  nlp.addDocument('es', 'modulos de una maestria', 'mod_gen.mod_gen');
  nlp.addDocument('es', 'que modulos tiene una maestria', 'mod_gen.mod_gen');

  nlp.addAnswer('es','mod_gen.mod_gen',`Si deseas conocer los módulos de una maestría en particular debes 
  mencionar el nombre, puedes intentar escribiendo 📝👇
  <p class="option-link">Cuantos modulos hay en la maestria de ...</p>
  y especifíca el nombre de la maestría.
  `);

//TAG: PERFIL ASPIRANTE
  nlp.addDocument('es', 'cual es el perfil que debo tener como aspirante si quiero entrar a una maestria', 'perfil.perfil');
  nlp.addDocument('es', 'que perfil es necesario para ingresar a una maestria', 'perfil.perfil');
  nlp.addDocument('es', 'Si tengo mi titulo de tercer nivel puedo entrar a una maestria', 'perfil.perfil');
  nlp.addDocument('es', 'con mi titulo de tecnologo puedo entrar a una maestria', 'perfil.perfil');
  nlp.addDocument('es', 'si tengo mi titulo tecnologico puedo entrar en una maestria', 'perfil.perfil');
  nlp.addAnswer('es', 'perfil.perfil', `
  Según <b>El Cuarto Nivel o Postgrado</b> del Reglamento Académico de Postgrado, dice que 
  para el ingreso a un programa de cuarto nivel o postgrado se requiere: 
  poseer <b>título de tercer nivel de grado</b>, debidamente registrado por el 
  órgano rector de la política pública de educación superior y cumplir con el 
  proceso de admisión establecido en el programa al que postula.

  <br><br>Recuerda que esto no aplica para un postgrado <b>tecnológico</b>.<br>
  Para más información comunícate al celular: 📞 <b>0982495331</b> o al 📧 <a href="mailto:infopostgrado@upse.edu.ec">correo</a>.
  También puedes consultar el 👇
  <a class="option-link">Campo amplio</a>
  para saber a que maestrías puedes postular.

    
  `);


//TAG: CAMPO AMPLIO
  nlp.addDocument('es', 'campo amplio', 'campo.campo');
  nlp.addDocument('es', 'si tengo un titulo de derecho puedo ingresar a la maestria de acuicultura', 'campo.campo');
  nlp.addDocument('es', 'en que maestrias puedo aplicar con mi titulo de', 'campo.campo');

  nlp.addAnswer('es', 'campo.campo', `
  Puedes consultar en que maestrías puedes aplicar según tu título de tercer nivel de grado. 🎓<br>
  <b>Selecciona tu campo amplio:</b><br>
  <a class="option-link">Ciencias Sociales, Periodismo, Información y Derecho 📚🗞️⚖️</a>
  <a class="option-link">Artes y Humanidades 🎨📚</a>
  <a class="option-link">Administración 💼</a>
  <a class="option-link">Servicios 🛍️💼</a>
  <a class="option-link">Ingeniería, Industria y Construcción 🛠️🏭🏗️</a>
  <a class="option-link">Agricultura, Silvicultura, Pesca y Veterinaria 🌱🌳🎣🐾</a>
  <a class="option-link">Tecnologías de la Información y la Comunicación (TIC) 💻📱</a>
  <a class="option-link">Salud y Bienestar 🏥❤️</a>
  <a class="option-link">Educación 📚🎓</a>
  <a class="option-link">Ciencias Naturales, Matemáticas y Estadística 🔬📊</a>

  `);
  //info campo Ciencias Sociales, Periodismo, Información y Derecho
    nlp.addDocument('es', 'Ciencias Sociales, Periodismo, Informacion y Derecho', 'campo.ciencias_sociales');
    nlp.addAnswer('es', 'campo.ciencias_sociales', `El campo amplio de <b>Ciencias Sociales, Periodismo, Información y Derecho</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Gestión Social y Desarrollo con Mención en Desarrollo Local</li>
            <li>Magíster en Derecho Constitucional</li>
            <li>Magíster en Comunicación</li>
            <li>Magíster en Derecho</li>
            <li>Magíster en Derecho Procesal</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);

  //info campo Artes y Humanidades
    nlp.addDocument('es', 'Artes y Humanidades', 'campo.artes_humanidades');
    nlp.addAnswer('es', 'campo.artes_humanidades', `El campo amplio de <b>Artes y Humanidades</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Artes (NO HAY)</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);

  //info campo Administración
    nlp.addDocument('es', 'Administracion', 'campo.administracion');
    nlp.addAnswer('es', 'campo.administracion', `El campo amplio de <b>Administración</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Contabilidad y Auditoría</li>
            <li>Magíster en Gestión del Talento Humano</li>
            <li>Magíster en Administración de Empresas, Mención Gestión de las PYMES</li>
            <li>Magíster en Administración Pública</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);

  //info campo Servicios
    nlp.addDocument('es', 'Servicios', 'campo.servicios');
    nlp.addAnswer('es', 'campo.servicios', `El campo amplio de <b>Servicios</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Entrenamiento Deportivo</li>
            <li>Magíster en Turismo Mención Gestión Sostenible en Destinos Turísticos</li>
            <li>Magíster en Gestión de Riesgos con Mención de Prevención de Riesgos Laborales</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);

  //info campo Ingeniería, Industria y Construcción
    nlp.addDocument('es', 'Ingeniería, Industria y Construcción', 'campo.ing_ind');
    nlp.addAnswer('es', 'campo.ing_ind', `El campo amplio de <b>Ingeniería, Industria y Construcción</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Petróleos</li>
            <li>Magíster en Ingeniería Civil con Mención en Gestión de la Construcción</li>
            <li>Magíster en Telecomunicaciones</li>
            <li>Magíster en Electrónica y Automatización</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);
 
  //info campo Agricultura, Silvicultura, Pesca y Veterinaria
    nlp.addDocument('es', 'Agricultura, Silvicultura, Pesca y Veterinaria', 'campo.agricultura');
    nlp.addAnswer('es', 'campo.agricultura', `El campo amplio de <b>Agricultura, Silvicultura, Pesca y Veterinaria</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Agropecuaria con Mención en Gestión del Desarrollo Rural Sostenible</li>
            <li>Magíster en Acuicultura</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);

  //info campo Tecnologías de la Información y la Comunicación (TIC)
    nlp.addDocument('es', 'Tecnologias de la Informacion y la Comunicacion (TIC)', 'campo.tic');
    nlp.addAnswer('es','campo.tic',`El campo amplio de <b>Tecnologías de la Información y la Comunicación (TIC)</b>
    otorga los siguientes títulos:
    <div>
      <ul>
        <li>Magíster en Tecnologías de la Información</li>
        <li>Magíster en Ciberseguridad</li>
      </ul> 
    </div>
    Ahora que sabes tu campo amplio puedes consultar más
    <a class="option-link">Información sobre las Facultades 🎓</a>
    y sus maestrías respectivas.
    `);

  //info campo Salud y Bienestar
    nlp.addDocument('es', 'Salud y Bienestar', 'campo.salud_bienestar');
    nlp.addAnswer('es', 'campo.salud_bienestar', `El campo amplio de <b>Salud y Bienestar</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Salud (NO HAY)</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);
  
  //info campo Educación
    nlp.addDocument('es', 'Educacion', 'campo.educacion');
    nlp.addAnswer('es', 'campo.educacion', `El campo amplio de <b>Educación</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Pedagogía de los Idiomas Nacionales y Extranjeros Mención Enseñanza de Inglés</li>
            <li>Magíster en Psicopedagogía</li>
            <li>Magíster en Educación</li>
            <li>Magíster en Educación Básica</li>
            <li>Magíster en Educación Inicial</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);
  
  //info campo Ciencias Naturales, Matemáticas y Estadística
    nlp.addDocument('es', 'Ciencias Naturales, Matematicas y Estadistica', 'campo.ciencias_nat');
    nlp.addAnswer('es', 'campo.ciencias_nat', `El campo amplio de <b>Ciencias Naturales, Matemáticas y Estadística</b>
        otorga los siguientes títulos:
        <div>
          <ul>
            <li>Magíster en Biodiversidad y Cambio Climático</li>
            <li>Magíster en Gestión Ambiental</li>
          </ul> 
        </div>

        Ahora que sabes tu campo amplio puedes consultar más
        <a class="option-link">Información sobre las Facultades 🎓</a>
        y sus maestrías respectivas.
    `);

    
//TAG: DOCUMENTACION_ADMISION
  nlp.addDocument('es', 'que documentos necesito para la admision', 'doc_admision.doc_admision');
  nlp.addDocument('es', 'documentos de admision', 'doc_admision.doc_admision');
  nlp.addDocument('es', 'documentos para la admision', 'doc_admision.doc_admision');

  nlp.addAnswer('es', 'doc_admision.doc_admision', 'Para el registro en línea necesitarás: hoja de vida, solicitud de admisión, senescyt*, cedula/votación y pago de inscripción.');



//TAG: ADMISION
  nlp.addDocument('es', 'que debo cumplir para mi admision', 'admision.admision');
  nlp.addDocument('es', 'admision', 'admision.admision');
  nlp.addDocument('es', 'requisitos para la admision', 'admision.admision');

  nlp.addAnswer('es', 'admision.admision', 'El aspirante deberá cumplir con los siguientes requisitos:<br>a. Solicitud de admisión dirigida al Director del IPG.<br>b. Aprobar el examen de admisión y test de aptitud.<br>c. Asistir a la entrevista personal con el Coordinador del programa.');


//TAG: INFO_BECA_DISCAPACIDAD
  nlp.addDocument('es', 'becas por discapacidad', 'beca_dis.beca_dis');
  nlp.addAnswer('es', 'beca_dis.beca_dis', 'Sí, según el Art. 50. La UPSE, en base a cupos y presupuesto de los programas, podrá otorgar becas a personas con discapacidad o enfermedad catastrófica hasta el 70% del total de la beca o ayuda económica.');


//TAG: DOCUMENTACION
  nlp.addDocument('es', 'que documentos debo entregar', 'docum.docum');
  nlp.addDocument('es', 'que necesito para la matriculacion', 'docum.docum');
  nlp.addDocument('es', 'que datos debo subir para matricularme', 'docum.docum');

  nlp.addAnswer('es', 'docum.docum', 'Para la matriculación necesitas:<br>Dos fotos tamaño carnet actualizadas<br>Comprobante de depósito original del pago de la inscripción.');


//TAG: PLATAFORMA_MOODLE
nlp.addDocument('es', 'plataforma de moodle', 'moodle.moodle');

nlp.addAnswer('es', 'moodle.moodle', 'Para ingresar a la plataforma Moodle puedes hacerlo <a href="https://ava.upse.edu.ec/" target="_blank">aquí</a>.');



//TAG: SOPORTE
  nlp.addDocument('es', 'como hago que mi calificacion que esta mal subida me la arreglen', 'soporte.soporte');
  nlp.addDocument('es', 'tengo problemas al subir mis documentos', 'soporte.soporte');
  nlp.addDocument('es', 'como soluciono mi problema', 'soporte.soporte');
  nlp.addDocument('es', 'con quien me comunico para que me resuelvan mi inconveniente', 'soporte.soporte');
  nlp.addDocument('es', 'como resuelvo mi conflicto', 'soporte.soporte');
  nlp.addDocument('es', 'no puedo entrar a la plataforma moodle', 'soporte.soporte');
  nlp.addDocument('es', 'necesito ayuda para resolver mi calificacion', 'soporte.soporte');
  nlp.addAnswer('es', 'soporte.soporte', 'Si presentas algún inconveniente, puedes comunicarte con el <a href="http://www.upse.edu.ec/soporte/" target="_blank">soporte de TICS</a> o al 📧 <a href="mailto:soporte@upse.edu.ec">correo</a>.');

       
//descargar_doc_general
  nlp.addDocument('es', 'que documentos necesito para inscribirme', 'maestria.docs_gen');
  nlp.addDocument('es', 'como hago para descargar la plantilla de inscripcion', 'maestria.docs_gen');
  nlp.addDocument('es', 'cual es la hoja de vida', 'maestria.docs_gen');
  nlp.addDocument('es','donde descargo los documentos para la inscripcion', 'maestria.docs_gen');

  nlp.addAnswer('es', 'maestria.docs_gen', `Para el registro en línea necesitarás: 
  <a class="option-link" href="https://www.upse.edu.ec/postgrado/media/attachments/2022/03/21/formato-de-hoja-de-vida-estudiantes-instituto-de-postgrado-.docx">Hoja de vida</a>
  <a class="option-link" href="https://www.upse.edu.ec/postgrado/images/2022/maestrias/acuicultura/solicitud-inscripcion-acuicultura.docx">Solicitud de al Director/a IPG</a> 
  Puedes descargar la plantilla haciendo clic en una opción 👆.<br>
  También puedes revisar la 👉
  <a class="option-link" href="https://www.upse.edu.ec/postgrado/index.php?option=com_sppagebuilder&view=page&id=34&Itemid=270" target="_blank">Guía de admisión</a> `);



    //TAG: INSCRIPCION
      nlp.addDocument('es', 'quiero inscribirme', 'inscripcion.inscripcion');
      nlp.addDocument('es', 'como hago para la inscripcion', 'inscripcion.inscripcion');
      nlp.addDocument('es', 'que necesito para inscribirme', 'inscripcion.inscripcion');
      nlp.addDocument('es', 'donde me inscribo', 'inscripcion.inscripcion');
      nlp.addDocument('es', 'quiero registrarme', 'inscripcion.inscripcion');
      nlp.addDocument("es", "donde me registro", "inscripcion.inscripcion");

      nlp.addAnswer("es","inscripcion.inscripcion",`Para comenzar el registro, necesitaré que propociones tus datos para poder contactarte. ¿Deseas inscribirte? 🤗<br>
      <a class="option-link">Si</a>
      <a class="option-link">No</a>`);


    //TAG: SUBIR_DOCUMENTACION
      nlp.addDocument('es', 'docs', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'quiero iniciar sesion', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'como inicio sesion', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'donde pongo mi usuario y contraseña', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'como hago para poner el usuario y clave', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'como subo los documentos', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'donde pongo los documentos', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'donde subo mis comprobantes de pago', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'quiero subir mis documentos', 'subir_docs.subir_docs');
      nlp.addDocument('es', 'como hago para subir los requisitos', 'subir_docs.subir_docs');

      nlp.addAnswer('es', 'subir_docs.subir_docs', `Para ayudarte a subir tus documentos, necesitaré que propociones tu usuario y contraseña. ¿De acuerdo? 
      <a class="option-link">Si</a>
      <a class="option-link">No</a>
      `);


}

//si se agregaron mas preguntas = true
//no se hicieron cambion = false
const isNewDataAdded = false;

if (isNewDataAdded) {
  // Entrena el chatbot y guarda el modelo
  const hrstart = process.hrtime();
  await nlp.train();
  nlp.save('./model.nlp');
  const hrend = process.hrtime(hrstart);
  console.info('Se entrenó correctamente! (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}

/* const hrstart = process.hrtime();
  await nlp.train();
  nlp.save('./model.nlp');
  const hrend = process.hrtime(hrstart);
  console.info('Se entrenó correctamente! (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
 */
})();



