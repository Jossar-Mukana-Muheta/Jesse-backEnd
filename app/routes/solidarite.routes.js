module.exports = app => {
  const solidarite = require("../controllers/solidarite.controller.js");
  const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",multer,auth, solidarite.create);

  // Retrieve all solidarite
  router.get("/", solidarite.findAll);

  // Retrieve all published solidarite
  router.get("/published", solidarite.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", solidarite.findOne);

  // Update a Tutorial with id
  router.put("/:id", solidarite.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, solidarite.delete);

  // Create a new Tutorial
  router.delete("/", solidarite.deleteAll);


  // Base url Api
  app.use('/api/solidarite', router);
};