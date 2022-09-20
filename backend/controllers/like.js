const Sauce = require("../models/sauces");
const like = require("../constante");

exports.likeSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params._id })
    .then((sauce) => {
      let updateLike;
      const userId = req.body.userId;
      const like = req.body.like;
      if (!sauce.usersLiked.includes(userId) && like === 1) {
        updateLike = {
          $inc: { likes: 1 },
          $push: { usersLiked: userId },
        };
      }
      if (sauce.usersLiked.includes(userId) && like === 0) {
        updateLike = {
          $inc: { likes: -1 },
          $pull: { usersLiked: userId },
        };
      }
      if (!sauce.usersDisliked.includes(userId) && like === -1) {
        updateLike = {
          $inc: { dislikes: 1 },
          $push: { usersDisliked: userId },
        };
      }
      if (sauce.usersDisliked.includes(userId) && like === 0) {
        updateLike = {
          $inc: { dislikes: -1 },
          $pull: { usersDisliked: userId },
        };
      }
      Sauce.updateOne({ _id: req.params._id }, updateLike)
        .then(() => res.status(201).json({ message: "Sauce Likée" }))
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(404).json({ error }));
};
