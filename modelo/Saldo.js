const Sequelize=require('sequelize');
const db=require('../config/db');
const Proyectos=db.define('saldoCuenta',{
usuario:Sequelize.STRING,
cuenta:Sequelize.STRING,
saldo:Sequelize.STRING
});

module.exports=Proyectos;