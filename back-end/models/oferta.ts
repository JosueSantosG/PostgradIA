import { DataTypes } from "sequelize";
import database from "../database/connection";
const Oferta = database.define('oferta', {
    id_oferta: { // Cambiado de "id" a "id_persona"
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_oferta' // Nombre de la columna en la base de datos
    },
    descripcion: {
      type: DataTypes.STRING
    },
    descripcion_corta: {
      type: DataTypes.STRING
    },
    fecha_inicio_oferta: {
      type: DataTypes.DATE
    },
    fecha_fin_oferta: {
      type: DataTypes.DATE
    },
    correo: {
      type: DataTypes.STRING
    },
    clave: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.CHAR
    },
    fecha_ingreso: {
      type: DataTypes.TIME
    }
  });

  export default Oferta;
