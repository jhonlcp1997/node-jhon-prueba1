const {userModel} = require('../models');

// Obtener una lista de usuarios
const getUsers = async(req, res)=>{
  const data = await userModel.find({});
  res.send(data);
}

// Crear un usuario
const createUser = async(req, res)=>{
  const body ={
    name: req.nombre,
    lastname: req.apellido,
    date: req.fecha,
    email: req.email,
    password: req.password,
    range: req.range
  }
  
  const data = await userModel.create(body);
  console.log(data);
}


module.exports = ({getUsers, createUser});
