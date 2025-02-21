import SubastaRepository from "../repository/subasta-repository.js";
import OfertaRepository from "../repository/ofertas-repository.js";

class SubastaService{
    async crearSubasta(data) {
        try {
            // Primero, crea la subasta
            const subasta = await SubastaRepository.crearSubasta(data);

            // Si tienes una oferta, agregarla a la subasta
            if (data.bidAmount && data.userId) {
                const ofertaData = {
                    usuario: data.userId, // Aquí pasas el userId
                    monto: data.bidAmount, // El monto de la oferta
                };

                // Crear la oferta (asumiendo que tienes un modelo para la oferta)
                const oferta = await OfertaRepository.crearOferta(ofertaData);

                // Agregar el ID de la oferta al array de ofertas de la subasta
                subasta.ofertas.push(oferta._id);
                await subasta.save(); // Guarda la subasta con la oferta añadida
            }

            return subasta;
        } catch (error) {
            throw new Error(`Error en el servicio al crear la subasta: ${error.message}`);
        }
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