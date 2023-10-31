import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { carritos_productos } from "./carritos_productos.js";

export const carritos = sequelize.define('carritos', {

   estado: {
      type: DataTypes.ENUM('Activo', 'Inactivo')
   }

});

 carritos.hasMany(carritos_productos,{
    foreingKey:'Id_carrito',
    sorceKye:'id'
 });

 carritos_productos.belongsTo(carritos,{
    foreingKey:'Id_carrito',
    targetID:'id'

 });