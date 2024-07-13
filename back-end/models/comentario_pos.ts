import { DataTypes,literal } from "sequelize";
import database from "../database/connection";
const ComentarioPos = database.define('comentario_pos', {
    id_comentario_pos: { // Cambiado de "id" a "id_persona"
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_comentario_pos' // Nombre de la columna en la base de datos
    },
    comentario_pos: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.TIME,
      defaultValue: literal('CURRENT_TIME'),
    }
  });

  export default ComentarioPos;
