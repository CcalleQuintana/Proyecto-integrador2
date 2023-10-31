import app from "./app.js";
import { sequelize } from './database/database.js';
const jwt = require('jsonwebtoken');

async function main() {
    try {
        await sequelize.sync({ alter: true }) //Elimina la tabla y la crea nuevamente cuando hago cambios //Sincroniza con la base de datos(crea tablas , elimina )
        app.listen(4000);
        console.log("Server listening on port", 4000);

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();

