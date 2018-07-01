console.log('hola');
const fs = require('fs');
const os = require('os');
const requerir = require('./requerir.js');
const _ = require('lodash');
const yargs = require('yargs');

var comando = process.argv[2];
var titulo = {
      describe: 'Titulo de la nota',
          demand: true,
          alias: 't'
};
var contenido = {
 describe: 'Contenido de la nota',
     demand: true,
     alias: 'b'
};



var notas = yargs
.command("agregar",'Agregar una nueva nota',{
titulo,
contenido
})
.command('remover','Elimina una nota pasando el titulo por la linea de comando',{
titulo

})
.command('todo', 'Muestra todas las notas de tu agenda')
.command('obtener','Muestra una nota con el titulo INGRESADO',{
    titulo
})
.command('area', 'Obtener el area de un rectangulo',{
    a: {
        describe: 'Alto',
        demand: true,
        
    },
     b: {
         describe: 'Ancho',
         demand: true,

     }
})
.help()
.argv;

let resultado = requerir[comando](notas.titulo, notas.contenido)
requerir.logs(notas.titulo,notas.contenido);


// let usuario = os.userInfo();

// fs.appendFile('archivo.txt', `hola que tal ${usuario.username}`, (err)=>{

// if(err){
//     console.log('sucedio algo inesperado');
// }

// });

