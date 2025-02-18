import CarsDAO from "../dao/cars-dao.js";

class CarsRepository {
    async getCars(options){
        return await CarsDAO.getCars(options);
    }

    async getCarsById(id){
        return await CarsDAO.getCarsById(id);
    }
    async addCars(carsData){
        return await CarsDAO.addCars(carsData);
    }
    async updateCars(id,carsData){
        return await CarsDAO.updateCars(id,carsData);
    }
    async deleteCars(id){
        return await CarsDAO.deleteCars(id);
    }
}

export default new CarsRepository();