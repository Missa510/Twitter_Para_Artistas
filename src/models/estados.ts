// Importar mongoose
import mongoose from "mongoose";

// Crear el esquema
const estado_esquema = {
    "estado": { type: String, required: true },
    "Id_provisional": { type: Number, required: true, unique: true }
} as const

// Consolidarlo como modelo
const EstadoModel = new mongoose.Schema(estado_esquema)

// Exportar Modelo
export default mongoose.models.EstadoModel || mongoose.model("EstadoModel", EstadoModel)