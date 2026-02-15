const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");


// CREATE PROJECT
exports.createProject = async (req, res) => {
  try {
    const { title, description, github, live } = req.body;

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { folder: "portfolio_projects" },
        async (error, result) => {
          if (error) {
            return res.status(500).json({ msg: "Image upload failed" });
          }

          imageUrl = result.secure_url;

          const project = new Project({
            title,
            description,
            github,
            live,
            image: imageUrl,
          });

          await project.save();
          res.status(201).json(project);
        }
      );

      result.end(req.file.buffer);
    } else {
      const project = new Project({
        title,
        description,
        github,
        live,
      });

      await project.save();
      res.status(201).json(project);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};


// GET PROJECTS
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};


// DELETE PROJECT
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: "Project deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
