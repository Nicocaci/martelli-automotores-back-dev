import SubastaDAO from "../dao/subasta-dao.js"

class SubastaRepository{
    async crearSubasta(data){
        try {
            return await SubastaDAO.crearSubasta(data);
        } catch (error) {
            throw new Error(`Error en el repositorio al crear subasta :${error.message}`);
        };
    }
    async obtenerSubasta(filtros = {}){
        try {
            return await SubastaDAO.obtenerSubasta(filtros);
        } catch (error) {
            throw new Error(`Error en el repositorio al obtener subastas: ${error.message}`);
        };
    }
    async obtenerSubastaPorId(subId){
        try {
            return await SubastaDAO.obtenerSubastaPorId(subId);
        } catch (error) {
            throw new Error(`Error en el repositorio al obtener la substa con ID ${subId}: ${error.message}`);
        };
    }
    async actualizarSubasta(subId,data){
        try {
            return await SubastaDAO.actualizarSubasta(subId,data);
        } catch (error) {
            throw new Error(`Error en el repositorio al actualizar subasta: ${error.message}`);
        };
    }
    async eliminarSubasta(subId){
        try {
            return await SubastaDAO.eliminarSubasta(subId);
        } catch (error) {
            throw new Error(`Error en el repositorio al eliminar subasta : ${error.message}`);
        };
    }
}

export default new SubastaRepository();