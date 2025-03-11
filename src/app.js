import express from "express";
import carsRouter from "./routes/cars-router.js"
import userRouter from "./routes/user-router.js";
import subRouter from "./routes/sub-router.js";
import ofertRouter from "./routes/ofert-router.js";
import sessionRouter from "./routes/session.router.js"



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
app.use("/api/usuarios", userRouter);
app.use("/api/subasta", subRouter);
app.use("/api/ofertas", ofertRouter);
app.use("/api/sessions", sessionRouter);



app.listen(PUERTO,() =>{
    console.log(`Escuchando en el Puerto: ${PUERTO}` );
}); 