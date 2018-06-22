// server.js
// where your node app starts
var bodyParser = require('body-parser');
// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/timestamp/:date_string", function (req, res) {
  var date_string= req.params.date_string;
  var numerica = Number(req.params.date_string);
  
  var data =isNaN(date_string);
  if(data){ // se for verdade ou seja, se for uma data nao valida no padrao iso
    
    var utc = new datedate_string;
    var unix= new Date(req.params.date_string);
    
    
    console.log(data, date_string , unix);
  }else{//se  for valido no parao iso
    var utc = date_string.toUTCString();
    var unix = date_string.getTime()
    
    ////////// https://www.w3schools.com/code/tryit.asp?filename=FSJTQ0RYNZ3B // ajuda 
   
    console.log(data, date_string, req.params.date_string, unix)

  }
 // var date_number = Number(req.params.date_string);
  /*
  if(typeof date_string.getTime() == 'number'){
  console.log('é numero');
      console.log(date_string.getTime());
  console.log(typeof req.params.date_string);
  }
  
  console.log(date_string);
  var utc_date= Number(date_string);
  console.log(typeof utc_date);
*/  
  
  res.json({
    unix: unix ,
    utc: utc
  });
  
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

/*

function myFunction() {
	var imput ='1589079600000';
     if(isNaN(imput)){
      var num = 'é palavra';
      var d3= typeof imput;
      var d = Date.parse(imput );
      var d2= typeof d;
      var dat = new Date(d).toUTCString();
        
    }else{
    var num = 'é numero';
    var dat = new Date(Number(imput));
     var d = Date.parse(dat );
    
    }
    
    
   
    
    
    document.getElementById("demo").innerHTML = d +' milisegundos <br> '+dat  +' data utc <br> '+d2+' tipo do d  <br>'+d3 +' tipo do imput  <br>'+num;
     document.getElementById("demo1").innerHTML ='1';
}
*/