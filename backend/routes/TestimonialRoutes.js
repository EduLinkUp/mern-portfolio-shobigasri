const express = require("express");
const router = express.Router();
const controller = require("../controllers/TestimonialController"); // match case
const auth = require("../middleware/authMiddleware");

router.get("/", controller.getTestimonials);
router.post("/", auth, controller.createTestimonial);
router.delete("/:id", auth, controller.deleteTestimonial);

module.exports = router;
