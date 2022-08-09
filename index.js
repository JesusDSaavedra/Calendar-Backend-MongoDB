const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConection } = require('./database/config');


// console.log(process.env);

//Crear e servidor de expess
const app = express()

// Base de datos
dbConection()

// CORS
app.use(cors())

// Directorio publico
app.use( express.static('public') )


// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );
app.use( '/api/events', require('./routes/events') );

// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})
