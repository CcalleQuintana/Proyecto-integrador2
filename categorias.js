import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { productos } from './productos.js';
export const categorias = sequelize.define('categorias', {
    
    nombre: {
        type: DataTypes.STRING,
    },

    descripcion: {
        type: DataTypes.STRING,
    },

    estado: {
        type: DataTypes.ENUM('Activo', 'No Activo')
    }

});

categorias.hasMany(productos,{
   foreigKey:'categorias_id',
   sourceKey:'id'
});

productos.belongsTo(categorias,{
    foreigKey:'categorias_id',
    targetId:'id'
});