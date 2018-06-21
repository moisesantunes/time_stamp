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
  var date_string= new Date(req.params.date_string);
  
  var date_number = Number(req.params.date_string);
  console.log(date_number);
  /*
  console.log(date_string);
  var utc_date= Number(date_string);
  console.log(typeof utc_date);
*/  
  res.json({
    unix: date_string.getTime() ,
    utc: date_string.toUTCString()
  });
  
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});