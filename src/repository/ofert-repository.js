import OfertasDAO from '../dao/ofert-dao.js';

class OfertasRepository {
  // Crear una nueva oferta
  async crearOferta(ofertaData) {
    try {
      const oferta = await OfertasDAO.crearOferta(ofertaData);
      return oferta;
    } catch (error) {
      throw new Error('Error en el repositorio de ofertas: ' + error.message);
    }
  }

  // Obtener una oferta por su ID
  async obtenerOfertaPorId(ofertaId) {
    try {
      const oferta = await OfertasDAO.obtenerOfertaPorId(ofertaId);
      if (!oferta) {
        throw new Error('Oferta no encontrada');
      }
      return oferta;
    } catch (error) {
      throw new Error('Error en el repositorio de ofertas: ' + error.message);
    }
  }

  // Obtener todas las ofertas activas
  async obtenerOfertasActivas() {
    try {
      const ofertas = await OfertasDAO.obtenerOfertasActivas();
      return ofertas;
    } catch (error) {
      throw new Error('Error en el repositorio de ofertas: ' + error.message);
    }
  }
}

export default new OfertasRepository();
