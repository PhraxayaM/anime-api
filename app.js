require('dotenv').config();
const express = require("express")
const exphbs = require('express-handlebars');
const app =  express()
const bodyParser = require('body-parser');
const request = require("request")
const jikanjs  = require('jikanjs');
const port = 8080
const url = "https://api.jikan.moe/v3/search/anime/?q=Fate/Zero&page=1"
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Set db
require('./data/reddit-db');
app.use(cookieParser()); // Add this after you initialize express.


// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);

const search = require('./controllers/search')(app);
const auth = require('./controllers/auth.js')(app);

app.listen(port, () => {
    console.log("The app is live on", port)
})
module.exports = app;
