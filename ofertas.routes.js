import { Router } from "express";
import {createOferta,deleteOferta,getOfertas, updateOferta} from '../controllers/ofertas.controllers.js'

const router = Router();

router.get('/ofertas',getOfertas);
router.post('/ofertas',createOferta);
router.put('/ofertas/:id',updateOferta);
router.delete('/ofertas/:id',deleteOferta);
router.get('/ofertas/:id');

export default router;