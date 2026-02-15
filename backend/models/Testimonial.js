const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  company: String
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
