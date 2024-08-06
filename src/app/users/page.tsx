import { ConeccionAlDB } from "@/libs/coneccion";
import UserModel from "@/models/usuario";
import TipoModel from "@/models/tipos";
import EstadoModel from "@/models/estados";
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

async function CargarUsuarios() {

    await ConeccionAlDB()

    const user_data = await UserModel.find()

    // console.log(user_data)
    return user_data
}

async function VerificarEstado(data_user: Array<any>): Promise<string> {

    // Poner la vairable como Array (viene como Object de todos modos)
    const BuscarEstado = data_user as Array<any>

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
    const BuscarTipo = data_user as Array<any>
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
        return <h1 className="text-white text-3xl text-center">No hay usuarios registrados</h1>  // Mensaje de error si no hay usuarios en la base de datos
    }
    // console.log(user_data)
    return (
      <main
        className="bg-banner-fondo-claro dark:bg-banner-fondo">
        <NavBar />
        <h1 className="text-white text-3xl text-center">
          {" "}
          Usuarios ({user_data.length}){" "}
        </h1>
        {user_data.map((user) => (
          <div key={user._id}>
            <h1>{user.last + ", " + user.name}</h1>
            <strong>{user.email}</strong>
            <br />
            <ul>
              <li>{VerificarTipo(user.tipo_de_usuatrio)}</li>
              <li>{VerificarEstado(user.estado_de_usuatrio)}</li>
            </ul>
          </div>
        ))}
        <Footer />
      </main>
    );
}

export default user;