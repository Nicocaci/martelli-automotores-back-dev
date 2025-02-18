import carsModel from "./models/cars-model.js";

class CarsDAO {
    async getCars({ limit, page, sort, query }) {
        return await carsModel.find(query ? { category: query } : {})
            .limit(limit)
            .skip((page - 1) * limit) // Paginación
            .sort(sort ? { [sort]: 1 } : {}); // Orden
    }

    async getCarsById(id) {
        return await carsModel.findById(id);
    }

    async addCars(carsData) {
        return await carsModel.create(carsData);
    }

    async updateCars(id, carsData) {
        return await carsModel.findByIdAndUpdate(id, carsData, { new: true });
    }

    async deleteCars(id) {
        return await carsModel.findByIdAndDelete(id);
    }
}

export default new CarsDAO();
