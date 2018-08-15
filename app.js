/* const argv = require("yargs").options({
    direccion: {
        alias: "d",
        descrip: "Dirección para obtener el clima",
        demand: true
    }
}).argv; */

//const axios = require("axios");
const clima = require("./clima/clima");
const lugar = require("./lugar/lugar");
const argv = require("./config/yargs").argv;

let getInfor = async(direccion) => {

    try {
        let dire = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getTemperatura(dire.Latitud, dire.Longitud);
        return `El clima en ${dire.Direccion} es de: ${temp}°`;
    } catch (e) {
        return `No se puedo encontrar el clima en: ${direccion}`;
    }


}

getInfor(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))

/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

clima.getTemperatura(21.8393074, -102.3184831)
    .then(resp => console.log("La temperatura de la ubicación es: ", resp))
    .catch(e => console.log(e));
 */
//console.log(argv.direccion);

/* let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    .then(resp => {
        //console.log(resp);
        //console.log(JSON.stringify(resp.data, undefined, 2));
        let location = resp.data.results[0];

        console.log("Ubicación: ", location.formatted_address);
        console.log("Latitud de la ubicación: ", location.geometry.location.lat);
        console.log("Longitud de la ubicación: ", location.geometry.location.lng);
    })
    .catch(e => {
        console.log("ERROR!!", e);
    }) */