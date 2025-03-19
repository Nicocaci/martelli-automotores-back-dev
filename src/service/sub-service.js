import SubastaRepository from '../repository/sub-repository.js';
import SubastaModel from '../dao/models/subastas-model.js';
import UsuarioModel from '../dao/models/usuario-model.js';

class SubastaService {
  // Crear una nueva subasta
  async crearSubasta(subastaData) {
    try {
      // Lógica de negocio aquí si es necesario
      const subasta = await SubastaRepository.crearSubasta(subastaData);
      return subasta;
    } catch (error) {
      throw new Error('Error en el servicio de subastas: ' + error.message);
    }
  }

  // Obtener una subasta por su ID
  async obtenerSubastaPorId(subastaId) {
    try {
      const subasta = await SubastaRepository.obtenerSubastaPorId(subastaId);
      return subasta;
    } catch (error) {
      throw new Error('Error en el servicio de subastas: ' + error.message);
    }
  }

  // Obtener todas las subastas
  async obtenerSubastas() {
    try {
      const subastas = await SubastaRepository.obtenerSubastas();
      return subastas;
    } catch (error) {
      throw new Error('Error en el servicio de subastas: ' + error.message);
    }
  }

  // Actualizar una subasta
  async actualizarSubasta(subastaId, subastaData) {
    try {
      const subastaActualizada = await SubastaRepository.actualizarSubasta(subastaId, subastaData);
      return subastaActualizada;
    } catch (error) {
      throw new Error('Error en el servicio de subastas: ' + error.message); // Corregido
    }
  }

  // Eliminar una subasta
  async eliminarSubasta(subastaId) {
    try {
      // 1. Buscar la subasta antes de eliminarla
      const subasta = await SubastaModel.findById(subastaId);
      if (!subasta) {
        return null; // Si no existe, retorna null
      }

      // 2. Eliminar la subasta
      await SubastaModel.findByIdAndDelete(subastaId);

      // 3. Eliminar la referencia de la subasta en "ofertasHechas" de los usuarios
      await UsuarioModel.updateMany(
        { "ofertasHechas.subasta": subastaId },  // Busca usuarios que hicieron ofertas en esta subasta
        { $pull: { ofertasHechas: { subasta: subastaId } } }  // Elimina la subasta de la lista
      );

      return subasta;  // Retorna la subasta eliminada
    } catch (error) {
      throw new Error('Error al eliminar subasta y limpiar referencias: ' + error.message);
    }
  }

  // SubastaService.js

  // SubastaService.js
  async agregarOferta(subastaId, ofertaData) {
    try {
      const { usuario, monto } = ofertaData;

      // Verifica que el usuario exista en la base de datos antes de agregar la oferta
      const usuarioExistente = await UsuarioModel.findById(usuario);
      if (!usuarioExistente) {
        throw new Error('El usuario no existe');
      }

      const subasta = await SubastaModel.findById(subastaId);
      if (!subasta) {
        throw new Error('Subasta no encontrada');
      }

      // Si el usuario existe, agregamos la oferta
      subasta.ofertadores.push({ usuario: usuario, monto });

      await subasta.save();

      usuarioExistente.ofertasHechas.push({ subasta: subastaId, monto });
      await usuarioExistente.save();
      return subasta;
    } catch (error) {
      throw new Error('Error al agregar la oferta: ' + error.message);
    }
  }




}

export default new SubastaService();
