import { Router } from "express";
import { createPedido,deletePedido,getPedidos, updatePedido } from "../controllers/pedidos.controllers.js";
const router =Router();


router.get('/pedidos', getPedidos);
router.post('/pedidos',createPedido);
router.put('/pedidos/:id',updatePedido);
router.delete('/pedidos/:id',deletePedido);
router.get('/pedidos/:id');

export default router;
