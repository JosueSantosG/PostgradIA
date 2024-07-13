import { DataTypes } from "sequelize";
import database from "../database/connection";
import Persona from "./usuario";
import Oferta from "./oferta";
import Userdocs from "./userdocs";
import Iniciosesion from "./iniciosesion";

const Inscripcion = database.define('inscripcion', {
    id_inscripcion: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_inscripcion' 
    },
    id_persona:{
        type: DataTypes.INTEGER
    },
    id_oferta: {
      type: DataTypes.INTEGER
    },
    id_periodo_academico: {
      type: DataTypes.INTEGER
    },
    codigo_vendedor: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.CHAR,
      defaultValue: 'A',
    }
  });
  Inscripcion.belongsTo(Persona, {foreignKey : "id_persona"});
  Persona.hasMany(Inscripcion,{foreignKey : "id_persona"});

  Inscripcion.belongsTo(Oferta, {foreignKey : "id_oferta"});
  Oferta.hasMany(Inscripcion,{foreignKey : "id_oferta"});

/*   Inscripcion.belongsTo(Userdocs, {foreignKey : "id_inscripcion"});
  Userdocs.hasMany(Inscripcion,{foreignKey : "id_inscripcion"}); */

  export default Inscripcion;