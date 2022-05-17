// require libreries only use require
const express = require('express');
const bodyParser = require("body-parser");

// create app with express
const app = express();

// app use body when request to index.html
app.use(bodyParser.urlencoded({extends:true}));
app.use(express.static(__dirname));

// with this i acces into route 
app.listen(3000, ()=>{
    console.log("Estoy en el app prendido en localhost:3000");
})

// Todo ====================================================

// response route "/"
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

// response with result but request to index.html parts
app.post("/", (req, res)=>{
    // let nombre = req.body.firstName;
    // let apellido = req.body.lastName;
    res.sendFile(__dirname + "/views/response.html");
    // res.send(`<h2>${nombre} ${apellido}</h2>`);
})
