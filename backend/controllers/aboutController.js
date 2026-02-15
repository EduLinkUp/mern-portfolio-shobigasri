const About = require("../models/About");

exports.getAbout = async (req, res) => {
  const about = await About.findOne();
  res.json(about);
};

exports.updateAbout = async (req, res) => {
  let about = await About.findOne();
  if (!about) {
    about = await About.create({ description: req.body.description });
  } else {
    about.description = req.body.description;
    await about.save();
  }
  res.json(about);
};
