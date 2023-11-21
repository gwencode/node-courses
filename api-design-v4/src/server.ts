import express from "express";
import path from "path";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signinUser } from "./handlers/user";

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

// By default, express.static will look for an index.html file in the root directory
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("public/index.html"));
// });

app.get("/api", (req, res) => {
  // throw new Error("Something went wrong"); // This will be caught by the error handler
  res.status(200);
  res.json({ message: "Hello World from express" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signinUser);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ message: "Something broke" });
});

export default app;
