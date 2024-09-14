import { ConeccionAlDB } from "@/libs/coneccion";
import UserModel from "@/models/usuario";
import TipoModel from "@/models/tipos";
import EstadoModel from "@/models/estados";
import Link from "next/link"

async function CargarUsuarios() {

  await ConeccionAlDB()

  const user_data = await UserModel.find().limit(100)

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

async function user() {

  const user_data = await CargarUsuarios() as Array<any>

  if (user_data.length == 0) {
    return <>

      <h1 className="text-nigga dark:text-white text-3xl text-center mt-5">No hay usuarios registrados</h1>  // Mensaje de error si no hay usuarios en la base de datos
    </>
  }
  // console.log(user_data)
  return (
    <>

      <h1 className="text-nigga dark:text-white text-3xl text-center mt-5">
        Usuarios ({user_data.length})
      </h1>

      <section className="py-4 px-12 flex flex-col flex-wrap gap-y-4">

        { user_data.map((user) => (
          <Link href={`/users/${user.nick}`} className="flex items-center justify-center p-2 bg-slate-300 dark:bg-slate-700 rounded-sm" key={user._id}>

            <div>
              <img width={50} height={50} src="/svg/twitter-logo-thin-svgrepo-com.svg" />
            </div>

            <div>

              <h1> {user.nick} </h1>
              <h3>{`${user.last}, ${user.name}`}</h3>
              <b>{user.email}</b>
              <p className={user.bio === null || user.bio === undefined || user.bio === "" ? "text-gray-700 dark:text-gray-500 italic" : "text-sky-600 dark:text-sky-300"}>
                {user.bio === null || user.bio === undefined || user.bio === "" ? "Sin biografía" : user.bio}
              </p>
              <ul>

                <li><b>Tipo de usuario: </b>{VerificarTipo(user.tipo_de_usuario)}</li>
                <li><b>Estado de usuario: </b>{VerificarEstado(user.estado_de_usuario)}</li>

              </ul>

            </div>

          </Link>
        )) }

      </section>

    </>
  );
}

export default user;