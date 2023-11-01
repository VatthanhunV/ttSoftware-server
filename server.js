const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Routers
const usersRoutes = require("./routes/users.js");

// middleware
app.use(morgan("common"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Connect to MongoDB server
const MONGODB_URI =
  "mongodb+srv://admin:Sp112233@cluster0.ddv83os.mongodb.net/ttsoftware?retryWrites=true&w=majority&appName=AtlasApp";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use("/api", usersRoutes);

app.listen(5000, () => console.log("Server is running on port 5000"));
