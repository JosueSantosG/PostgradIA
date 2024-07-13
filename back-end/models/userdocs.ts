import { DataTypes } from "sequelize";
import database from "../database/connection";
import Iniciosesion from "./iniciosesion";
import Inscripcion from "./inscripcion";

const Userdocs = database.define("userdocs", {
  id_userdoc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id_userdoc",
  },
  id_inscripcion: {
    type: DataTypes.INTEGER,
  },
  id_iniciosesion: {
    type: DataTypes.INTEGER,
  },
  cedula: {
    type: DataTypes.STRING,
  },
  certificado: {
    type: DataTypes.STRING,
  },
  solicitud: {
    type: DataTypes.STRING,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  comprobante: {
    type: DataTypes.STRING,
  },
  hojadevida: {
    type: DataTypes.STRING,
  },
  
});
Userdocs.belongsTo(Iniciosesion, { foreignKey: "id_iniciosesion" });
Iniciosesion.hasMany(Userdocs, { foreignKey: "id_iniciosesion" });

Userdocs.belongsTo(Inscripcion, { foreignKey: "id_inscripcion" });
Inscripcion.hasMany(Userdocs, { foreignKey: 'id_inscripcion' });

export default Userdocs;
