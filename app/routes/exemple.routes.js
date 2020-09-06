module.exports = app => {
  const exemple = require("../controllers/exemple.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", exemple.create);

  // Retrieve all exemple
  router.get("/", exemple.findAll);

  // Retrieve all published exemple
  router.get("/published", exemple.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", exemple.findOne);

  // Update a Tutorial with id
  router.put("/:id", exemple.update);

  // Delete a Tutorial with id
  router.delete("/:id", exemple.delete);

  // Create a new Tutorial
  router.delete("/", exemple.deleteAll);


  // Base url Api
  app.use('/api/exemple', router);
};