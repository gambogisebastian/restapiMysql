const express = require ('express');
const app = express();

//seteos
app.set('port', process.env.PORT || 3000);


//mediadores
app.use(express.json()); //por si viene algo en formato json


//rutas
app.use(require('./rutas/integrantes'));


//inicio del servidor
app.listen(app.get('port'), () => {
    console.log('Escuchando en puerto ', app.get('port'));
});