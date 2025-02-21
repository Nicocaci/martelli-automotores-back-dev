import SubastaService from '../service/sub-service.js';

class SubastaController {
  // Crear una nueva subasta
  async crearSubasta(req, res) {
    try {
      const subastaData = req.body;
      const nuevaSubasta = await SubastaService.crearSubasta(subastaData);
      res.status(201).json(nuevaSubasta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener una subasta por su ID
  async obtenerSubastaPorId(req, res) {
    try {
      const subastaId = req.params.id;
      const subasta = await SubastaService.obtenerSubastaPorId(subastaId);
      if (!subasta) {
        return res.status(404).json({ message: 'Subasta no encontrada' });
      }
      res.json(subasta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener subastas de un usuario
  async obtenerSubastasPorUsuario(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const subastas = await SubastaService.obtenerSubastasPorUsuario(usuarioId);
      if (!subastas || subastas.length === 0) {
        return res.status(404).json({ message: 'No se encontraron subastas para este usuario' });
      }
      res.json(subastas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new SubastaController();
