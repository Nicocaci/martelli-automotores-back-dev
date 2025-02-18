import mongoose from "mongoose";

const carsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    motor: {
        type: String,
        requiere: true
    },
    model: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String,
        requiere: true
    },
    img: {
        type: String
    },
})

const carsModel = mongoose.model("cars",carsSchema);

export default carsModel;