import SubastaService from "../service/subasta-service.js";

class SubastaController {
  // Crear una nueva subasta
  async crearSubasta(req, res) {
    try {
      const data = req.body;
      const subasta = await SubastaService.crearSubasta(data);
      res.status(201).json({ message: "Subasta creada exitosamente", subasta });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener todas las subastas con filtros opcionales
  async obtenerSubasta(req, res) {
    try {
      const filtros = req.query;  // Usar query params
      const subastas = await SubastaService.obtenerSubasta(filtros);
      res.status(200).json(subastas);  // Usar status 200 para obtener datos
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener una subasta por ID
  async obtenerSubastasPorId(req, res) {
    try {
      const { subId } = req.params;  // Desestructurar correctamente el ID de los params
      const subastaId = await SubastaService.obtenerSubastaPorId(subId);
      if (!subastaId) {
        return res.status(404).json({ message: "Subasta no encontrada" });
      }
      res.status(200).json(subastaId);  // Cambié el status a 200 para obtener datos
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Actualizar una subasta
  async actualizarSubasta(req, res) {
    try {
      const { subId } = req.params;  // Desestructurar correctamente el ID de los params
      const data = req.body;
      const subastaActualizada = await SubastaService.actualizarSubasta(subId, data);
      if (!subastaActualizada) {
        return res.status(404).json({ message: "Subasta no encontrada" });
      }
      res.status(200).json({
        message: "Subasta actualizada correctamente",
        subastaActualizada,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Eliminar una subasta
  async eliminarSubasta(req, res) {
    try {
      const { subId } = req.params;  // Desestructurar correctamente el ID de los params
      const subastaEliminada = await SubastaService.eliminarSubasta(subId);
      if (!subastaEliminada) {
        return res.status(404).json({ message: "Subasta no encontrada" });
      }
      res.status(200).json({
        message: "Subasta eliminada correctamente",
        subastaEliminada,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new SubastaController();
