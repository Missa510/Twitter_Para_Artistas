// importar mongoose así
import mongoose from "mongoose";

// crear esquema
const esquema_user = {
    name: { type: String },
    last: { type: String },
    nick: { type: String, required: true, unique: true, min: 3, max: 256 },
    bio: { type: String },
    email: { type: String, required: true, unique: true, min: 3, max: 256 },
    password: { type: String, required: true, select: false },
    lugar_de_origen: { type: String, required: true },
    tipo_de_usuario: { type: Array, required: true },
    estado_de_usuario: { type: Array, required: true },
    posts: { tpye: Array },
    comentarios: { tpye: Array },
    followers: { tpye: Array },
    following: { tpye: Array },
    created_at: { type: Date, default: new Date() },
} as const;

// consolidarlo como esquema
const user = new mongoose.Schema(esquema_user)

// Exporta el modelo creado, si no está entonces lo crea
export default mongoose.models.UserModel || mongoose.model('UserModel', user)