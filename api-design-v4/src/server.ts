import express from "express";
import path from "path";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Custom Middleware
// app.use((req, res, next) => {
//   req.shhhh_secret = "doggy";
//   next();
// });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/api", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World from express" });
});

app.use("/api", protect, router);

export default app;
