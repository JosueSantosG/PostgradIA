/* const { SentimentManager } = require('node-nlp');

const com = "me perjudico";
const sentiment = new SentimentManager();

sentiment.process('es', com)
  .then((result: { vote: any; }) => {
    const sentimentResult = result.vote;
    if (sentimentResult === 'positive') {
      console.log("El mensaje es positivo.");
    } else if (sentimentResult === 'negative') {
      console.log("El mensaje es negativo.");
    } else {
      console.log("El mensaje es neutral o no se pudo determinar el sentimiento.");
      console.log(result);
      
    }
  })
  .catch((err: any) => {
    console.error("Error al procesar el sentimiento:", err);
  });
 */

const { NlpManager } = require('node-nlp');
const nlp = new NlpManager({ languages: ['es'], forceNER: true });
// Se añade las preguntas y sus etiquetas
nlp.addDocument('es', 'adios por ahora', 'despedida.despedida');
nlp.addDocument('es', 'Nos vemos', 'despedida.despedida');
nlp.addDocument('es', 'debo irme', 'despedida.despedida');
nlp.addDocument('es', 'Hasta luego', 'despedida.despedida');
nlp.addDocument('es', 'Chao', 'despedida.despedida');
nlp.addDocument('es', 'Hola', 'saludo.saludo');
nlp.addDocument('es', 'Ey, que tal', 'saludo.saludo');
nlp.addDocument('es', 'Como estas', 'saludo.saludo');
nlp.addDocument('es', 'Buenos dias', 'saludo.saludo');
// Se añade las respuestas con su etiqueta respectiva
nlp.addAnswer('es', 'despedida.despedida', 'adios');
nlp.addAnswer('es', 'despedida.despedida', 'no vemos pronto!');
nlp.addAnswer('es', 'saludo.saludo', 'Hola como estas!');
nlp.addAnswer('es', 'saludo.saludo', 'Saludos!');
// Entrena y se guarda el modelo
(async() => {
    await nlp.train();
    nlp.save('model.nlp');
    const response = await nlp.process('es', 'Hola como estas');
    console.log(response);
})();