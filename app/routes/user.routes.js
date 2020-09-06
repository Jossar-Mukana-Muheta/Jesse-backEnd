module.exports = app => {
  const user = require("../controllers/user.controller.js");
  

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/signup", user.signup);
  router.post("/login", user.login);



  // Base url Api
  app.use('/api/auth', router);
};