import SubastaModel from '../dao/models/subastas-model.js';
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

  async finalizarSubasta(req, res) {
    const { id } = req.params;
    try {
        const subasta = await SubastaModel.findById(id);
        if (!subasta) {
            return res.status(404).json({ message: "Subasta no encontrada" });
        }

        subasta.finalizada = true;
        subasta.tiempoExtraRestante = null; // Resetear el tiempo extra
        await subasta.save();

        res.status(200).json({ message: "Subasta finalizada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al finalizar la subasta", error });
    }
}

  async activarTiempoExtra(req, res) {
    const { id } = req.params;
    try {
        const subasta = await SubastaModel.findById(id);
        if (!subasta) {
            return res.status(404).json({ message: "Subasta no encontrada" });
        }

        // Si el tiempo extra aún no está activo, lo iniciamos en 60 segundos
        if (subasta.tiempoExtraRestante === null) {
            subasta.tiempoExtraRestante = 60;
            await subasta.save();
        }

        res.status(200).json({ tiempoExtraRestante: subasta.tiempoExtraRestante });
    } catch (error) {
        res.status(500).json({ message: "Error al activar tiempo extra", error });
    }
}

async reducirTiempoExtra(req, res) {
  const { id } = req.params;
  try {
      const subasta = await SubastaModel.findById(id);
      if (!subasta) {
          return res.status(404).json({ message: "Subasta no encontrada" });
      }

      if (subasta.tiempoExtraRestante > 0) {
          subasta.tiempoExtraRestante -= 1;
          await subasta.save();
      } else if (subasta.tiempoExtraRestante === 0 && !subasta.finalizada) {
          subasta.finalizada = true; // ✅ Ahora se finaliza correctamente
          subasta.tiempoExtraRestante = null;
          await subasta.save();
      }

      res.status(200).json({ 
          tiempoExtraRestante: subasta.tiempoExtraRestante, 
          finalizada: subasta.finalizada 
      });
  } catch (error) {
      res.status(500).json({ message: "Error al reducir tiempo extra", error });
  }
}

  

}

export default new SubastaController();
