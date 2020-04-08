const Sequelize=require('sequelize');
const db=require('../config/db');
const Proyectos=db.define('envios',{
fromAccount:Sequelize.STRING,
toAccount:Sequelize.STRING,
amount:Sequelize.STRING
});

module.exports=Proyectos;