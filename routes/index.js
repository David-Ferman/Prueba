const express=require('express');
const ruta=express.Router();
const ProyectoControlador=require('../controlador/ProyectoControlador');

module.exports=function(){
    ruta.get('/enviar',ProyectoControlador.proyectoHome);
    ruta.get('/historial',ProyectoControlador.Historial);
    ruta.get('/crear',ProyectoControlador.Crear);
    ruta.get('/saldo',ProyectoControlador.Saldo);
    
    

    
    return ruta;
}