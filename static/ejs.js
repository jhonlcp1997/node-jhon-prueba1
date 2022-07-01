const https = require('https');

const exportEjs = (res, {nombre, apellido, fecha, email, password, range, timestamp, place, directory}) => {

  let units = "metric";
  const apiKey = "89fe98aaea5cb46b35840f20e38ebfd9";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey + "&units=" + units;
  console.log(nombre, apellido, fecha, email, password, range, timestamp, place)
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

      res.render(directory + "/public/views/index", { nombre, apellido, fecha, place, temp, imageURL });

      // ? intento de agregar ejs

    })
  });
}

module.exports = exportEjs;
