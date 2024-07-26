// Importar mongoose
import mongoose from "mongoose";

// Crear el esquema
const tipo_esquema = {
    "tipo": { type: String, required: true },
    "Id_provisional": { type: Number, required: true, unique: true }
} as const;

// Consolidarlo como modelo
const TipoModel = new mongoose.Schema(tipo_esquema)

// Exportar Modelo
export default mongoose.models.TipoModel || mongoose.model("TipoModel", TipoModel)