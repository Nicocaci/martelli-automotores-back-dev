import mongoose from "mongoose";

const subastaSchema = mongoose.Schema({
  ofertaId: {
    type: mongoose.Schema.Types.ObjectId, // Relación con el modelo de ofertas
    ref: "ofertas",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Relación con el modelo de usuarios
    ref: "usuarios",
    required: true,
  },
  bidAmount: {
    type: Number, // Monto de la oferta
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date, // Fecha y hora en que se realizó la oferta
    default: Date.now,
  },
});

const SubastaModel = mongoose.model("subastas", subastaSchema);

export default SubastaModel;
