import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import carsRouter from "./routes/cars-router.js";
import userRouter from "./routes/user-router.js";
import subRouter from "./routes/sub-router.js";
import ofertRouter from "./routes/ofert-router.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();  // 🔥 Mover al principio

const app = express();
const PORT = process.env.PORT || 8080;

// 🔥 Conectar a MongoDB con manejo de errores
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch((err) => console.error("❌ Error al conectar con MongoDB:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: "https://martelli-automotores-front-dev-production.up.railway.app",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// 🔥 Rutas
app.get("/", (req, res) => {
    res.send("Estamos on");
});
app.use("/api/cars", carsRouter);
app.use("/api/usuarios", userRouter);
app.use("/api/subasta", subRouter);
app.use("/api/ofertas", ofertRouter);

// 🔥 Servidor escuchando
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    console.log("🕒 Hora del servidor:", new Date().toLocaleString());
});
