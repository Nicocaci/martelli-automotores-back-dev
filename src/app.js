import express from "express";
import carsRouter from "./routes/cars-router.js"
import ofertasRouter from "./routes/ofertas-router.js";
import usuarioRouter from "./routes/usuario-router.js";
import subastaRouter from "./routes/subastas-router.js"
import "./database.js";
import cors from "cors";
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
app.use("/api/ofertas", ofertasRouter);
app.use("/api/usuario", usuarioRouter);
app.use("/api/subastas",subastaRouter);



app.listen(PUERTO,() =>{
    console.log(`Escuchando en el Puerto: ${PUERTO}` );
}); 