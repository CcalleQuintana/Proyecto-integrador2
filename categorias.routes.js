import { Router } from "express";
import { createCategoria, getCategorias,updateCategoria,deleteCategoria } from "../controllers/categorias.controllers.js";
const router = Router();

router.get('/categorias', getCategorias);
router.post('/categorias', createCategoria);

router.put('/categorias/:id',updateCategoria);
router.delete('/categorias/:id',deleteCategoria);

export default router;