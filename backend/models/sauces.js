const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
  userId: String,
  name: String,
  manufacturer: String,
  description: String,
  imageUrl: String,
  heat: Number,
  mainPepper: String,
  likes: Number,
  dislikes: Number,
  usersLiked: [{ String }], // ou [{userId : String}],
  usersDisliked: [{ String }],
});

module.exports = mongoose.model("sauces", sauceSchema);

// Sauce {
//   _id!: string;
//   name!: string;
//   manufacturer!: string;
//   description!: string;
//   heat!: number;
//   likes!: number;
//   dislikes!: number;
//   imageUrl!: string;
//   mainPepper!: string;
//   usersLiked!: string[];
//   usersDisliked!: string[];
//   userId!: string;
// }
