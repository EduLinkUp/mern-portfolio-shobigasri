require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // ✅ THIS WAS MISSING

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
  app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});


// Routes
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
