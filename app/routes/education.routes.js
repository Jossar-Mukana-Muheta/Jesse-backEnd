module.exports = app => {
  const education = require("../controllers/education.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer, education.create);

  // Retrieve all education
  router.get("/", education.findAll);

  // Retrieve all published education
  router.get("/published", education.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", education.findOne);

  // Update a Tutorial with id
  router.put("/:id", education.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, education.delete);

  // Create a new Tutorial
  router.delete("/", education.deleteAll);


  // Base url Api
  app.use('/api/education', router);
};