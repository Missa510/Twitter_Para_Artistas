import { ConeccionAlDB } from "@/libs/coneccion";
import UserModel from "@/models/usuario";
import { NextResponse, NextRequest } from "next/server";
// import { NextApiRequest } from "next";

// import type { NextApiRequest } from 'next'
//Mostrar info de User
export async function GET() {
    //Coneccion asincrónica
    await ConeccionAlDB()

    //Consulta a la BD de los usuarios
    const user_datos = await UserModel.find()
    // Respuesta del servidor
    return NextResponse.json(user_datos)
}

export async function POST(request: NextRequest): Promise<Response> {
    //Coneccion asincrónica
    await ConeccionAlDB()
    const data = await request.json()
    // console.log(data)

    const user = await UserModel.create(data)
    // Respuesta del servidor
    return NextResponse.json(user)
}