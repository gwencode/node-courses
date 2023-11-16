const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/api", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World from express" });
});

module.exports = app;
