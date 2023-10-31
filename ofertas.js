import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ofertas = sequelize.define('ofertas',{

nombre:{
    type:DataTypes.STRING,
},
descripcion:{
    type:DataTypes.STRING,
},
estados:{
    type:DataTypes.ENUM('Activo','No Activo'),
},
inicio:{
    type:DataTypes.DATE,
},
fin:{
    type:DataTypes.DATE
}
});