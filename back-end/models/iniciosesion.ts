import { DataTypes } from "sequelize";
import database from "../database/connection";
import Inscripcion from "./inscripcion";
const Iniciosesion = database.define('iniciosesion', {
      id_iniciosesion: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_iniciosesion'
    },
    usuario: {
      type: DataTypes.STRING
    },
    clave: {
      type: DataTypes.STRING
    }
  });
  export default Iniciosesion;
