module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer,auth, user.create);

  // Retrieve all user
  router.get("/", user.findAll);

  // Retrieve all published user
  router.get("/published", user.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", user.findOne);

  // Update a Tutorial with id
  router.put("/:id", user.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, user.delete);

  // Create a new Tutorial
  router.delete("/", user.deleteAll);


  // Base url Api
  app.use('/api/user', router);
};