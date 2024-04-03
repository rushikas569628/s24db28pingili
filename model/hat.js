const mongoose = require("mongoose")
const hatSchema = new mongoose.Schema({
hat_style: String,
size: String,
price: Number
})
module.exports = mongoose.model("hat",
hatSchema)
