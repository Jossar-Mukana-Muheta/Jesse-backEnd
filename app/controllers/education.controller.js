const db = require("../models");
const Education = db.education;
const fs = require("fs");
const {format} = require('util');
const Multer = require('multer');

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const educationObjet = JSON.parse(req.body.education);
  const education = new Education({
    ...educationObjet,
    imageUrl: `https://jossar-dev.fr/images/${
          req.file.filename
        }`});

  education
    .save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(401).json({ error }));
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Education.find()
    .then((images) => res.status(200).json(images))
    .catch((error) => res.status(400).json({ error }));
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Education.findOne({ _id: req.body.id })
    .then((education) => {
      const filename = education.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Education.deleteOne({ _id: req.body.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(400).json({ error: "mauvaise requete" }));
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
