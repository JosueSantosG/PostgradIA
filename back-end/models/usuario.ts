import { DataTypes,literal  } from "sequelize";
import database from "../database/connection";

const Persona = database.define('persona', {
  id_persona: { // Cambiado de "id" a "id_persona"
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_persona' // Nombre de la columna en la base de datos
  },
  identificacion: {
    type: DataTypes.STRING
  },
  nombres: {
    type: DataTypes.STRING
  },
  apellidos: {
    type: DataTypes.STRING
  },
  sexo: {
    type: DataTypes.STRING
  },
  celular: {
    type: DataTypes.STRING
  },
  email_personal: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.CHAR,
    defaultValue: 'A',
  },
  fecha_ing: {
    type: DataTypes.TIME,
    defaultValue: literal('CURRENT_TIME'),
  }
});

export default Persona;