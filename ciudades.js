import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { usuarios } from './usuarios.js';
export const ciudades = sequelize.define('ciudades', {
    
    
    nombre: {
        type: DataTypes.STRING
    },


});

ciudades.hasMany(usuarios, {
    foreigKey: 'ciudad_id',
    sourceKey: 'id'

});

usuarios.belongsTo(ciudades, {
    foreigKey: 'ciudad_id',
    targetId: 'id'
}); 