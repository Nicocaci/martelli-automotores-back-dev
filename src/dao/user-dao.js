import UsuarioModel from './models/usuario-model.js';

class UsuarioDAO {
  async crearUsuario(userData) {
    try {
      const nuevoUsuario = new UsuarioModel(userData);
      await nuevoUsuario.save();
      return nuevoUsuario;
    } catch (error) {
      throw new Error('Error al crear usuario: ' + error.message);
    }
  }

  async obtenerUsuarioPorId(usuarioId) {
    try {
      const usuario = await UsuarioModel.findById(usuarioId).populate('ofertas');
      return usuario;
    } catch (error) {
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  async obtenerTodosUsuarios() {
    try {
      const usuarios = await UsuarioModel.find().populate('ofertas');
      return usuarios;
    } catch (error) {
      throw new Error('Error al obtener usuarios: ' + error.message);
    }
  }
}

export default new UsuarioDAO();
