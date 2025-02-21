import SubastaModel from "./models/subastas-model.js";

class SubastaDAO {
    async crearSubasta(data) {
        try {
            const nuevaSubasta = SubastaModel.create(data);
            return await nuevaSubasta;
        } catch (error) {
            throw new Error(`Error al crear la subasta: ${error.message}`);
        };
    }
    async obtenerSubasta(filtros = {}) {
        try {
            return await SubastaModel.find(filtros).populate("ofertaId").populate("userId");
        } catch (error) {
            throw new Error(`Error al obtener las subastas: ${error.message}`);
        }

    }
    async obtenerSubastaPorId(subId) {
        try {
            return await SubastaModel.findById(subId).populate("ofertaId").populate("userId");
        } catch (error) {
            throw new Error(`Error al obtener la subasta con ID ${id}: ${error.message}`);
        }
    }
    async actualizarSubasta(subId, data) {
        try {
            return await SubastaModel.findByIdAndUpdate(subId,data, {new:true});
        } catch (error) {
            throw new Error(`Error al actualizar la subasta con ID ${id}: ${error.message}`);
        }
    }
    async eliminarSubasta(subId) {
        try {
            return await SubastaModel.findByIdAndDelete(subId);
        } catch (error) {
            throw new Error(`Error al eliminar la subasta con ID ${subId}: ${error.message}`);
        }

    }
}

export default new SubastaDAO();