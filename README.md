# Proyecto ShareToGrow

## Importante
**Hay que hacer un insertMany de todos los documentos de mongodb antes de lanzar la app (Los datos por default del sitio, POR FAVOR!!!)**

### Dependencias

> npm i mongoose
> <br>
> npm i next-auth
> <br>
> npm i --save-dev @midudev/tailwind-animations
> <br>
> npm install @svgr/webpack --save-dev
> <br>
> npm i --save react-toastify
> <br>
> npx shadcn-ui@latest init
> <br>
> npm install next-themes
> <br>
> npm i zod
> <br>
> npm i bcrypt

* Actualizar dependencias de 1

> npm i

## MongoDB

Esto se puede cambiar a necesidad de los dos. Lo puedes usar en **MongoDB Compass** y **mongosh** Faltan cosas

### Crear Base de datos

> use proyect

### Crear Colecciones

> db.createCollection("usermodels")
> <br>
> db.createCollection("tipomodels")
> <br>
> db.createCollection("estadomodels")

### Insartar datos
** Insertar estados **

1. Estados del usuario
> db.estadomodels.insertMany([
>  {
>    estado: 'banned',
>    Id_provisional: 2,
>  },
>  {
>    estado: 'activo',
>    Id_provisional: 1,
>  },
>  {
>    estado: 'suspendido temporalmente',
>    Id_provisional: 3,
>  },
>  {
>    estado: 'suspendido indefinidamente',
>    Id_provisional: 4,
>  },
>  {
>    estado: 'desactivado',
>    Id_provisional: 5,
>  }
>])

2. Tipos de usuario

> db.tipomodels.insertMany([
>   {
>     tipo: 'destacado',
>     Id_provisional: 6,
>   },
>   {
>     tipo: 'ADMIN',
>     Id_provisional: 2,
>   },
>   {
>     tipo: 'OWNER',
>     Id_provisional: 1,
>   },
>   {
>     tipo: 'MODER',
>     Id_provisional: 3,
>   },
>   {
>     tipo: 'normal',
>     Id_provisional: 5,
>   },
>   {
>     tipo: 'consumidor',
>     Id_provisional: 4,
>   }
> ])

3. User 

> db.usermodels.insertMany( [{ 'name': ' ', 'last': ' ', 'nick': ' ', 'bio': 'Negros de Mierda', 'email': ' ', 'password': ' ', 'lugar_de_origen': '', 'tipo_de_usuario': { '_id': ' ' }, 'estado_de_usuario': { '_id': ' ' } }] )

# TODO

1. Arreglar el home de la página (tiene modo claro y oscuro)
<br>
* **SGV's y el footer**
2. Añadir el Login y Register
3. Validar con Next Auth
4. Crear el proyecto de Spotify para las API's y colocarlo
5. Crear los modelos de las demás cosas que nos faltan (Mirar la estructura)
6. Hacer llamada

PD: Maduro no gana mañana

Besos en la cola

### Link de los docs

[Docs de NextJS](https://nextjs.org/docs)
<br>
[Docs de Tailwind](https://tailwindcss.com/docs/installation)
<br>
[Docs de ShadCN UI](https://ui.shadcn.com/docs)
<br>
[MongoDB](https://www.mongodb.com/)
