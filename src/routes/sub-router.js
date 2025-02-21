
import express from "express";
import SubastaController from "../controllers/sub-controller.js";
const router = express.Router();




router.post('/', SubastaController.crearSubasta);
router.get('/:id', SubastaController.obtenerSubastaPorId);
router.get('/usuario/:usuarioId', SubastaController.obtenerSubastasPorUsuario);

export default router;