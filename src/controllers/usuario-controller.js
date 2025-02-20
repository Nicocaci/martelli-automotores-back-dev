import UsuarioService from "../service/usuario-service.js";

class UsuarioController {
  // Obtener todos los usuarios
  async getUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.getUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener usuarios: ${error.message}` });
    }
  }

  // Obtener un usuario por ID
  async getUsuarioById(req, res) {
    const { id } = req.params;
    try {
      const usuario = await UsuarioService.getUsuariosById(id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener el usuario: ${error.message}` });
    }
  }

  // Crear un nuevo usuario
  async addUsuario(req, res) {
    const userData = req.body;
    try {
      const newUsuario = await UsuarioService.addUsuario(userData);
      res.status(201).json(newUsuario);
    } catch (error) {
      res.status(500).json({ message: `Error al crear el usuario: ${error.message}` });
    }
  }

  // Actualizar un usuario por ID
  async updateUsuario(req, res) {
    const { id } = req.params;
    const userData = req.body;
    try {
      const updatedUsuario = await UsuarioService.updateUsuario(id, userData);
      if (!updatedUsuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json(updatedUsuario);
    } catch (error) {
      res.status(500).json({ message: `Error al actualizar el usuario: ${error.message}` });
    }
  }

  // Eliminar un usuario por ID
  async deleteUsuario(req, res) {
    const { id } = req.params;
    try {
      const deletedUsuario = await UsuarioService.deleteUsuario(id);
      if (!deletedUsuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "Usuario eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ message: `Error al eliminar el usuario: ${error.message}` });
    }
  }
}

export default new UsuarioController();
