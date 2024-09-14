import { ConeccionAlDB } from "@/libs/coneccion";
import UserModel from "@/models/usuario";
import TipoModel from "@/models/tipos";
import EstadoModel from "@/models/estados";
import { redirect } from "next/navigation";

async function CargarUsuario(user: string) {

    await ConeccionAlDB()

    const consulta = { "nick": user }
    const user_data = await UserModel.find(consulta)

    // console.log(user_data)
    return user_data

}

async function VerificarEstado(data_user: Array<any>): Promise<string> {

    // Poner la vairable como Array (viene como Object de todos modos)
    const [BuscarEstado] = data_user
    // console.log(BuscarEstado)

    // Coneccion con la Base de datos
    await ConeccionAlDB()

    // Consulta la BD del tipo que necesitamos
    const EstadoConsulta = await EstadoModel.find(BuscarEstado)
    // console.log(EstadoConsulta)
    if (EstadoConsulta.length == 0) { return "No hay estados disponibles :(" }

    // Retornar el campo que necesitamos
    return EstadoConsulta[0].estado

}

async function VerificarTipo(data_user: Array<any>): Promise<string> {

    // Poner la vairable como Array (viene como Object de todos modos)
    // console.log(data_user)
    const [BuscarTipo] = data_user
    // console.log(BuscarTipo)

    // Coneccion con la Base de datos
    await ConeccionAlDB()

    // Consulta la BD del tipo que necesitamos
    const TipoConsulta = await TipoModel.find(BuscarTipo)
    // console.log(TipoConsulta)
    if (TipoConsulta.length == 0) { return "No hay tipos disponibles :(" }

    // Retornar el campo que necesitamos
    return TipoConsulta[0].tipo

}
async function PaginaDeUser({ params }: { params: { slug: string } }) {

    const usuario = await CargarUsuario(params.slug) as Array<any>

    if(usuario.length === 0 ) { redirect('/users') }

    // console.log(usuario)

    return (
        <>
            {usuario[0].nick}
        </>
    )
}

export default PaginaDeUser