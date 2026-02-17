const express = require("express");
const router = express.Router();

const {
  getEducation,
  createEducation,
  deleteEducation,
} = require("../controllers/educationController");

router.get("/", getEducation);
router.post("/", createEducation);
router.delete("/:id", deleteEducation);

module.exports = router;
