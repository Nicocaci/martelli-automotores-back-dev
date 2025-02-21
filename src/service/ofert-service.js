import OfertasRepository from '../repository/ofert-repository.js';

class OfertasService {
  // Crear una nueva oferta
  async crearOferta(ofertaData) {
    try {
      // Aquí puedes agregar lógica de negocio antes de crear la oferta
      const oferta = await OfertasRepository.crearOferta(ofertaData);
      return oferta;
    } catch (error) {
      throw new Error('Error en el servicio de ofertas: ' + error.message);
    }
  }

  // Obtener una oferta por su ID
  async obtenerOfertaPorId(ofertaId) {
    try {
      const oferta = await OfertasRepository.obtenerOfertaPorId(ofertaId);
      return oferta;
    } catch (error) {
      throw new Error('Error en el servicio de ofertas: ' + error.message);
    }
  }

  // Obtener todas las ofertas activas
  async obtenerOfertasActivas() {
    try {
      const ofertas = await OfertasRepository.obtenerOfertasActivas();
      return ofertas;
    } catch (error) {
      throw new Error('Error en el servicio de ofertas: ' + error.message);
    }
  }
}

export default new OfertasService();
