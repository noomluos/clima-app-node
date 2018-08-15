const axios = require("axios");

let getTemperatura = async(Latitud, Longitud) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Latitud}&lon=${Longitud}1&units=metric&appid=dd0938bef0d8939ace0e0d7b93962fad`);
    let temperatura = resp.data.main.temp;
    return temperatura
}

module.exports = {
    getTemperatura
}