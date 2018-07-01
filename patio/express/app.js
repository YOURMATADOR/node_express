const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 5000;
let app = express();



hbs.registerPartials(__dirname + '/views/defaults'); // registras una pagina que puede ser utilizad apor todos las otras paginas 
hbs.registerHelper('suma',(a,b)=>{

    return a + b;
})


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/home', (req,res)=>{

res.render('home.hbs');

});



app.get('/sobre', (req, res)=>{

res.send("<h1>Hola</h1>");
})


app.get('/about', (req, res)=>{

res.render('about.hbs',{
    fecha: new Date().getFullYear()
});
});


app.listen(port, () => {
    console.log('App listening on port ',port);
});

