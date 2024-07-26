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

* Actualizar dependencias

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
> db.createCollection("esatdomodels")

### Insartar datos
** Insertar estados **

1. Estados del usuario
> db.user.models.insertMany([
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

> db.usermodels.insertMany( [{ 'name': 'Santiago', 'last': 'Quintero', 'nick': 'Missa510UwU', 'bio': 'Negros de Mierda', 'email': 'sjqv05@gmail.com', 'password': 'Burythelight0123$$', 'lugar_de_origen': 'San Cristóbal', 'tipo_de_usuario': { 'Id_provisional': 1 }, 'estado_de_usuario': { 'Id_provisional': 1 } }] )

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