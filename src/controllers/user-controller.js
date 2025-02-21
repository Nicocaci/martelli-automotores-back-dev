import UsuarioService from '../service/user-service.js';

class UsuarioController {
  // Crear un nuevo usuario
  async crearUsuario(req, res) {
    try {
      const userData = req.body;
      const nuevoUsuario = await UsuarioService.crearUsuario(userData);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(req, res) {
    try {
      const usuarioId = req.params.id;
      const usuario = await UsuarioService.obtenerUsuarioPorId(usuarioId);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener todos los usuarios
  async obtenerTodosUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.obtenerTodosUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UsuarioController();
