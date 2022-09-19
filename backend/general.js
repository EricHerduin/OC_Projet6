exports.pushLike = {};

exports.pullLike = function (valeur, likeKey) {
  $inc: {
    likes: valeur;
  }
  $pull: {
    likeKey: req.body.userId;
  }
};
