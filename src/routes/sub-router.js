
import express from "express";
import SubastaController from "../controllers/sub-controller.js";
const router = express.Router();




router.post('/', SubastaController.crearSubasta);
router.get('/:id', SubastaController.obtenerSubastaPorId);
router.get('/', SubastaController.obtenerSubastas);
router.put('/:id', SubastaController.actualizarSubasta);
router.delete('/:id',SubastaController.eliminarSubasta);
// subastaRouter.js
router.put('/:id/ofertadores', SubastaController.agregarOferta);


export default router;