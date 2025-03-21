import SubastaService from '../service/sub-service.js';

class SubastaController {
  // 🔹 Crear una nueva subasta
  async crearSubasta(req, res) {
    try {
      const nuevaSubasta = await SubastaService.crearSubasta(req.body);
      res.status(201).json(nuevaSubasta);
    } catch (error) {
      res.status(500).json({ message: `Error al crear subasta: ${error.message}` });
    }
  }

  // 🔹 Obtener una subasta por su ID
  async obtenerSubastaPorId(req, res) {
    try {
      const subasta = await SubastaService.obtenerSubastaPorId(req.params.id);
      if (!subasta) return res.status(404).json({ message: 'Subasta no encontrada' });
      res.json(subasta);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener subasta: ${error.message}` });
    }
  }

  // 🔹 Obtener todas las subastas
  async obtenerSubastas(req, res) {
    try {
      const subastas = await SubastaService.obtenerSubastas();
      res.status(200).json(subastas);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener subastas: ${error.message}` });
    }
  }

  // 🔹 Actualizar una subasta por ID
  async actualizarSubasta(req, res) {
    try {
      const subastaActualizada = await SubastaService.actualizarSubasta(req.params.id, req.body);
      if (!subastaActualizada) return res.status(404).json({ message: 'Subasta no encontrada' });
      res.status(200).json(subastaActualizada);
    } catch (error) {
      res.status(500).json({ message: `Error al actualizar subasta: ${error.message}` });
    }
  }

  // 🔹 Eliminar una subasta por ID
  async eliminarSubasta(req, res) {
    try {
      const subastaEliminada = await SubastaService.eliminarSubasta(req.params.id);
      if (!subastaEliminada) return res.status(404).json({ message: 'Subasta no encontrada' });
      res.status(200).json({ message: 'Subasta eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ message: `Error al eliminar subasta: ${error.message}` });
    }
  }

  // 🔹 Agregar una oferta
  async agregarOferta(req, res) {
    try {
      const subasta = await SubastaService.agregarOferta(req.params.id, req.body);
      res.status(200).json(subasta);
    } catch (error) {
      res.status(500).json({ message: `Error al agregar oferta: ${error.message}` });
    }
  }

  // 🔹 Finalizar una subasta
  async finalizarSubasta(req, res) {
    try {
      const subasta = await SubastaService.finalizarSubasta(req.params.id);
      if (!subasta) return res.status(404).json({ message: "Subasta no encontrada" });
      res.status(200).json({ message: "Subasta finalizada correctamente" });
    } catch (error) {
      res.status(500).json({ message: `Error al finalizar la subasta: ${error.message}` });
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
