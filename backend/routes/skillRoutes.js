const express = require("express");
const router = express.Router();

const {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const auth = require("../middleware/authMiddleware");

// PUBLIC ROUTE
router.get("/", getSkills);

// PROTECTED ROUTES (Admin Only)
router.post("/", auth, createSkill);
router.put("/:id", auth, updateSkill);
router.delete("/:id", auth, deleteSkill);

module.exports = router;
