import OfertasModel from './models/ofertas-model.js';

class OfertasDAO {
  async crearOferta(ofertaData) {
    try {
      const nuevaOferta = new OfertasModel(ofertaData);
      await nuevaOferta.save();
      return nuevaOferta;
    } catch (error) {
      throw new Error('Error al crear oferta: ' + error.message);
    }
  }

  async obtenerOfertaPorId(ofertaId) {
    try {
      const oferta = await OfertasModel.findById(ofertaId).populate('usuarioId subastaId'); // Corrección aquí
      if (!oferta) throw new Error("Oferta no encontrada");
      return oferta;
    } catch (error) {
      throw new Error('Error al obtener oferta: ' + error.message);
    }
  }

  async obtenerOfertas() {
    try {
      const ofertas = await OfertasModel.find().populate('usuarioId subastaId'); // Corrección aquí
      return ofertas;
    } catch (error) {
      throw new Error('Error al obtener ofertas: ' + error.message);
    }
  }

  async actualizarOferta(ofertaId, ofertaData) {
    try {
      const ofertaActualizada = await OfertasModel.findByIdAndUpdate(ofertaId, ofertaData, { new: true });
      if (!ofertaActualizada) throw new Error("Oferta no encontrada");
      return ofertaActualizada;
    } catch (error) {
      throw new Error('Error al actualizar oferta: ' + error.message);
    }
  }

  async eliminarOferta(ofertaId) {
    try {
      const ofertaEliminada = await OfertasModel.findByIdAndDelete(ofertaId);
      if (!ofertaEliminada) throw new Error("Oferta no encontrada");
      return ofertaEliminada;
    } catch (error) {
      throw new Error('Error al eliminar oferta: ' + error.message);
    }
  }
}

export default new OfertasDAO();
