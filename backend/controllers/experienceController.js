const Experience = require("../models/Experience");

// GET all experiences
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// POST new experience
exports.createExperience = async (req, res) => {
  try {
    const { company, role, duration, description } = req.body;

    const newExperience = new Experience({
      company,
      role,
      duration,
      description,
    });

    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// DELETE experience
exports.deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ msg: "Experience deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
