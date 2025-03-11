import SubastaService from '../service/sub-service.js';

class SubastaController {
  // Crear una nueva subasta
  async crearSubasta(req, res) {
    try {
      const subastaData = req.body;
      const nuevaSubasta = await SubastaService.crearSubasta(subastaData);
      res.status(201).send(nuevaSubasta);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear subasta: ' + error.message });
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
      res.status(500).json({ message: 'Error al obtener subasta: ' + error.message });
    }
  }

  // Obtener todas las subastas
  async obtenerSubastas(req, res) {
    try {
      const subasta = await SubastaService.obtenerSubastas();
      res.status(200).json(subasta);  // Cambiado a 200 OK
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener subastas: ' + error.message });
    }
  }

  // Actualizar una subasta por ID
  async actualizarSubasta(req, res) {
    try {
      const subastaId = req.params.id;
      const subastaData = req.body;
      const subastaActualizada = await SubastaService.actualizarSubasta(subastaId, subastaData);
      if (!subastaActualizada) {
        return res.status(404).json({ message: 'Subasta no encontrada para actualizar' });
      }
      res.status(200).json(subastaActualizada);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar subasta: ' + error.message });
    }
  }

  // Eliminar una subasta por ID
  async eliminarSubasta(req, res) {
    try {
      const subastaId = req.params.id;
      const subastaEliminada = await SubastaService.eliminarSubasta(subastaId);
      if (!subastaEliminada) {
        return res.status(404).json({ message: 'Subasta no encontrada para eliminar' });
      }
      res.status(200).json({message: 'Subasta eliminada correctamente '});
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar subasta: ' + error.message });
    }
  }
  // SubastaController.js

  async agregarOferta(req, res) {
    try {
      const subastaId = req.params.id;
      const ofertaData = req.body; 
      
      // Lógica para agregar la oferta
      const subasta = await SubastaService.agregarOferta(subastaId, ofertaData);
      
      res.status(200).json(subasta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  

}

export default new SubastaController();
