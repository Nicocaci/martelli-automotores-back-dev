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
  async obtenerOfertas() {
    try {
      const ofertas = await OfertasRepository.obtenerOfertas();
      return ofertas;
    } catch (error) {
      throw new Error('Error en el servicio de ofertas: ' + error.message);
    }
  }
    // Actualizar una oferta por ID
    async actualizarOferta(ofertaId, ofertaData) { // Corregido nombre en singular
      try {
        return await OfertasRepository.actualizarOferta(ofertaId, ofertaData); 
      } catch (error) {
        throw new Error('Error en el servicio de ofertas: ' + error.message);
      }
    }
  
    // Eliminar una oferta por ID
    async eliminarOferta(ofertaId) {
      try {
        return await OfertasRepository.eliminarOferta(ofertaId);
      } catch (error) {
        throw new Error('Error en el servicio de ofertas: ' + error.message);
      }
    }
}

export default new OfertasService();
