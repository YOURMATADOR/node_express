
const request = require('request');
const yargs = require('yargs');
const agenda = require('./agenda');
const axios = require('axios');
const entrada = yargs
.options({
a: {
    demand: true,
    alias: 'address',
    describe: 'Ingresar el domicilio',
    string: true
}
})
.help()
.alias('help','h')
.argv;


let url = encodeURIComponent(entrada.address);
let direccion =  `https://maps.googleapis.com/maps/api/geocode/json?address=${url}`;

axios.get(direccion).then((result) => {

    if(result.data.status === 'ZERO_RESULTS'){
        console.log('No se encontro la direccion ingresada');
    }
    else{
    let coordenadas = {
        lat: result.data.results[0].geometry.location.lat,
        lng: result.data.results[0].geometry.location.lng,
        nombre: result.data.results[0].formatted_address

    }
        console.log(`La temperatura en ${coordenadas.nombre}`);
let temp = `https://api.darksky.net/forecast/8b61a74b2c615de1312c351e11c32afb/${coordenadas.lat},${coordenadas.lng}`;
    return axios.get(temp)
}

})
.then((result)=>{

let temperatura = result.data.currently.temperature;
console.log(`es ${temperatura}`);
})
.catch((err) => {

    console.log('Ocurrio un error');
   


});