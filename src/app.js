import express from "express";
import carsRouter from "./routes/cars-router.js"
import ofertasRouter from "./routes/ofertas-router.js";
import usuarioRouter from "./routes/usuario-router.js";
import subastaRouter from "./routes/subastas-router.js";
import userRouter from "./routes/user-router.js";
import subRouter from "./routes/cars-router.js";
import ofertRouter from "./routes/ofert-router.js"



import "./database.js";
import cors from "cors";
import userController from "./controllers/user-controller.js";
const app = express();
const PUERTO = 8080;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// RUTAS //
app.get("/",(req,res) => {
    res.send("Estamos on");
});
app.use("/api/cars",carsRouter);
// app.use("/api/ofertas", ofertasRouter);
// app.use("/api/usuario", usuarioRouter);
// app.use("/api/subastas",subastaRouter);
app.use("/api/usuarios", userRouter);
app.use("/api/subasta", subRouter);
app.use("/api/ofertas", ofertRouter);



app.listen(PUERTO,() =>{
    console.log(`Escuchando en el Puerto: ${PUERTO}` );
}); 