# Expressjs-Typeorm-Mysql-Typedoc-boilerplate

Para iniciar este proyecto, considerar:

1. Correr comando `npm i`
2. Configurar base de datos en el archivo `ormconfig.json`
3. Configurar typescript en el archivo `tsconfig.json`
4. Iniciar el proyecto con los script `npm run ts` en una terminal y `npm run dev` en otra terminal.
5. Para generar documentación, utilizar `npm run documentation`

Se tiene soporte para graphQL y Sockets utilizando Socket-IO.

# Base para proyectos backend con Typescript-ExpressJS-TypeORM

_Este repositorio es un sistema propio que considero compartir, el cual utilizaré como base para todos mis proyectos. La gracia es lograr que este proyecto tenga distintas caracteristicas de forma modular_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Instalación 🔧

_La instalación es tan sencilla como la de cualquier proyecto_

_Primero se clona el repositorio_

```
git clone https://github.com/tomasjm/express-typeorm-typescript-base
```

_Configuramos el archivo ormconfig.json para que se conecte a la base de datos_

```
cd express-typeorm-typescript-base && vim ormconfig.json
```

_Se abre una terminal y se ejecuta:_

```
npm run ts
```

_De esta manera se estará compilando Typescript en tiempo real, en otra terminal se ejecuta:_

```
npm run dev
```

_De esta manera empezará a funcionar el servidor._

## Documentación automática ⌨️

```
npm run documentation
```

## Añadidos modulares 📦

_Se han añadido las siguientes carácteristicas modulares al proyecto, es decir, se pueden activar y desactivar con un comentario_

- [ApolloServer](https://github.com/apollographql/apollo-server) - Soporte para GraphQL.
- [GraphQL](https://graphql.org/code/) - Capa de query para comunicación frontend-backend.
- [Socket-IO](https://github.com/socketio/socket.io) - Soporte para WebSockets (tiempo real).

_Para activar o desactivar funciones, revisar el archivo_

```
src/index.ts
```

## Autores ✒️

- **Tomás Jiménez** - _Creador del proyecto_ - [tomasjm](https://github.com/tomasjm)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (libre)

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 a alguien del equipo.
- Da las gracias públicamente 🤓.
- etc.

---

⌨️ con ❤️ por [tomasjm](https://github.com/tomasjm) 😊
