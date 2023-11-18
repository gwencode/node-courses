import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "./handlers/product";
import { validationError } from "./handlers/validationError";

const router = Router();

router.get("/product", (req, res) => {
  // res.json({ message: req.shhhh_secret }); // Custom Middleware
  res.json({ message: "Hello world" });
});
router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  body("name").isString(),
  body("price").isNumeric(),
  validationError,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  body("price").isNumeric(),
  validationError,
  createProduct
);

router.delete("/product/:id", deleteProduct);

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
