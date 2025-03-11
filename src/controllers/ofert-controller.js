
import OfertasService from '../service/ofert-service.js';

class OfertasController {
  // Crear una nueva oferta
  async crearOferta(req, res) {
    try {
      const ofertaData = req.body;
      const nuevaOferta = await OfertasService.crearOferta(ofertaData);
      res.status(201).json(nuevaOferta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener una oferta por su ID
  async obtenerOfertaPorId(req, res) {
    try {
      const ofertaId = req.params.id;
      const oferta = await OfertasService.obtenerOfertaPorId(ofertaId);
      if (!oferta) {
        return res.status(404).json({ message: 'Oferta no encontrada' });
      }
      res.json(oferta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las ofertas activas
  async obtenerOfertas(req, res) {
    try {
      const ofertas = await OfertasService.obtenerOfertas();
      res.status(200).json(ofertas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async actualizarOferta(req,res){
    try {
      const ofertaId = req.params.id;
      const ofertaData = req.body;
      const ofertaActualizada = await OfertasService.actualizarOferta(ofertaId,ofertaData);
      res.status(200).json(ofertaActualizada);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async eliminarOferta(req,res){
    try {
      const ofertaId = req.params.id;
      const ofertaEliminada = await OfertasService.eliminarOferta(ofertaId);
      res.status(200).json(ofertaEliminada);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new OfertasController();
