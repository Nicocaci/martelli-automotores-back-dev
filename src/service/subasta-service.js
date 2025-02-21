import SubastaRepository from "../repository/subasta-repository.js";

class SubastaService{
    async crearSubasta(data){
        try {
            return await SubastaRepository.crearSubasta(data);
        } catch (error) {
            throw new Error(`Error en el servicio al crear la subasta: ${error.message}`);
        };
    }
    async obtenerSubasta(filtros = {}){
        try {
            return await SubastaRepository.obtenerSubasta(filtros);
        } catch (error) {
            throw new Error(`Error en el servicio al obtener subasta; ${error.message}`);
        };
    }
    async obtenerSubastaPorId(subId){
        try {
            const subasta = await SubastaRepository.obtenerSubastaPorId(subId);
            if(!subasta){
                throw new Error(`No se encontro subasta con ese : ${subId}`);
            }
            return subasta;
        } catch (error) {
            throw new Error (`Error en el servicio al obtener al subasta : ${error.message}`);
        };
    }

    async actualizarSubasta(subId,data){
        try {
            const subastaActualizada = await SubastaRepository.actualizarSubasta(subId,data);
            if(!subastaActualizada){
                throw new Error(`Error al actualizar la subasta: ${error.message}`);
            }
            return subastaActualizada;
        } catch (error) {
            throw new Error(`Error al actualizar la subasta: ${error.message}`);
        }
    }
    async eliminarSubasta(subId){
        try {
            const subastaEliminada = await SubastaRepository.eliminarSubasta(subId);
            if(!subastaEliminada){
                throw new Error(`No se pudo borrar subasta con ese: ${subId}`);
            }
            return subastaEliminada;
        } catch (error) {
            throw new Error(`Error en el servicio al eliminar subasta: ${error.message}`);
        };  
    }
}

export default new SubastaService();