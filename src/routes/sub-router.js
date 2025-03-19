
import express from "express";
import SubastaController from "../controllers/sub-controller.js";
const router = express.Router();
import verificarToken from "../utils/jsonwebtoken.js"





router.post('/' , SubastaController.crearSubasta); 
router.get('/:id', SubastaController.obtenerSubastaPorId);
router.get('/', SubastaController.obtenerSubastas);
router.put('/:id', SubastaController.actualizarSubasta);
router.delete('/:id',SubastaController.eliminarSubasta);
// subastaRouter.js
router.put('/:id/ofertadores', SubastaController.agregarOferta);
router.put('/finalizar/:id', SubastaController.finalizarSubasta);
router.put('/:id/activar-tiempo-extra', SubastaController.activarTiempoExtra);
router.put('/:id/reducir-tiempo-extra', SubastaController.reducirTiempoExtra);

export default router;