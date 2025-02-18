import express from "express";
import CarsController from "../controllers/cars-controller.js";
const router = express.Router();

// RUTA PARA OBTENER TODOS LOS AUTOS 
router.get("/", CarsController.getCars);

// RUTA PARA OBTENER AUTO POR ID
router.get("/:cid",CarsController.getCarsById);

// RUTA PARA AGREGAR AUTO NUEVO 
router.post("/", CarsController.addCars);

// RUTA PARA ACTUALIZAR AUTO
router.put("/:cid", CarsController.updateCars);

// RUTA PARA ELIMINAR AUTO 
router.delete("/:cid", CarsController.deleteCars);


export default router;