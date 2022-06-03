//Requerimos el paquete
var nodemailer = require('nodemailer');

const email = (props) => {
    //Creamos el objeto de transporte
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jhcruz.imm@gmail.com',
            pass: 'vcdseosikulmeagz'
        }
    });

    var mensaje = `Hola desde nodejs... ${props}`;

    var mailOptions = {
        from: 'jhcruz.imm@gmail.com',
        to: 'jhcruz.imm@gmail.com',
        subject: 'Asunto Del Correo: prueba',
        text: mensaje
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

module.exports = email;