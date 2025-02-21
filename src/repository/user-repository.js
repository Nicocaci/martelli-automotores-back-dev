import UsuarioDAO from '../dao/user-dao.js';

class UsuarioRepository {
  // Crear un nuevo usuario
  async crearUsuario(userData) {
    try {
      const usuario = await UsuarioDAO.crearUsuario(userData);
      return usuario;
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(usuarioId) {
    try {
      const usuario = await UsuarioDAO.obtenerUsuarioPorId(usuarioId);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }

  // Obtener todos los usuarios
  async obtenerTodosUsuarios() {
    try {
      const usuarios = await UsuarioDAO.obtenerTodosUsuarios();
      return usuarios;
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }
}

export default new UsuarioRepository();
