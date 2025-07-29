import express from "express";
import "dotenv/config";
import conexionBD from "./src/config/DB.js";
import cors from 'cors'
import userRouter from "./src/routes/user.route.js"

const app = express();
conexionBD();
const PORT = process.env.PORT || 4100;
const urlFront = process.env.FRONTEND_URL
// midleWards
app.use(express.json());
app.use(cors({
  origin:urlFront , // Permite solicitudes solo desde tu frontend Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP que tu API va a usar
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados que tu frontend puede enviar
}));
app.use("/users", userRouter);
app.listen(PORT,()=>{
    console.log('servidor en funcionamiento', PORT)
});

