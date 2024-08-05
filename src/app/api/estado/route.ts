import { ConeccionAlDB } from "@/libs/coneccion";
import EstadoModel from "@/models/estados";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    //Coneccion asincrónica
    await ConeccionAlDB()
   
    //Consulta a la BD de los usuarios
    const estado_datos = await EstadoModel.find()
    // Respuesta del servidor
    return NextResponse.json(estado_datos)
}

export async function POST(request: NextRequest): Promise<Response> {
    //Coneccion asincrónica
    await ConeccionAlDB()
    const data = await request.json()
    // console.log(data)

    const estado = await EstadoModel.create(data)
    // Respuesta del servidor
    return NextResponse.json(estado)
}