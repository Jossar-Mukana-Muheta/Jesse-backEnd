const auth = require('../middleware/auth')
  const multer = require('../middleware/multer-config');

module.exports = app => {
  const event = require("../controllers/event.controller.js");
  

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",auth,multer, event.create);

  // Retrieve all event
  router.get("/", event.findAll);

  // Retrieve all published event
  router.get("/published", event.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", event.findOne);

  // Update a Tutorial with id
  router.put("/:id", event.update);

  // Delete a Tutorial with id
  router.delete("/:id",multer,auth, event.delete);

  // Create a new Tutorial
  router.delete("/", event.deleteAll);


  // Base url Api
  app.use('/api/events', router);
};