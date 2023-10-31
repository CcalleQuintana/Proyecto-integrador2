import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuarios, updateUsuario } from '../controllers/usuario.controllers.js';
const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id',updateUsuario);
router.delete('/usuarios/:id',deleteUsuario);
router.get('/usuarios/:id');

export default router;