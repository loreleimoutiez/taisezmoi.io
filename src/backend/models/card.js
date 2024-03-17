/* eslint-disable */
const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("card", cardSchema);
