import express from "express";
import carsRouter from "../src/routes/cars-router.js";
import "./database.js"
const app = express();
const PUERTO = 8080;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


// RUTAS //
app.get("/",(req,res) => {
    res.send("Estamos on");
});
app.use("/api/cars",carsRouter);



app.listen(PUERTO,() =>{
    console.log(`Escuchando en el Puerto: ${PUERTO}` );
}); 