require('dotenv').config();
const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.port = process.env.PORT
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    // Middlewares: Son funciones que añaden otras funcionales al web server 
     // Es un funcion que siempre se va a ejecutar al levantar el server 
    middlewares(){

        // CORS
        this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;