require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const factor = "10";

exports.signup = (req, res, next) => {
  const passwordUser = req.body.password;
  const emailUser = req.body.email;

  bcrypt
    .hash(passwordUser, factor)
    .then((hash) => {
      const user = new User({
        email: emailUser,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "utilisateur créé" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  const passwordUser = req.body.password;
  const emailUser = req.body.email;
  User.findOne({ email: emailUser })
    .then((user) => {
      if (!user) {
        res
          .status(401)
          .json({ message: "indentifiants/Mot de passe incorrect" });
      }
      bcrypt
        .compare(passwordUser, user.password)
        .then((valid) => {
          if (!valid) {
            res.status(401).json({
              message: "indentifiant/Mot de passes incorrect",
            });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, `${process.env.secretKey}`, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
