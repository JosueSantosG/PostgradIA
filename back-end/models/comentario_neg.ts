import { DataTypes,literal } from "sequelize";
import database from "../database/connection";
const ComentarioNeg = database.define('comentario_neg', {
    id_comentario_neg: { // Cambiado de "id" a "id_persona"
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_comentario_neg' // Nombre de la columna en la base de datos
    },
    comentario_neg: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.TIME,
      defaultValue: literal('CURRENT_TIME'),
    }
  });

  export default ComentarioNeg;
