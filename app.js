const express = require("express")
const exphbs = require('express-handlebars');
const app =  express()
const bodyParser = require('body-parser');
const request = require("request")
const jikanjs  = require('jikanjs');
const port = 8080
const url = "https://api.jikan.moe/v3/search/anime/?q=Fate/Zero&page=1"
require('./controllers/auth.js')(app);
// Set db
require('./data/reddit-db');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get("/", (req, res) => {
//     // res.json("Welcome to the car api")
//     request(url, function (error, response, body) {
//       console.log('error:', error);
//       console.log('statusCode:', response && response.statusCode);
//       console.log('body:', body);
//       res.json(body)
//     });
// })

app.get("/", (req, res) => {
    res.render("index", {})
    // jikanjs.loadAnime(19815, 'episodes').then((response) => {
    //     response.episodes.forEach(element => {
    //         console.log(`${element.episode_id}: ${element.title} - ${element.title_romanji} - ${element.title_japanese}`);
    //     })
    // }).catch((err) => {
    //     console.error(err); // in case a error happens
    // });
})

const search = require('./controllers/search')(app);

app.listen(port, () => {
    console.log("The app is live on", port)
})
module.exports = app;
