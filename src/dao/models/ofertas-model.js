import mongoose from "mongoose";

const ofertasSchema = new mongoose.Schema({
  subasta: { // Cambiado de subastaId a subasta
    type: mongoose.Schema.Types.ObjectId,
    ref: "subastas",
    required: true
  },
  usuario: { // Cambiado de usuarioId a usuario
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario",
    required: true
  },
  monto: {
    type: Number,
    required: true,
    min: 1 // Asegura que la oferta no sea menor o igual a 0
  }
});

const OfertasModel = mongoose.model("ofertas", ofertasSchema); // PascalCase

export default OfertasModel;
