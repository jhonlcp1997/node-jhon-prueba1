//Requerimos el paquete para email de node js
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

    // Todo: Esto se mostrará como mensaje en el email del receptor
    var mensaje = `
    Hola desde nodejs... ${props.nombre} ${props.apellido} 
    Se que la hora es ${props.fecha} 
    Pero tu email ${props.email} no concuerda con tu ${props.password} 
    y que tu rango de dolor es ${props.range}
    fecha: ${props.timestamp}
    `;

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