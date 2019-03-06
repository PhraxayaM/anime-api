const SignUp = require('../models/sign-up');

module.exports = (app) => {
  // SIGN UP FORM
  app.get("/sign-up", (req, res) => {
    res.render("sign-up");
  });
  const User = require("../models/user");

  // SIGN UP POST
  app.post("/sign-up", (req, res) => {
    // Create User
    const user = new User(req.body);

    user
      .save()
      .then(user => {
        res.redirect("/");
      })
      .catch(err => {
        console.log(err.message);
      });
  });
};
