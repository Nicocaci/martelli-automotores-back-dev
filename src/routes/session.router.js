import { Router } from "express";
const router = Router();
import passport from "passport";
import UsuarioModel from "../dao/models/usuario-model.js";
import { createHash, isValidPassword } from "../utils/util.js";
import generateToken from "../utils/jsonwebtoken.js";


router.post('/register', async (req, res) => {
    const { nombre, apellido, email, telefono, password, direccion } = req.body;
    try {
        const existeUsuario = await UsuarioModel.findOne({ email });
        if (existeUsuario) {
            res.status(400).send("El email ya esta registrado")
        }
        const nuevoUsuario = await UsuarioModel.create({ nombre, apellido, email, telefono, password: createHash(password), direccion });
        const token = generateToken({
            nombre: nuevoUsuario.nombre,
            apellido: nuevoUsuario.apellido,
            email: nuevoUsuario.email,
        })

        res.status(201).send({ message: "Usuario creado con exito", token });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email y contraseña son requeridos" });
    }
    try {
        const usuario = await UsuarioModel.findOne({ email: email.trim().toLowerCase() });
        console.log("Usuario encontrado:", usuario);
        console.log("Contraseña ingresada:", password);
        console.log("Contraseña almacenada:", usuario.password);

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        if (!isValidPassword(password, usuario)) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }


        const token = generateToken({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
        })

        res.send({ message: "Login correcto", token });
    } catch (error) {
        console.error("Error en login:", error); // <-- Agrega esta línea
        res.status(500).json({ message: "Error interno del servidor" });
    }

})

export default router;