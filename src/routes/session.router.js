// import { Router } from "express";
// const router = Router();
// import passport from "passport";
// import UsuarioModel from "../dao/models/usuario-model.js";
// import { createHash, isValidPassword } from "../utils/util.js";
// import generateToken from "../utils/jsonwebtoken.js";
// import mongoose from "mongoose";
// import authMiddleware from "../middleware/authMiddleware.js";

// // router.post('/register', async (req, res) => {
// //     const { nombre, apellido, email, telefono, password, direccion } = req.body;
// //     try {
// //         const existeUsuario = await UsuarioModel.findOne({ email });
// //         if (existeUsuario) {
// //             return res.status(400).send("El email ya está registrado"); // Agregar return para evitar ejecución innecesaria
// //         }

// //         const nuevoUsuario = await UsuarioModel.create({
// //             nombre,
// //             apellido,
// //             email,
// //             telefono,
// //             password: createHash(password),
// //             direccion
// //         });

// //         const token = generateToken({
// //             nombre: nuevoUsuario.nombre,
// //             apellido: nuevoUsuario.apellido,
// //             email: nuevoUsuario.email,
// //         });

// //         res.status(201).send({ message: "Usuario creado con éxito", token });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error interno del servidor" });
// //     }
// // });

// // router.post('/login', async (req, res) => {
// //     const { email, password } = req.body;
// //     if (!email || !password) {
// //         return res.status(400).json({ message: "Email y contraseña son requeridos" });
// //     }

// //     try {
// //         const usuario = await UsuarioModel.findOne({ email: email.trim().toLowerCase() });
// //         if (!usuario) {
// //             return res.status(404).json({ message: "Usuario no encontrado" });
// //         }

// //         if (!isValidPassword(password, usuario)) {
// //             return res.status(401).json({ message: "Contraseña incorrecta" });
// //         }

// //         // 💡 Asegurar que req.session existe
// //         if (!req.session) {
// //             return res.status(500).json({ message: "Error con la sesión del servidor" });
// //         }

// //         req.session.login = true;
// //         req.session.user = {
// //             nombre: usuario.nombre,
// //             apellido: usuario.apellido,
// //             email: usuario.email,
// //         };

// //         req.session.save((err) => {
// //             if (err) {
// //                 console.error("Error al guardar la sesión:", err);
// //                 return res.status(500).json({ message: "Error interno del servidor" });
// //             }
// //             console.log("Sesión creada:", req.session);
// //             const token = generateToken({
// //                 nombre: usuario.nombre,
// //                 apellido: usuario.apellido,
// //                 email: usuario.email,
// //             });
// //             console.log(token);
// //             return  res.json({ message: "Login correcto", token });
// //         });
// //     } catch (error) {
// //         console.error("Error en login:", error);
// //         res.status(500).json({ message: "Error interno del servidor" });
// //     }
// // });
// // router.get("/logout", async (req, res) => {
// //     try {
// //         if (!req.session) {
// //             return res.status(400).json({ message: "No hay sesión activa" });
// //         }

// //         const sessionStore = mongoose.connection.collection("sessions");
// //         const sessionId = req.sessionID; // Cambiar a req.sessionID para mayor compatibilidad

// //         req.session.destroy(async (err) => {
// //             if (err) {
// //                 return res.status(500).json({ message: "Error al cerrar sesión" });
// //             }

// //             // Eliminar la sesión de MongoDB
// //             await sessionStore.deleteOne({ _id: sessionId });

// //             res.clearCookie("connect.sid", { path: "/" });
// //             return res.json({ message: "Logout exitoso" });
// //         });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error al cerrar sesión", error });
// //     }
// // });

// export default router;
