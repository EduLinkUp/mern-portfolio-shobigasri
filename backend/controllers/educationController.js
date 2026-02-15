const Education = require("../models/Education");

exports.addEducation = async (req, res) => {
  try {
    const edu = await Education.create(req.body);
    res.status(201).json(edu);
  } catch (err) {
    res.status(500).json({ msg: "Error adding education" });
  }
};

exports.getEducation = async (req, res) => {
  const edu = await Education.find().sort({ createdAt: -1 });
  res.json(edu);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
