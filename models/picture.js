var mongoose = require("mongoose");

var pictureSchema = new mongoose.Schema({
  image: String
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model("Picture", pictureSchema);