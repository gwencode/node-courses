import { Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

router.get("/product", (req, res) => {
  // res.json({ message: req.shhhh_secret }); // Custom Middleware
  res.json({ message: "Hello world" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
