module.exports = app => {
  const espoir = require("../controllers/espoir.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer,auth, espoir.create);

  // Retrieve all espoir
  router.get("/", espoir.findAll);

  // Retrieve all published espoir
  router.get("/published", espoir.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", espoir.findOne);

  // Update a Tutorial with id
  router.put("/:id", espoir.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, espoir.delete);

  // Create a new Tutorial
  router.delete("/", espoir.deleteAll);


  // Base url Api
  app.use('/api/espoir', router);
};