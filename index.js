const express=require('express');
const rutas=require('./routes');
const path=require('path');
const bodyParser=require('body-parser');
const session = require('express-session');
const db=require('./config/db');

const flash=require('connect-flash');
require('./modelo/Transacciones');
require('./modelo/Saldo');

db.sync()
    .then(()=>console.log('conectado a la base:)'))
    .catch(error=>console.log(error));


//crear una app de express
const app=express();
//archivos estaticos
app.use(express.static('public'));
//habilitar pug
app.set('view engine','pug');
//habilita bosyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended:true}));
//Añadir la carpeta vistas
app.set('views',path.join(__dirname,'./vista'));
//flash
app.use(flash());

app.use((req,res,next)=>{
  
    next();
})
//crear rutas
app.use('/',rutas());

app.listen(3000);