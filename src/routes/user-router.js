import express from "express";
const router = express.Router();
import UsuarioController from "../controllers/user-controller.js";


router.post('/', UsuarioController.crearUsuario);
router.get('/:id', UsuarioController.obtenerUsuarioPorId);
router.get('/', UsuarioController.obtenerTodosUsuarios);

export default router;