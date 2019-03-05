// search.js
const jikanjs  = require('jikanjs');

module.exports = (app) => {

    // SEARCH
    app.post("/search", (req, res) => {
      const title = req.body.title;
      jikanjs.search('anime', title).then((response) => {
          res.render('anime-results', {anime: response.results});
          // response.results.forEach(element => {
          //     console.log(`${element.mal_id}: ${element.title} - ${element.episodes} - ${element.airing}`);
          // })
      }).catch((err) => {
          console.error(err); // in case a error happens
      });
    });



}
