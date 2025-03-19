import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import carsRouter from "./routes/cars-router.js"
import userRouter from "./routes/user-router.js";
import subRouter from "./routes/sub-router.js";
import ofertRouter from "./routes/ofert-router.js";
// import "./database.js";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const connection = mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Conectado a MongoDB"))
.catch((err) => console.error("Error al conectar con MongoDB:", err));
const PORT = process.env.PORT || 8080;



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(cors({
        origin:"https://martelli-automotes-back-production.up.railway.app",
        credentials: true,
}));
app.use(session({
    secret: 'autos',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://nicocaci:nicocaci@coderhouse.ihpiu.mongodb.net/martelliAutomotores?retryWrites=true&w=majority&appName=coderhouse",
        ttl: 100
    }),
    cookie: {
        secure: false, // Si estás en localhost, ponlo en `true` si usas HTTPS
        httpOnly: true,
        sameSite: "lax"
    }
}));
// app.use((req,res,next) => {
//     const token = req.cookies.acces_token;

// })


// RUTAS //
app.get("/",(req,res) => {
    res.send("Estamos on");
});
app.use("/api/cars",carsRouter);
app.use("/api/usuarios", userRouter);
app.use("/api/subasta", subRouter);
app.use("/api/ofertas", ofertRouter);




app.listen(PORT,() =>{
    console.log(`Escuchando en el Puerto: ${PORT}` );
    console.log("Hora del servidor:", new Date().toLocaleString());
}); 