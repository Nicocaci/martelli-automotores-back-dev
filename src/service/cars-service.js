import CarsRepository from "../repository/cars-repository.js";

class CarsService {
    async getCars(options){
       return await CarsRepository.getCars(options); 
    }
    async getCarsById(id){
        return await CarsRepository.getCarsById(id);
    }
    async addCars(carsData){
        return await CarsRepository.addCars(carsData);
    }
    async updateCars(id,carsData){
        return await CarsRepository.updateCars(id,carsData);
    }
    async deleteCars(id){
        return await CarsRepository.deleteCars(id);
    }
}

export default new CarsService();