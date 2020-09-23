/*
const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require( 'nunjucks' );

const app = express(); 

app.use(function(req,res,next){  //Use - realiza la función pasada para cada pedido que entra
    console.log(req.method)
    next()
})

app.use("/special",function(req,res,next){
    console.log(req.method)
    console.log("entrada a special")
    next()
})

app.use(function(req, res, next){
    const data = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', personas: data} );
});

app.use(morgan('tiny')) //formá simplificada de morgan


app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates


app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});

*/

const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
const nunjucks = require( 'nunjucks' );


const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan('tiny'))

let tweetsDeEjemplo = [
    { id: 1, name: "juan", content: "este es un tweeettt de juan" },
    { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
    { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

app.get('/', function (req, res) {
    res.render( 'index', { tweets: tweetsDeEjemplo });
});

/*
app.get('/stylesheets/style.css', function (req, res) {
    res.sendFile(__dirname+"/public/stylesheets/style.css")
})
*/

app.use(express.static('./public'))

app.listen(3000, function(){
    console.log('Estas escuhando en el puerto 3000')
});