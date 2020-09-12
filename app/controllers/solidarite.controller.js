const db = require("../models");
const Solidarite = db.solidarite;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const solidariteObjet = JSON.parse(req.body.solidarite);
    const solidarite = new Solidarite({
        ...solidariteObjet,
        imageUrl: `https://jossar-dev.fr/images/${
          req.file.filename
        }`});

        solidarite
        .save()
        .then(data=> res.status(201).json(data))
        .catch(error =>res.status(401).json({ error}));
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Solidarite.find()
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
  Solidarite.findOne({ _id: req.body.id })
    .then(solidarite => {
      const filename = solidarite.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Solidarite.deleteOne({ _id: req.body.id })
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