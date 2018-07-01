const request = require('request');

let localisacion = (direccion ) =>{

return new Promise( (resolve, reject) =>{

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`,
    json: true

}, (error, response, body) => {
    if (error) {
        reject('Error al conectarse con los servidores.');
    } else if (body.status === 'ZERO_RESULTS') {
        reject('Direccion no valida.');
    } else if (body.status === 'OK') {

        let contenido = {
            direccion: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lon: body.results[0].geometry.location.lng,
        }
        resolve(contenido)
    }
});

});



}



localisacion('guadalajara').then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
}).catch((err) => {
    console.log(err);
});