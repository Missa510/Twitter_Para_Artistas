import { ConeccionAlDB } from "@/libs/coneccion";
import UserModel from "@/models/usuario";
import { NextResponse, NextRequest } from "next/server";

//Mostrar info del User
export async function GET(req: NextRequest): Promise<Response> {

    await ConeccionAlDB() // Generar la conexión

    const user = req.url.split('user/')[1] // Separar el slug porque no sé como sacarlo de la url lit XDn't
    const consulta = { nick: user } // Genera los parámetros de consulta del 

    //Consulta a la BD de los usuarios
    const user_datos = await UserModel.findOne(consulta) // Recuperar los datos de la funcion de consulta

    // Si no existe usuario
    if (user_datos === null) return NextResponse.json({ error: "Error :( no existe tal usuario. Revisa de nuevo" }, { status: 404 })

    // Respuesta del servidor
    return NextResponse.json(user_datos)

}


// Actualizar la info del usuario
export async function POST(req: NextRequest): Promise<Response> {

    await ConeccionAlDB() // Generar la conexión

    const user = req.url.split('user/')[1] // Separar el slug porque no sé como sacarlo de la url lit XDn't
    const consulta = { nick: user } // Crear la consulta para el update

    const data = await req.json()  // Obtener los datos del body de la request (es asincrónico)
    const setData = { "$set": data[0] } // Crear el arreglo para actualizar
    const user_datos = await UserModel.findOne(consulta) // Recuperar los datos de la funcion de consulta

    try {

        // Si no existe usuario
        if (user_datos === null) { return NextResponse.json({ error: "Error :( no existe tal usuario. Revisa de nuevo" }, { status: 404 }) }

        // Para saber si hay o no followers o followings
        if (data[0].following !== undefined) {

            const userConsultaID = user_datos._id // Obtener el ID del usuario que necesita seguir
            const userFollowID = data[0].following // Obtener el ID del usuario a seguir
            const sonLoMismo = userConsultaID == userFollowID._id // Si son lo mismo

            if (!sonLoMismo) {
                // Actualizar el usuario pora ponerle el following
                const consultaFollow = userFollowID // Consulta del usuario a seguir

                // Procesar la consulta del usuario a seguir
                await UserModel.updateOne(consultaFollow, {
                    "$set": {
                        "followers": [
                            {
                                "_id": userConsultaID
                            }
                        ]
                    }
                })
            } else {

                return NextResponse.json({ error: "Error :( no te puedes seguir a tí mimsmo. cabecewebo" }, { status: 500 })
            }

        }
        await UserModel.updateOne(consulta, setData) // Genera la consulta
        return NextResponse.json({ mensaje: `El usuario ${user} se actualizó correctamente` })

    } catch (e) {

        return NextResponse.json(e, { status: 500 })
    }

}

// Borrar el usuario (Se puede :3)
export async function DELETE(req: NextRequest): Promise<Response> {

    await ConeccionAlDB() // Generar la conexión

    const user = req.url.split('user/')[1] // Separar el slug porque no sé como sacarlo de la url lit XDn't
    const consulta = { nick: user } // Crear la consulta para el update

    const user_datos = await UserModel.findOne(consulta) // Recuperar los datos de la funcion de consulta

    try {
        if (user_datos === null) { return NextResponse.json({ error: "Error :( no existe tal usuario. Revisa de nuevo" }, { status: 404 }) }

        await UserModel.deleteOne(consulta) // Genera la consulta

        return NextResponse.json({ mensaje: `El usuario ${user} se ha eliminado exitósamente. Ya no existe` })

    } catch (e) {
        return NextResponse.json(e, { status: 500 })
    }
}