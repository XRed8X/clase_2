import { Schema, model } from "mongoose";

const EsquemaAlumnos = new Schema({
    name: {
        type: String,
        required: true
    },
    apepat: {
        type: String,
        required: true
    }
})

export const ModeloAlumnos = new model("Registro de tus alumnos piteros", EsquemaAlumnos)