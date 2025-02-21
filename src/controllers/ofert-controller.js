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
  async obtenerOfertasActivas(req, res) {
    try {
      const ofertas = await OfertasService.obtenerOfertasActivas();
      res.json(ofertas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new OfertasController();
