import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { carritos } from './carritos.js';

export const pedidos = sequelize.define('pedidos', {
    
    fecha: {
        type: DataTypes.DATE,
    },
    metodo_pago: {
        type: DataTypes.STRING,
    },

    estado: {
        type: DataTypes.ENUM('Activo', 'No activo')
    }

});

pedidos.hasMany(carritos, {
    foreingKey: 'Id_pedidos',
    sourceKey: 'id'
});

carritos.belongsTo(pedidos, {
    foreingKey: 'Id_pedidos',
    targetID: 'id'
}); 