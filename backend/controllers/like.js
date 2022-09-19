const Sauce = require("../models/sauces");
const like = require("../general");

exports.likeSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params._id })
    .then((sauce) => {
      if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1) {
        Sauce.updateOne(
          { _id: req.params._id },
          {
            $inc: { likes: 1 },
            $push: { usersLiked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Sauce Likée" }))
          .catch((error) => res.status(400).json({ error }));
      }
      if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0) {
        Sauce.updateOne(
          { _id: req.params._id },
          {
            $inc: { likes: -1 },
            $pull: { usersLiked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Sauce Like à O" }))
          .catch((error) => res.status(400).json({ error }));
      }
      if (
        !sauce.usersDisliked.includes(req.body.userId) &&
        req.body.like === -1
      ) {
        Sauce.updateOne(
          { _id: req.params._id },
          {
            $inc: { dislikes: 1 },
            $push: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Sauce Dislikée" }))
          .catch((error) => res.status(400).json({ error }));
      }
      if (
        sauce.usersDisliked.includes(req.body.userId) &&
        req.body.like === 0
      ) {
        Sauce.updateOne(
          { _id: req.params._id },
          {
            $inc: { dislikes: -1 },
            $pull: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Sauce Dislike à 0" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })

    .catch((error) => res.status(404).json({ error }));
};
