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
      const oferta = await OfertasModel.findById(ofertaId).populate('ofertas.usuario');
      return oferta;
    } catch (error) {
      throw new Error('Error al obtener oferta: ' + error.message);
    }
  }

  async obtenerOfertasActivas() {
    try {
      const ofertas = await OfertasModel.find({ status: 'active' }).populate('ofertas.usuario');
      return ofertas;
    } catch (error) {
      throw new Error('Error al obtener ofertas activas: ' + error.message);
    }
  }
}

export default new OfertasDAO();
