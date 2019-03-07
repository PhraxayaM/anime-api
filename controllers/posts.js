const Post = require('../models/post');

require('./controllers/posts.js')(app);
module.exports = app => {
  // CREATE
  app.post("/posts/new", (req, res) => {
    console.log(req.body);
  });
};
