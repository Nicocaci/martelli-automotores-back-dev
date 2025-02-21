import UsuarioRepository from '../repository/user-repository.js';

class UsuarioService {
  // Crear un nuevo usuario
  async crearUsuario(userData) {
    try {
      // Aquí puedes agregar más lógica de negocio antes de crear al usuario
      const usuario = await UsuarioRepository.crearUsuario(userData);
      return usuario;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(usuarioId) {
    try {
      // Se puede agregar más lógica de negocio si es necesario
      const usuario = await UsuarioRepository.obtenerUsuarioPorId(usuarioId);
      return usuario;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }

  // Obtener todos los usuarios
  async obtenerTodosUsuarios() {
    try {
      const usuarios = await UsuarioRepository.obtenerTodosUsuarios();
      return usuarios;
    } catch (error) {
      throw new Error('Error en el servicio de usuario: ' + error.message);
    }
  }
}

export default new UsuarioService();
