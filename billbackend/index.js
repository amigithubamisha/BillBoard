const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
const contactRoutes = require("./models/contactModel");

dotenv.config();

// Enable CORS middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://bill-board-front.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Require models and routes
require('./models/model');
require('./models/post');
app.use(require("./routes/auth"));
app.use(require("./routes/createPost"));
app.use(require("./routes/contactRoutes"));

const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
