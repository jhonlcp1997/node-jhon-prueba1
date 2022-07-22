const https = require('https');

const exportREsponse = (res, {nombre, apellido, fecha, email, password, range, timestamp, place, directory}) => {

  
  // Todo: esta parte es puramente de NODE js
  https.get(url, (response) => {
    //     console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(`Clima en ${place} con ${temp}°C con un clima ${weatherDescription}`);

      // ? intento de agregar ejs

      res.render(directory + "/public/views/index", { nombre, apellido, fecha, place2, temp, imageURL });

      // ? intento de agregar ejs

    })
  });
}

module.exports = exportREsponse;
