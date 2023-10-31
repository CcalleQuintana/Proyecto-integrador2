import { Router } from "express";
import { createCarrito,getCarritos,deleteCarrito,updateCarrito } from "../controllers/carritos.controllers.js";
const router = Router();

router.get('/carritos',getCarritos);
router.post('/carritos',createCarrito);
router.put('/carritos/:id',updateCarrito);
router.delete('/carritos/:id',deleteCarrito);
router.get('/carritos/:id');

export default router;