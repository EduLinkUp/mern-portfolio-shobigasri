const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
  deleteProject,
} = require("../controllers/projectController");

const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.post("/", auth, upload.single("image"), createProject);
router.get("/", getProjects);
router.delete("/:id", auth, deleteProject);

module.exports = router;
