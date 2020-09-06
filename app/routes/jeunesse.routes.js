module.exports = app => {
  const jeunesse = require("../controllers/jeunesse.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer,auth, jeunesse.create);

  // Retrieve all jeunesse
  router.get("/", jeunesse.findAll);

  // Retrieve all published jeunesse
  router.get("/published", jeunesse.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", jeunesse.findOne);

  // Update a Tutorial with id
  router.put("/:id", jeunesse.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, jeunesse.delete);

  // Create a new Tutorial
  router.delete("/", jeunesse.deleteAll);


  // Base url Api
  app.use('/api/jeunesse', router);
};