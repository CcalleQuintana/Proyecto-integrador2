import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ofertas } from "./ofertas.js";
import { carritos_productos } from "./carritos_productos.js";
import { carritos } from "./carritos.js";

export const productos = sequelize.define('productos', {
   
   
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.INTEGER,
    }


});

productos.hasMany(ofertas, {
    foreignKey: 'id_productos',
    sourceKey: 'id'
});

ofertas.belongsTo(productos, {
    foreignKey: 'id_productos',
    targetID: 'id'
});

productos.hasMany(carritos_productos, {
    foreignKey: 'Id_productos',
    sourceKey: 'id'
});

carritos_productos.belongsTo(productos, {
    foreignKey: 'Id_productos',
    targetID: 'id'
});

productos.hasMany(carritos, {
    foreignKey: 'Id_productos',
    sourceKey: 'id'
});

carritos.belongsTo(productos, {
    foreignKey: 'Id_productos',
    targetID: 'id'
}); 