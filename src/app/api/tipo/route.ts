import { ConeccionAlDB } from "@/libs/coneccion";
import TipoModel from "@/models/tipos";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    //Coneccion asincrónica
    await ConeccionAlDB()

    //Consulta a la BD de los usuarios
    const tipo_datos = await TipoModel.find()
    // Respuesta del servidor
    return NextResponse.json(tipo_datos)
}

export async function POST(request: NextRequest): Promise<Response> {
    //Coneccion asincrónica
    await ConeccionAlDB()
    const data = await request.json()
    // console.log(data)

    const tipo = await TipoModel.create(data)
    // Respuesta del servidor
    return NextResponse.json(tipo)
}