console.log('requerir.js');
const fs = require('fs');
const _ = require('lodash');

function traerArchivo(archivo) {
    try {
        let existentes = fs.readFileSync(archivo);
       return JSON.parse(existentes);
    } catch (e) {
return [];
    }
}
function gravarContenido(contenido){
    fs.writeFileSync('misNotas.json', contenido);

}

let agregar  = (...args)=>{
let notas = traerArchivo('misNotas.json');
let nota ={
titulo: args[0],
contenido: args[1]
}

let tituloUnico = notas.filter((e) =>  e.titulo === args[0] );

if(tituloUnico.length === 0){
notas.push(nota);
let contenido = JSON.stringify(notas);
gravarContenido(contenido);
return 'agregado con exito';
}
}

let remover = (titulo)=>{
//obtener el archivo 
let nuevasNotas =traerArchivo('misNotas.json');
 let actualizacion = nuevasNotas.filter((e)=> e.titulo !== titulo);
gravarContenido(JSON.stringify(actualizacion));
return nuevasNotas.length !== actualizacion.length ? "Elemento removido": 'Elemento no localizado';
}

let obtener  = (titulo)=>{
let documento = traerArchivo('misNotas.json');
let resultado = documento.filter((e) => e.titulo === titulo);
return resultado.length > 0 ? resultado: 'No se encontro el titulo ingresado';
}
let logs = (titulo,contenido)=>{
console.log(_.isUndefined(titulo) ? "":`Titulo ${titulo}`);
console.log(_.isUndefined(contenido)? "":`Contenido ${contenido}`);
}

let todo =  () =>{

let documento = traerArchivo('misNotas.json');
console.log(`Imprimiendo ${documento.length} ${documento.length > 1 ? 'documento(S)':'documento'}`);
documento.forEach(e => {
    console.log(`Titulo: ${e.titulo}`);
    console.log(`Contenido: ${e.contenido}`);
});

}

let area = (a,b) =>{
    return console.log(`Area ${a * b}`);
}

module.exports = {
    agregar,
    remover,
    obtener,
    logs,
    todo,
    area
};