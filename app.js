//Configuracion de express, index sera encargado de arrancar la app
import express from 'express';
import ciudadesRoutes from './routes/ciudades.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import pedidosRoutes from './routes/pedidos.routes.js';
import { usuarios } from './models/usuarios.js';
import  categoriasRoutes  from './routes/categorias.routes.js';
import carritosRoutes from './routes/carritos.routes.js';
import ofertasRoutes from './routes/ofertas.routes.js';
import productosRoutes from './routes/productos.routes.js';
import Carritos_productosRoutes from './routes/carritos_productos.routes.js';
const app = express();
//middlewares
app.use(express.json());
app.use(ciudadesRoutes);
app.use(categoriasRoutes);
app.use(pedidosRoutes);
app.use(ofertasRoutes);
app.use(carritosRoutes);
app.use(usuarioRoutes);
app.use(productosRoutes);
app.use(Carritos_productosRoutes);

export default app;