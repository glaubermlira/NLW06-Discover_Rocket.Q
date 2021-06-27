const express = require ('express'); //Importar Express;
const route = require('./route'); //Importar Rotas;
const path = require('path'); //Importar modulo require; 

const server = express(); //Servidor;

server.set('view engine', 'ejs'); //Configurando ejs

server.use(express.static('public')); //Consteudos statico da nossa pagina(Pastas 'styles' e 'assets', na qual, se tornará 'images') 

server.set('views', path.join(__dirname, 'views')); //Caminho das pastas do projeto

server.use(route); //Rotas 

server.listen(3000, () => console.log('server started')); // Servidor iniciado

