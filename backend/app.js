const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const app = express();
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/users");

// Connection Mongoose
mongoose
  .connect(
    "mongodb+srv://EricHdn:MDBGOfilyta26@cluster0.zdgr5vh.mongodb.net/projet6Data?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  next();
});

// lancement d'express
app.use(express.json());
// app.use(bodyParser.json());

//logique de routes
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
