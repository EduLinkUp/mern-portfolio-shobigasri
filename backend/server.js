require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));

// (Later we will add projects, contact, about etc)

// Default Route (optional)
app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);
const experienceRoutes = require("./routes/experienceRoutes");
app.use("/api/experience", experienceRoutes);
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);
const testimonialRoutes = require("./routes/testimonialRoutes");
app.use("/api/testimonials", testimonialRoutes);




