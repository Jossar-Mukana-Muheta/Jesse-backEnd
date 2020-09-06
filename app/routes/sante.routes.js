module.exports = app => {
  const sante = require("../controllers/sante.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer,auth, sante.create);

  // Retrieve all sante
  router.get("/", sante.findAll);

  // Retrieve all published sante
  router.get("/published", sante.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", sante.findOne);

  // Update a Tutorial with id
  router.put("/:id", sante.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, sante.delete);

  // Create a new Tutorial
  router.delete("/", sante.deleteAll);


  // Base url Api
  app.use('/api/sante', router);
};