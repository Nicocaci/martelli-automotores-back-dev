import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  name: { type: String, required: true }, // Nombre del usuario
  email: { type: String, required: true, unique: true }, // Correo electrónico
  password: { type: String, required: true }, // Contraseña (encriptada)
  phone: { type: String, required: true }, // Teléfono del usuario
  address: { type: String }, // Dirección (opcional)
  ofertas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ofertas", // Ahora referencia a "ofertas" en lugar de "subastas"
    },
  ],
  createdAt: { type: Date, default: Date.now },
});


const UsuarioModel = mongoose.model("usuarios", usuarioSchema);

export default UsuarioModel;
