const mongoose = require("mongoose");

const hatSchema = new mongoose.Schema({
  hat_style: {
    type:String,
    minlength:[0],
    maxlength:[20]
  },
  size: String,
  price: {
    type: Number,
    min: [0],
    max: [1000]
  }
});

module.exports = mongoose.model("hat", hatSchema);
