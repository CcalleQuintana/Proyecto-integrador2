import { Router } from "express";
import { createProducto,getProductos, updateProducto, deleteProducto } from "../controllers/productos.controllers.js";
const router=Router();

router.get('/productos',getProductos);
router.post('/productos',createProducto);
router.put('/productos/:id',updateProducto);
router.delete('/productos/:id', deleteProducto);
router.get('/productos/:id');

export default router;