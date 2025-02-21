import SubastaModel from './models/subastas-model.js';

class SubastaDAO {
  async crearSubasta(subastaData) {
    try {
      const nuevaSubasta = new SubastaModel(subastaData);
      await nuevaSubasta.save();
      return nuevaSubasta;
    } catch (error) {
      throw new Error('Error al crear subasta: ' + error.message);
    }
  }

  async obtenerSubastaPorId(subastaId) {
    try {
      const subasta = await SubastaModel.findById(subastaId)
        .populate('ofertaId')
        .populate('userId');
      return subasta;
    } catch (error) {
      throw new Error('Error al obtener subasta: ' + error.message);
    }
  }

  async obtenerSubastasPorUsuario(usuarioId) {
    try {
      const subastas = await SubastaModel.find({ userId: usuarioId })
        .populate('ofertaId')
        .populate('userId');
      return subastas;
    } catch (error) {
      throw new Error('Error al obtener subastas por usuario: ' + error.message);
    }
  }
}

export default new SubastaDAO();
