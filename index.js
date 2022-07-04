// require libreries only use require
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

// Todo: intento correo->funcionó
const emails = require('./static/email');
const exportEjs = require('./static/ejs');
const dbConnect = require('./config/mongo');
const { createUser } = require('./controllers/users');
const jsonDatos = require(__dirname + '/jsonDatos.json');


// create app with express
const app = express();

// app use body when request to index.html
app.use(bodyParser.urlencoded({ extends: true }));
app.use(express.static(__dirname + "/public"));

app.use(cors());
// app use motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


// get PORT from .env
const port = process.env.PORT || 3000;

// with this i acces into route 
app.listen(port, () => {
  console.log("Estoy en el app prendido en localhost:" + port);
})

// Todo ====================================================

app.get('/', (req, res)=>{
  console.log(jsonDatos);
  res.send({jsonDatos});
})

// response route "/"
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

// * Ruta de PRUEBA, redireccionamiento a index.ejs
/*app.get("/services", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  let nombre = "holas";
  let apellido = "holas";
  let fecha = "holas";
  let temp = "holas";
  let imageURL = "#";
  let password = "holas";
  let range = "holas";
  let image = "holas";
  let place = "holas";

  res.render(__dirname + '/public/views/index', { nombre, apellido, fecha, place, temp, imageURL });
})*/

// response with result but request to index.html parts
app.post("/services", (req, res) => {
  let nombre = (req.body.firstName);
  let apellido = req.body.lastName;
  let fecha = req.body.date;
  let email = req.body.email;
  let password = req.body.password;
  let range = req.body.range;
  let image = req.body.file;
  let place = req.body.place.toLowerCase();
  let directory = __dirname;

  let fechahora = new Date();
  let timestamp = fechahora.toLocaleTimeString();

  let props = {
    nombre,
    apellido,
    fecha,
    email,
    password,
    range,
    timestamp,
    place,
    directory
  }

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("es-PE", options);
  console.log(day);

  // ? res.sendFile(__dirname + "/views/response.html");

  // emails(props);
  // createUser(props);

  // Todo: Esto es para evitar que el envio de datos por parte del node js no se complique con caracteres ñ commillas etc
  // res.setHeader('Content-Type','charset=utf-8');
  // res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});

  // ? intento de FETCH
  exportEjs(res, props);
  // ? intento de FETCH
})

// Todo: Conexion a la base de datos
dbConnect();
