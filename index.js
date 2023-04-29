// index.js
// where your node app starts

// import date functions
const { buildResponse, isDateValid } = require('./src/date.js');

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

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

// Date Endpoint
app.get("/api/:date", function (req, res) {
  // get submitted Date
  const SUBMITTED_DATA = req.params.date

  // handle unvalid date
  if (!isDateValid(SUBMITTED_DATA)) {
    res.send({
      error: 'Invalid Date'
    })

    // hanlde valid date
  } else {
    res.send(buildResponse(SUBMITTED_DATA))
  }
});

// Current Date Endpoint
app.get("/api/", function (req, res) {
  const currentDate = new Date()
  res.send(buildResponse(currentDate))
});



// listen for requests :)
var listener = app.listen(process.env.port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
