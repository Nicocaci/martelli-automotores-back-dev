import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  name: {
    type: String, // Nombre del usuario
    required: true,
  },
  email: {
    type: String, // Correo electrónico
    required: true,
    unique: true,
  },
  password: {
    type: String, // Contraseña (encriptada)
    required: true,
  },
  phone: {
    type: String, // Teléfono del usuario
    required: true,
  },
  address: {
    type: String, // Dirección del usuario
    required: false,
  },
  bids: [
    {
      type: mongoose.Schema.Types.ObjectId, // Historial de ofertas realizadas
      ref: "subastas",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UsuarioModel = mongoose.model("usuarios", usuarioSchema);

export default UsuarioModel;
