import mongoose from "mongoose";

export async function ConeccionAlDB() {
    try {
        await mongoose.connect(process.env.DATA_BASE_URL as string)
    } catch (error) {
        console.error(error)
    }
}