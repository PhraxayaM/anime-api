// search.js
const jikanjs  = require('jikanjs');

module.exports = (app) => {

    // Index
    app.get("/", (req, res) => {
        var currentUser = req.user;
        if (currentUser) {
            res.render("search", {currentUser})
        } else {
            res.render("login")
        }
    })


    // SEARCH
    app.post("/search", (req, res) => {
      var currentUser = req.user;
      const title = req.body.title;
      jikanjs.search('anime', title).then((response) => {
          res.render('anime-results', {anime: response.results, currentUser});
          // response.results.forEach(element => {
          //     console.log(`${element.mal_id}: ${element.title} - ${element.episodes} - ${element.airing}`);
          // })
      }).catch((err) => {
          console.error(err); // in case a error happens
      });
    });






}
