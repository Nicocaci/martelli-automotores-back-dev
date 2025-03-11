import express from "express";
const router = express.Router();
import OfertasController from "../controllers/ofert-controller.js";


router.post('/', OfertasController.crearOferta);
router.get('/:id', OfertasController.obtenerOfertaPorId);
router.get('/ofertas', OfertasController.obtenerOfertas);
router.put('/:id', OfertasController.actualizarOferta);
router.delete('/:id', OfertasController.eliminarOferta);

export default router;