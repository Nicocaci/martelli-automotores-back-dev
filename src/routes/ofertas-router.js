
import OfertasController from "../controllers/oferta-controller.js";
import express from "express";

const router = express.Router();

router.post("/", OfertasController.addOferta);

router.get("/", OfertasController.getOfertas);

router.get("/:oid",OfertasController.getOfertaById);

router.put("/:oid",OfertasController.updateOferta);

router.delete("/:oid",OfertasController.deleteOferta);

export default router;