const fs = require('fs'); // se importa la api de file system

let persona = {
    nombre: "Eduardo",
    edad: 20
};


let personaString = JSON.stringify(persona);
let nuevoArchivo = fs.writeFileSync('notas.json',personaString);

let contenido = fs.readFileSync('notas.json');

let nota = JSON.parse(contenido);

console.log(typeof nota);
console.log(nota.nombre);