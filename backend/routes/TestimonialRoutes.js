const express = require("express");
const router = express.Router();
const {
  getTestimonials,
  createTestimonial,
  deleteTestimonial,
} = require("../controllers/TestimonialController");

// GET all testimonials
router.get("/", getTestimonials);

// POST new testimonial
router.post("/", createTestimonial);

// DELETE testimonial
router.delete("/:id", deleteTestimonial);

module.exports = router;
