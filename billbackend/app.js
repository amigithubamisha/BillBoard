const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
const contactRoutes = require("./models/contactModel");

dotenv.config();
// Enable CORS middleware
app.use(cors());
app.use(express.json());

require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/contactRoutes"));
const port = process.env.PORT || 5000;
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.on("connected", () => {
    console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("error", () => {
    console.log("Not connected to MongoDB");
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});