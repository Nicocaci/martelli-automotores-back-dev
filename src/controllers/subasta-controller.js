import SubastaService from "../service/subasta-service.js"


class SubastaController{
    async crearSubasta(req,res){
        try {
            const data = req.body;
            const subasta = await SubastaService.crearSubasta(data);
            res.status(201).json({message: "Subasta creada exitosamente", subasta});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async obtenerSubasta(req,res){
        try {
            const filtros = req.query;
            const subastas = await SubastaService.obtenerSubasta(filtros);
            res.status(201).json(subastas);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async obtenerSubastasPorId(req,res){
        try {
            const subId = req.params;
            const subastasId = await SubastaService.obtenerSubastaPorId(subId);
            res.status(201).json(subastasId);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async actualizarSubasta(req,res){
        try {
            const subId = req.params;
            const data = req.body;
            const subastaActualizada = await SubastaService.actualizarSubasta(subId,data);
            res.status(201).json({message:"Subasta actualizada correctamente", subastaActualizada});
        } catch (error) {
            res.status(500).json({erorr: error.message});
        }
    }

    async eliminarSubasta(req,res){
        try {
            const subId = req.params;
            const subastaEliminada = await SubastaService.eliminarSubasta(subId);
            res.status(201).json({message:"Subasta eliminada correctamente", subastaEliminada})
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default new SubastaController();