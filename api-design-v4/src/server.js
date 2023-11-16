import express from "express";
import path from "path";
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/api", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World from express" });
});

export default app;
