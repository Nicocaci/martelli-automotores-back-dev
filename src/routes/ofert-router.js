import express from "express";
const router = express.Router();
import OfertasController from "../controllers/ofert-controller.js";


router.post('/', OfertasController.crearOferta);
router.get('/:id', OfertasController.obtenerOfertaPorId);
router.get('/activas', OfertasController.obtenerOfertasActivas);

export default router;