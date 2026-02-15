router.post("/", auth, createBlog);
router.get("/", getBlogs);
router.delete("/:id", auth, deleteBlog);
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const auth = require("../middleware/authMiddleware");

router.get("/", blogController.getBlogs);
router.post("/", auth, blogController.createBlog);
router.put("/:id", auth, blogController.updateBlog);
router.delete("/:id", auth, blogController.deleteBlog);

module.exports = router;
