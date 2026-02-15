
const Testimonial = require("../models/Testimonial");

exports.getTestimonials = async (req, res) => {
  const data = await Testimonial.find();
  res.json(data);
};

exports.createTestimonial = async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json(testimonial);
};

exports.deleteTestimonial = async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
