var url = require('url');

var moment =require('moment-timezone');



exports.time=function (req,resp){
/**
 * down 3 lines usefull when ur running client and server in two diff port
 

    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    resp.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    resp.send(t);
 */
    resp.render('time_ajax')
}

exports.timezone=function(req,resp){

    
    var input =url.parse(req.url,true).query;
console.log(input);

    var t=moment().tz(input.time).format();
    console.log(t)

/**
 * down 3 lines usefull when ur running client and server in two diff port
 

    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    resp.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  
 */
resp.send(t);
  

}
// exports.timezone2=function(req,resp){
//     var q=JSON.parse(JSON.stringify(req.body));

// var input ={
//     time: q.time
// }


//     var t=moment().tz(input.time).format();
//     console.log(t)
//     resp.send(t);

// }