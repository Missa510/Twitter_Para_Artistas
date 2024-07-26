// importar mongoose así
import mongoose from "mongoose";

// crear esquema
const esquema_user = {
    name: { type: String, required: false },
    last: { type: String, required: false },
    nick: { type: String, required: true },
    bio: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lugar_de_origen: { type: String, required: true },
    tipo_de_usuatrio: { type: Array, required: true },
    estado_de_usuatrio: { type: Array, required: true },
    posts: { tpye: Array },
    comentarios: { tpye: Array },
    created_at: { type: Date, default: new Date() },
} as const;

// consolidarlo como esquema
const user = new mongoose.Schema(esquema_user)

// Exporta el modelo creado, si no está entonces créalo
export default mongoose.models.UserModel || mongoose.model('UserModel', user)