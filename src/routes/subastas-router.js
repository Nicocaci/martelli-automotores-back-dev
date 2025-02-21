import express from "express";
import SubastaController from "../controllers/subasta-controller.js"

const router = express.Router();

router.post("/", SubastaController.crearSubasta);
router.get("/", SubastaController.obtenerSubasta);
router.get("/:sid", SubastaController.obtenerSubastasPorId);
router.put("/:sid", SubastaController.actualizarSubasta);
router.delete("/:sid", SubastaController.eliminarSubasta);

export default router;