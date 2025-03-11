import SubastaDAO from '../dao/sub-dao.js';

class SubastaRepository {
  // Crear una nueva subasta
  async crearSubasta(subastaData) {
    try {
      const nuevaSubasta = await SubastaDAO.crearSubasta(subastaData);
      return nuevaSubasta;
    } catch (error) {
      throw new Error('Error en el repositorio de subasta: ' + error.message);
    }
  }

  async obtenerSubastaPorId(subastaId) {
    try {
      const subasta = await SubastaDAO.obtenerSubastaPorId(subastaId); // Corrección aquí
      return subasta;
    } catch (error) {
      throw new Error('Error en el repositorio de subasta: ' + error.message);
    }
  }

  async obtenerSubastas() {
    try {
      const subastas = await SubastaDAO.obtenerSubastas(); // Corrección aquí
      return subastas;
    } catch (error) {
      throw new Error('Error en el repositorio de subasta: ' + error.message);
    }
  }

  async actualizarSubasta(subastaId, subastaData) { // Corrección aquí
    try {
      const subastaActualizada = await SubastaDAO.actualizarSubasta(subastaId, subastaData);
      return subastaActualizada;
    } catch (error) {
      throw new Error('Error en el repositorio de subasta: ' + error.message);
    }
  }

  async eliminarSubasta(subastaId) {
    try {
      const subastaEliminada = await SubastaDAO.eliminarSubasta(subastaId);
      return subastaEliminada;
    } catch (error) {
      throw new Error('Error en el repositorio de subasta: ' + error.message);
    }
  }
}

export default new SubastaRepository();
