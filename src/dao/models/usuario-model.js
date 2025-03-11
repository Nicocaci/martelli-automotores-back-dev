import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,
  },
  apellido:{
    type: String,
    required: true
  },
  telefono:{
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  ofertasHechas: [
    {
      subasta:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subastas"
      },
    }
  ],
});


const UsuarioModel = mongoose.model("usuarios", usuarioSchema);

export default UsuarioModel;
