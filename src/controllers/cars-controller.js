import CarsService from "../service/cars-service.js";

class CarsController {
    async getCars(req,res){
        try {
            const { limit = 20, page = 1, sort, query} = req.query;
            const cars = await CarsService.getCars({limit,page,sort,query});
            res.json({
                status:"succes",
                payload: cars,
                totalPages:cars.totalPages,
                prevPage: cars.prevPage,
                nextPage: cars.nextPage,
                page: cars.page,
                hasPrevPage: cars.hasPrevPage,
                hasNextPage: cars.hasNextPage,
                prevLink: cars.hasPrevPage ? `/api/cars?limit=${limit}&page=${cars.prevPage}&sort=${sort}&query=${query}` : null,
                nextLink: cars.hasNextPage ? `/api/cars?limit=${limit}&page=${cars.nextPage}&sort=${sort}&query=${query}` : null,
            });
        } catch (error) {
            console.error("Error al obtener los autos", error);
            res.status(500).json({message: "Error interno del servidor"})
        }
    }
    async getCarsById(req,res){
        const id = req.params.cid;
        try {
            const carsId = await CarsService.getCarsById(id);
           if(!carsId){
            res.status(404).json({error: "No existe el auto que estas buscando ", error});
           }
            res.json(carsId);
        } catch (error) {
            console.error("Error al obtener el auto con ese Id",error)
            res.status(500).json({message: "Error interno del servidor"})
        }
    }
    async addCars(req,res){
        const carsData = req.body;
        try {
            await CarsService.addCars(carsData);
            res.status(201).json({message:"Auto agregado correctamente"});
        } catch (error) {
            console.error("Error al agregar el auto", error)
            res.status(500).json({message: "Error interno del servidor"});
        }
    }
    async updateCars(req,res){
        const id = req.params.cid;
        const carsData = req.body;
        try {
            await CarsService.updateCars(id,carsData);
            res.status(201).json({message:"Auto actualizado correctamente"});
        } catch (error) {
            res.status(500).json({message: "Error interno del servidor"});
        }
    }
    async deleteCars(req,res){
        const id = req.params.cid;
        try {
            await CarsService.deleteCars(id);
            res.status(201).json({message: "Auto eliminado correctamente"});
        } catch (error) {
            res.status(201).json({message: "Error interno del servidor"});
        }
    }
}

export default new CarsController();