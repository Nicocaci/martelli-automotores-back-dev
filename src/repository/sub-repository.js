import SubastaDAO from '../dao/sub-dao.js';

class SubastaRepository {
  // Crear una nueva subasta
  async crearSubasta(subastaData) {
    try {
      const subasta = await SubastaDAO.crearSubasta(subastaData);
      return subasta;
    } catch (error) {
      throw new Error('Error en el repositorio de subastas: ' + error.message);
    }
  }

  // Obtener una subasta por su ID
  async obtenerSubastaPorId(subastaId) {
    try {
      const subasta = await SubastaDAO.obtenerSubastaPorId(subastaId);
      if (!subasta) {
        throw new Error('Subasta no encontrada');
      }
      return subasta;
    } catch (error) {
      throw new Error('Error en el repositorio de subastas: ' + error.message);
    }
  }

  // Obtener subastas de un usuario
  async obtenerSubastasPorUsuario(usuarioId) {
    try {
      const subastas = await SubastaDAO.obtenerSubastasPorUsuario(usuarioId);
      return subastas;
    } catch (error) {
      throw new Error('Error en el repositorio de subastas: ' + error.message);
    }
  }
}

export default new SubastaRepository();
