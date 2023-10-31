import { Router } from "express";
import { createCarritos_producto,deleteCarrito_producto,getCarritos_productos, updateCarrito_producto} from "../controllers/carritos_productos.controllers.js";
const router=Router();

router.get('/carritos_productos',getCarritos_productos);
router.post('/carritos_productos',createCarritos_producto);
router.put('/carritos_productos/:id',updateCarrito_producto);
router.delete('/carritos_productos/:id',deleteCarrito_producto);
router.get('/carritos_productos/:id');

export default router;