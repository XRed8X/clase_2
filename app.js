import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { test } from './backend/controllers/alumno.controller.js';

dotenv.config(); // Carga variables de entorno

mongoose.connect(process.env.urlbase)
.then(() => {
    console.log('Si jala tu chingadera')
})

.catch((error) => {
    console.error('No jala tu chingadera', error);
})

const app = express(); // Crea la app a ejecutar
app.use(cors()); // Para la seguridad del servidor

app.listen(4000, () => {
    console.log('Tu chingadera de app esta corriendo en el server 4000'); // Muestra el puerto en el que está corriendo el server
})

test()