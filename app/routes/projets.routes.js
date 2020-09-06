module.exports = app => {
  const projets = require("../controllers/projets.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer,auth, projets.create);

  // Retrieve all projets
  router.get("/", projets.findAll);

  // Retrieve all published projets
  router.get("/published", projets.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", projets.findOne);

  // Update a Tutorial with id
  router.put("/:id", projets.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, projets.delete);

  // Create a new Tutorial
  router.delete("/", projets.deleteAll);


  // Base url Api
  app.use('/api/projets', router);
};