const db = require("../models");
const Jeunesse = db.jeunesse;
const fs = require("fs");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const jeunesseObjet = JSON.parse(req.body.jeunesse);
    const jeunesse = new Jeunesse({
        ...jeunesseObjet,
        imageUrl: `https://jossar-dev.fr/images/${
          req.file.filename
        }`});

        jeunesse
        .save()
        .then(data=> res.status(201).json(data))
        .catch(error =>res.status(401).json({ error}));
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Jeunesse.find()
        .then(images=> res.status(200).json(images))
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
  Jeunesse.findOne({ _id: req.body.id })
    .then(jeunesse => {
      const filename = jeunesse.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Jeunesse.deleteOne({ _id: req.body.id })
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