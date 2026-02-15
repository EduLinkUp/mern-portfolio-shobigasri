const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getExperiences,
  createExperience,
  deleteExperience,
} = require("../controllers/experienceController");

router.get("/", getExperiences);
router.post("/", authMiddleware, createExperience);
router.delete("/:id", authMiddleware, deleteExperience);

module.exports = router;
