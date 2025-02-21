import SubastaRepository from '../repository/sub-repository.js';

class SubastaService {
  // Crear una nueva subasta
  async crearSubasta(subastaData) {
    try {
      // Puedes agregar más lógica de negocio si es necesario
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

  // Obtener subastas por usuario
  async obtenerSubastasPorUsuario(usuarioId) {
    try {
      const subastas = await SubastaRepository.obtenerSubastasPorUsuario(usuarioId);
      return subastas;
    } catch (error) {
      throw new Error('Error en el servicio de subastas: ' + error.message);
    }
  }
}

export default new SubastaService();
