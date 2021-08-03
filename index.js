
const express = require('express');

require('dotenv').config();
var cors = require('cors');

const { dbConection } = require('./database/config');

//crear servidor de express
const app = express();

// configurar CORS
app.use( cors() );

// Base de datos
dbConection();


//Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg:'hola mundo'
    })
});




app.listen( process.env.PORT ,() => {
    console.log('servidor corriendo en el puerto' + process.env.PORT);
});