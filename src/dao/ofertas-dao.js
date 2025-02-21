import ofertasModel from "./models/ofertas-model.js";

class OfertasDAO {
  async nuevaOferta(dataOferta) {
    try {
        const oferta = await ofertasModel.create(dataOferta);
        return oferta
    } catch (error) {
        console.error("Error creando una oferta:", error);
        throw error;
    }
  }
  async getOfertas() {
    try {
        const ofertas = await ofertasModel.find().populate("ofertas");
        return ofertas;
    } catch (error) {
        console.error("Error al obter ofertas",error);
        throw error;
    }
  }
  async getOfertasById(ofertaId) {
    try {
        const ofertasId = await ofertasModel.findById(ofertaId).populate("ofertas");
        return ofertasId;
    } catch (error) {
        console.error("Error al obter oferta con ese id",error);
        throw error;
    }
  }
  async actualizarOferta(dataOferta,ofertaId) {
    try {
        const updateOferta = await ofertasModel.findByIdAndUpdate(dataOferta,ofertaId,{new:true});
        if (!ofertaActualizada) {
            throw new Error("Oferta no encontrada para actualizar");
          }
          return updateOferta;
    } catch (error) {
        console.error("Error actualizando la oferta:", error);
        throw error;
    }
  }
  async eliminarOferta(ofertaId) {
    try {
        const deleteOferta = await ofertasModel.findByIdAndDelete(ofertaId);
        if (!ofertaEliminada) {
            throw new Error("Oferta no encontrada para eliminar");
          };
          return deleteOferta;
    } catch (error) {
        console.error("Error eliminando la oferta:", error);
        throw error;
    }
  }
}

export default new OfertasDAO();
