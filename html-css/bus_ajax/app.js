// predefined and 3rd party module
var express = require('express');
var app = express();
var routes=require('./routes/bus')
var path=require('path');







app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');


app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());


app.use(express.static(path.join(__dirname,'public')));


app.get('/bus',routes.home_bus);
app.get('/from',routes.busList);
app.get('/to',routes.busList);




app.listen(4502,()=> {
    console.log("server Running at 4502 -- > search  ->>  http://localhost:4502/bus for home page")
});