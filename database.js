import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    '123',
    {
        host: 'localhost',
        dialect: 'postgres'

    });