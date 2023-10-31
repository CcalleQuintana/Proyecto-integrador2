import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const carritos_productos = sequelize.define('carritos_productos', {

    
    cantidad: {
        type: DataTypes.INTEGER
    }
});