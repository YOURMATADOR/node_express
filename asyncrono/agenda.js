const fs= require('fs');
const request = require('request');
let agregar = (direccion,callback) =>{

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`,
    json: true

}, (error, response, body) => {
    if (error) {
callback('Error al conectarse con los servidores.');
    } else if (body.status === 'ZERO_RESULTS') {
        callback('Direccion no valida.');
    } else if (body.status === 'OK') {
   
        let contenido = {
            direccion:body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lon: body.results[0].geometry.location.lng,
        }
        callback(undefined, contenido);
        escritura(contenido);
    }
})
}

let escritura = (con)=>{
fs.writeFileSync('miAgenda.json', JSON.stringify(con));

}

let temperatura = (lat,lon,callback) =>{

   request({
       url: `https://api.darksky.net/forecast/8b61a74b2c615de1312c351e11c32afb/${lat},${lon}`,
       json: true
   }, (error, request, body) => {
       let cuerpo = body.currently.temperature;
       if (!error && request.statusCode === 200) {
           callback(undefined,`Temperatura actual ${JSON.stringify(cuerpo, undefined, 2)}`);
       } else {
           callback('Error al localizar el pronostico.');
       }

   });


}

module.exports ={
agregar,
temperatura

};