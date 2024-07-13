import express, {Application,Request } from 'express'
import userRoutes from '../routes/usuario';
import userData from "../routes/userdata";
import cors from 'cors';
import database from '../database/connection';


class Server{
    private app: Application;
    private port : string;
    private apiPaths = {
        chatbot:'/api/chatbot',
        oferta:'/api/oferta',
        comentario:'/api/chatbot',
        login:'/api/user',
        sendFile:'/api/file',
        actdatos:'/api/datos'
    }
    constructor(){
        this.app=express();
        this.port=process.env.PORT || '3000';
        //metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();


    }
    //TODO: BASE DE DATOS
    async dbConnection(){

        try{
            await database.authenticate();
            console.log("Base de datos conectada");
            

        }catch(error){
            console.error('Error al conectar',error);
        }
    }


    middlewares(){
        // Configurar cors
        this.app.use(cors());
      
        // Lectura del body
        this.app.use(express.json());
      
        // Carpeta pública
        this.app.use(express.static('public'));
      
      }
      


    routes(){
        this.app.use(this.apiPaths.chatbot,userRoutes)
        this.app.use(this.apiPaths.oferta,userRoutes)
        this.app.use(this.apiPaths.comentario,userRoutes)
        this.app.use(this.apiPaths.login,userData)
        this.app.use(this.apiPaths.sendFile,userData)
        this.app.use(this.apiPaths.actdatos,userData)
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor en puerto: '+ this.port);
       
        });
    }
}
export default Server;
