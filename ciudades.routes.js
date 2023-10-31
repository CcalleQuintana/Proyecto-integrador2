import { Router } from "express";
import { createCiudad, deleteCiudad, getCiudades, updateCiudad } from '../controllers/ciudades.controllers.js';
const router = Router();

router.get('/ciudades', getCiudades);
router.post('/ciudades', createCiudad);
router.put('/ciudades/:id',updateCiudad);
router.delete('/ciudades/:id',deleteCiudad);
router.get('/ciudades/:id');

export default router;