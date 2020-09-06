const db = require("../models");
const Sante = db.sante;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const santeObjet = JSON.parse(req.body.sante);
    const sante = new Sante({
        ...santeObjet,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`});

        sante
        .save()
        .then(data=> res.status(201).json(data))
        .catch(error =>res.status(401).json({ error}));
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Sante.find()
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
  Sante.findOne({ _id: req.body.id })
    .then(sante => {
      const filename = sante.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Education.deleteOne({ _id: req.body.id })
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