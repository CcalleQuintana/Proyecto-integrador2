import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { carritos } from './carritos.js';

export const usuarios = sequelize.define('usuarios', {
    
    

    nombre: {
        type: DataTypes.STRING,
    },

    direccion: {
        type: DataTypes.STRING,
    },

    password: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING
    }
});

usuarios.hasMany(carritos, {
    foreingKey: 'id',
    sourceKey: 'id'
});

carritos.belongsTo(usuarios, {
    foreingKey: 'id',
    targetID: 'id'

});
