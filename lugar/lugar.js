const axios = require("axios");
const argv = require("../config/yargs").argv;

let getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(argv.direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    if (resp.data.status === "OK") {
        let location = resp.data.results[0];
        return {
            Direccion: location.formatted_address,
            Latitud: location.geometry.location.lat,
            Longitud: location.geometry.location.lng,
            //CP: location.addres_components.postal_code
        }
    } else {
        throw new Error(`No hay resultados para la busqueda: ${direccion}`);
    }


}

module.exports = {
    getLugarLatLng
}