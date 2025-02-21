import mongoose from "mongoose";

const ofertasSchema = mongoose.Schema({
  car: {
    name: { type: String, required: true },
    motor: { type: String, required: true },
    modelo: { type: String, required: true },
    ubicacion: { type: String, required: true },
    imagen: { type: String, required: true },
  },
  startingPrice: { type: Number, required: true, min: 0 },
  ofertas: [
    {
      usuario: { type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }, // Relación con la colección de usuarios
      monto: { type: Number, required: true }, // Monto de la oferta
      fecha: { type: Date, default: Date.now }, // Fecha de la oferta
    },
  ],
  endDate: { type: Date, required: true }, // Fecha de finalización de la subasta
  status: { type: String, enum: ["active", "closed"], default: "active" }, // Estado de la subasta
});

const ofertasModel = mongoose.model("ofertas", ofertasSchema);

export default ofertasModel;
