import UsuarioDAO from '../dao/user-dao.js';

class UsuarioRepository {
  // Crear un nuevo usuario
  async crearUsuario(userData) {
    try {
      return await UsuarioDAO.crearUsuario(userData);
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

  async obtenerUsuarioPorNombre(nombre) {
    try {
      const usuario = await UsuarioDAO.obtenerUsuarioPorNombre(nombre);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }

  // Obtener todos los usuarios
  async obtenerUsuarios() { // Cambio para mayor coherencia
    try {
      const usuarios = await UsuarioDAO.obtenerTodosUsuarios();
      if (!usuarios.length) {
        throw new Error('No hay usuarios registrados');
      }
      return usuarios;
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }

  async actualizarUsuario(usuarioId, userData) {
    try {
      return await UsuarioDAO.actualizarUsuario(usuarioId, userData); // Eliminado `{ new: true }`
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }

  async eliminarUsuario(usuarioId) {
    try {
      return await UsuarioDAO.eliminarUsuario(usuarioId);
    } catch (error) {
      throw new Error('Error en el repositorio de usuario: ' + error.message);
    }
  }
  
}

export default new UsuarioRepository();
