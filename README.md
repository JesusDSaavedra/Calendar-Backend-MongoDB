# Backend CalendarApp


Este backend por parte de la ruta auth permite crear el usuario, hacer login al usuario, y revalidar el token con expiracion en 2h,
por parte de la ruta de eventos permite crear, obtener, actualizar y eliminar eventos, ambas rutas con sus respetivas validaciones con librerias de terceros como ayuda.


## Comandos:
- npm install: Instalacion de los node_modules.
- npm run dev: Correr en modo desarrolador en consola.

## Uso: 
Debe de hacerse la configuarcion de las variables de entorno:
- PORT: Puerto
- DB_CNN: Conexcion de base de datos
- SECRET_JWT_SEED: Frase secreta para JsonWebToken

## Tecnologias utilizadas:

- MongoDBatlass
- MongoDBCompass
- Express.js
- Node.js
- Librerias de terceros