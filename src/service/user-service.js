import UsuarioRepository from '../repository/user-repository.js';

class UsuarioService {
  // Crear un nuevo usuario
  async crearUsuario(userData) {
    try {
      return await UsuarioRepository.crearUsuario(userData);
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(usuarioId) {
    try {
      const usuario = await UsuarioRepository.obtenerUsuarioPorId(usuarioId);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }
  async obtenerUsuarioPorNombre(nombre) {
    try {
      const usuario = await UsuarioRepository.obtenerUsuarioPorNombre(nombre);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }

  async obtenerUsuarioPorEmail(email) {
    try {
      const usuario = await UsuarioRepository.obtenerUsuarioPorEmail({email});
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }
  // Obtener todos los usuarios
  async obtenerUsuarios() { 
    try {
      const usuarios = await UsuarioRepository.obtenerUsuarios();  // Corregido para mayor coherencia
      if (!usuarios.length) {
        throw new Error('No hay usuarios registrados');
      }
      return usuarios;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }

  // Actualizar un usuario
  async actualizarUsuario(usuarioId, userData) {
    try {
      return await UsuarioRepository.actualizarUsuario(usuarioId, userData); 
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }

  // Eliminar un usuario
  async eliminarUsuario(usuarioId) {
    try {
      return await UsuarioRepository.eliminarUsuario(usuarioId);
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }
}

export default new UsuarioService();
