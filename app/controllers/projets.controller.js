const db = require("../models");
const Projet = db.projets;
const fs = require("fs");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const projetObjet = JSON.parse(req.body.projet);
    const projet = new Projet({
        ...projetObjet,
        imageUrl: `https://jossar-dev.fr/images/${
          req.file.filename
        }`});

        projet
        .save()
        .then(()=>res.status(201).json({ message: "évenement enregistré" }))
        .catch(error => res.status(401).json({ error}));
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Projet.find()
        .then(projets=> res.status(200).json(projets))
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
  Projet.findOne({ _id: req.body.id })
    .then(projet => {
      const filename = projet.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Projet.deleteOne({ _id: req.body.id })
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