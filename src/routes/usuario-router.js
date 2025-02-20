import express from "express";
import UsuarioController from "../controllers/usuario-controller.js";

const router = express.Router();

router.get("/",UsuarioController.getUsuarios);
router.get("/:uid", UsuarioController.getUsuarioById);
router.post("/", UsuarioController.addUsuario);
router.put("/:uid", UsuarioController.updateUsuario);
router.delete("/:uid", UsuarioController.deleteUsuario);

export default router;