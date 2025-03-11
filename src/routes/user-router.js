import express from "express";
const router = express.Router();
import UsuarioController from "../controllers/user-controller.js";


router.post('/', UsuarioController.crearUsuario);
router.post('/login', UsuarioController.loginUsuario);
router.get('/:id', UsuarioController.obtenerUsuarioPorId);
router.get('/usuarios', UsuarioController.obtenerUsuarios);
router.put('/:id', UsuarioController.actualizarUsuario);
router.delete('/:id',UsuarioController.eliminarUsuario);

export default router;