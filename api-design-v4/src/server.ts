import express from "express";
const app = express();
import path from "path";
import router from "./router";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/api", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World from express" });
});

app.use("/api", router);

export default app;
