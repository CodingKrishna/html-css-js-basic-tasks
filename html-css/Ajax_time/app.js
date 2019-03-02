// predefined and 3rd party module
var express = require('express');
var app = express();
var path =require("path");
var connection = require("express-myconnection");

//my modules

var time=require('./routes/time_zone')




app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));



app.get('/time',time.time);
app.get('/timezone',time.timezone);
// app.post('/timezone2',time.timezone2);


app.listen(4521,function(err){
    console.log("server Running at 4521")
});