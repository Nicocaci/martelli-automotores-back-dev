import UsuarioService from '../service/user-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UsuarioController {
  // Crear un nuevo usuario
  async crearUsuario(req, res) {
    try {
      const userData = req.body;
      const nuevoUsuario = await UsuarioService.crearUsuario(userData);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear usuario: ' + error.message });
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
      res.status(500).json({ message: 'Error al obtener usuario: ' + error.message });
    }
  }

  // Obtener todos los usuarios
  async obtenerUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.obtenerUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios: ' + error.message });
    }
  }

  // Actualizar un usuario por ID
  async actualizarUsuario(req, res) {
    try {
      const usuarioId = req.params.id;
      const userData = req.body;
      const usuarioActualizado = await UsuarioService.actualizarUsuario(usuarioId, userData);
      if (!usuarioActualizado) {
        return res.status(404).json({ message: 'Usuario no encontrado para actualizar' });
      }
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar usuario: ' + error.message });
    }
  }

  // Eliminar un usuario por ID
  async eliminarUsuario(req, res) {
    try {
      const usuarioId = req.params.id;
      const usuarioEliminado = await UsuarioService.eliminarUsuario(usuarioId);
      if (!usuarioEliminado) {
        return res.status(404).json({ message: 'Usuario no encontrado para eliminar' });
      }
      res.status(204).json({message: 'Usuario eliminado correctamente'});  // Usando 204 No Content
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar usuario: ' + error.message });
    }
  }

  async loginUsuario (req,res){
    try {
      const {nombre, password} = req.body;

      const usuario = await UsuarioService.obtenerUsuarioPorNombre(nombre);
      if(!usuario){
        return res.status(404).json({message: "Usuario no encontrado"})
      }

      //Verificamos password

      const esValida = await bcrypt.compare(password,usuario.password);
      if(!esValida){
        return res.status(401).json({message: "Contraseña incorrecta"});
      }

      //Generamos Token

      const token = jwt.sign({id:usuario.id, nombre: usuario.nombre}, 'martelli-automotores' ,{ expiresIn: '1h'});

      res.json({token,usuario}); 

    } catch (error) {
      res.status(500).json({message:'Error de Login'+ error.message})
    }
  }
}

export default new UsuarioController();
