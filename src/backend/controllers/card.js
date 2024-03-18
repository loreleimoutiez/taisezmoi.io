/* eslint-disable */
const Card = require("../models/card");
const fs = require("fs");

exports.getAllCards = (req, res, next) => {
  Card.find()
    .then((card) => {
      res.status(200).json(card);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

exports.createCard = (req, res, next) => {
  const cardObject = JSON.parse(req.body.card);
  delete cardObject._id;
  const card = new Card({
    ...cardObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  card
    .save()
    .then(() => res.status(201).send({ message: "Carte enregistrée" }))
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

exports.getOneCard = (req, res, next) => {
  Card.findOne({ _id: req.params.id })
    .then((card) => {
      res.status(200).json(card);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyCard = (req, res, next) => {
  const cardObject = req.file
    ? {
        ...JSON.parse(req.body.card),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
      }
    : { ...req.body };

  Card.findOne({ _id: req.params.id })
    .then((card) => {
      if (req.file) {
        const filename = card.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, (error) => {
          if (error) {
            console.error("Erreur lors de la suppression de l'image :", error);
          } else {
            console.log("Ancienne image supprimée avec succès");
          }
        });
      }

      Card.updateOne({ _id: req.params.id }, { ...cardObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Carte modifiée" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteCard = (req, res, next) => {
  Card.findOne({ _id: req.params.id })
    .then((card) => {
      const filename = card.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Card.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Carte supprimée" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(400).json({ error }));
};
