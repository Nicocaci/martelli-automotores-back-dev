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
      const usuario = await UsuarioModel.findById(usuarioId).populate('ofertasHechas.subasta');
  
      if (!usuario) throw new Error("Usuario no encontrado");
  
      console.log("Usuario encontrado:", JSON.stringify(usuario, null, 2)); // 🛑 VERIFICAR QUÉ TRAE LA DB
  
      return usuario;
    } catch (error) {
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  async obtenerTodosUsuarios() {
    try {
      const usuarios = await UsuarioModel.find(); // Corrección aquí
      return usuarios;
    } catch (error) {
      throw new Error('Error al obtener usuarios: ' + error.message);
    }
  }

  async actualizarUsuario(usuarioId, userData) {
    try {
      const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(usuarioId, userData, { new: true });
      if (!usuarioActualizado) throw new Error("Usuario no encontrado");
      return usuarioActualizado;
    } catch (error) {
      throw new Error('Error al actualizar usuario: ' + error.message);
    }
  }

  async eliminarUsuario(usuarioId) {
    try {
      const usuarioEliminado = await UsuarioModel.findByIdAndDelete(usuarioId);
      if (!usuarioEliminado) throw new Error("Usuario no encontrado");
      return usuarioEliminado;
    } catch (error) {
      throw new Error('Error al eliminar usuario: ' + error.message);
    }
  }
  async obtenerUsuarioPorNombre(agencia){
    try {
      const usuario = await UsuarioModel.findOne({ agencia }).populate('ofertasHechas.subasta'); // Corrección aquí
      if (!usuario) throw new Error("Usuario no encontrado");
      return usuario;
    } catch (error) {
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  async obtenerUsuarioPorEmail(email){
    try {
      const usuario = await UsuarioModel.findOne({email}).populate("ofertasHechas.subasta");
      if(!usuario) throw new Error("Usuario no encontrado");
      return usuario;
    } catch (error) {
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }
  
}

export default new UsuarioDAO();
