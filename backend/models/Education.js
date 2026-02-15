const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  year: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Education", educationSchema);
