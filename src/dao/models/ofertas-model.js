import mongoose from "mongoose";

const ofertasSchema = mongoose.Schema({
  car: {
    name: {
      type: String, // Nombre del auto
      required: true,
    },
    motor: {
      type: String, // Tipo de motor
      required: true,
    },
    modelo: {
      type: String, // Modelo del auto
      required: true,
    },
    ubicacion: {
      type: String, // Ubicación del auto
      required: true,
    },
    imagen: {
      type: String, // URL de la imagen del auto
      required: true,
    },
  },
  startingPrice: {
    type: Number, // Precio inicial de la subasta
    required: true,
    min: 0,
  },
  bids: [
    {
      type: mongoose.Schema.Types.ObjectId, // Relación con las ofertas
      ref: "subastas",
    },
  ],
  endDate: {
    type: Date, // Fecha de finalización de la subasta
    required: true,
  },
  status: {
    type: String, // Estado de la subasta (ej. "activa", "finalizada")
    enum: ["active", "closed"],
    default: "active",
  },
});

const ofertasModel = mongoose.model("ofertas", ofertasSchema);

export default ofertasModel;
