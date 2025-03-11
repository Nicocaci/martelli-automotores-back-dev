import OfertasDAO from '../dao/ofert-dao.js';

class OfertasRepository {
  // Crear una nueva oferta
  async crearOferta(ofertaData) {
    try {
      return await OfertasDAO.crearOferta(ofertaData);
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

  // Obtener todas las ofertas
  async obtenerOfertas() {
    try {
      const ofertas = await OfertasDAO.obtenerOfertas();
      if (!ofertas.length) {
        throw new Error('No hay ofertas registradas');
      }
      return ofertas;
    } catch (error) {
      throw new Error('Error en el repositorio de ofertas: ' + error.message);
    }
  }

  // Actualizar una oferta por ID
  async actualizarOferta(ofertaId, ofertaData) { // Corregido nombre en singular
    try {
      return await OfertasDAO.actualizarOferta(ofertaId, ofertaData); 
    } catch (error) {
      throw new Error('Error en el repositorio de ofertas: ' + error.message);
    }
  }

  // Eliminar una oferta por ID
  async eliminarOferta(ofertaId) {
    try {
      return await OfertasDAO.eliminarOferta(ofertaId);
    } catch (error) {
      throw new Error('Error en el repositorio de ofertas: ' + error.message);
    }
  }
}

export default new OfertasRepository();
