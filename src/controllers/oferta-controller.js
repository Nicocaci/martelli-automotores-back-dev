import OfertasService from "../service/ofertas-service.js";

class OfertasController {
  // Crear una nueva oferta
  async addOferta(req, res) {
    try {
      const dataOferta = req.body; // Datos enviados en la solicitud
      const nuevaOferta = await OfertasService.addOferta(dataOferta);
      res.status(201).json({
        message: "Oferta creada exitosamente",
        data: nuevaOferta,
      });
    } catch (error) {
      console.error("Error en addOferta:", error);
      res.status(500).json({
        message: "Error al crear la oferta",
        error: error.message,
      });
    }
  }

  // Obtener todas las ofertas
  async getOfertas(req, res) {
    try {
      const ofertas = await OfertasService.getOfertas();
      res.status(200).json({
        message: "Ofertas obtenidas exitosamente",
        data: ofertas,
      });
    } catch (error) {
      console.error("Error en getOfertas:", error);
      res.status(500).json({
        message: "Error al obtener las ofertas",
        error: error.message,
      });
    }
  }

  // Obtener una oferta por ID
  async getOfertaById(req, res) {
    try {
      const { id } = req.params; // ID de la oferta en los parámetros de la URL
      const oferta = await OfertasService.getOfertasById(id);
      if (!oferta) {
        return res.status(404).json({
          message: "Oferta no encontrada",
        });
      }
      res.status(200).json({
        message: "Oferta obtenida exitosamente",
        data: oferta,
      });
    } catch (error) {
      console.error("Error en getOfertaById:", error);
      res.status(500).json({
        message: "Error al obtener la oferta",
        error: error.message,
      });
    }
  }

  // Actualizar una oferta
  async updateOferta(req, res) {
    try {
      const { id } = req.params; // ID de la oferta
      const dataOferta = req.body; // Datos de la oferta enviados en la solicitud
      const ofertaActualizada = await OfertasService.updateOferta(dataOferta, id);
      if (!ofertaActualizada) {
        return res.status(404).json({
          message: "Oferta no encontrada para actualizar",
        });
      }
      res.status(200).json({
        message: "Oferta actualizada exitosamente",
        data: ofertaActualizada,
      });
    } catch (error) {
      console.error("Error en updateOferta:", error);
      res.status(500).json({
        message: "Error al actualizar la oferta",
        error: error.message,
      });
    }
  }

  // Eliminar una oferta
  async deleteOferta(req, res) {
    try {
      const { id } = req.params; // ID de la oferta
      const ofertaEliminada = await OfertasService.deleteOferta(id);
      if (!ofertaEliminada) {
        return res.status(404).json({
          message: "Oferta no encontrada para eliminar",
        });
      }
      res.status(200).json({
        message: "Oferta eliminada exitosamente",
        data: ofertaEliminada,
      });
    } catch (error) {
      console.error("Error en deleteOferta:", error);
      res.status(500).json({
        message: "Error al eliminar la oferta",
        error: error.message,
      });
    }
  }
}

export default new OfertasController();
