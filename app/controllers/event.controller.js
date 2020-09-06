const db = require("../models");
const Event = db.event;
const fs = require("fs");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const eventObjet = JSON.parse(req.body.event);
    const event = new Event({
        ...eventObjet,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`});

        event
        .save()
        .then(res.status(201).json({ message: "évenement enregistré" }))
        .catch(res.status(401).json({ error}));
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Event.find()
        .then(events=> res.status(200).json(events))
        .catch(error => res.status(400).json({error}))
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Event.findOne({ _id: req.body.id })
    .then(event => {
      const filename = event.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Event.deleteOne({ _id: req.body.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(400).json({ error: 'mauvaise requete' }));
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};