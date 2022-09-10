const Sauce = require("../models/sauces");

exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
    ...req.body.name,
  });

  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {};

exports.deleteSauce = (req, res, next) => {};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ id: req.params._id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllSauce = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

exports.likeSauce = (req, res, next) => {};
