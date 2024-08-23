import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productControllers.js";

const router = express.Router();

// create product

router.post("/", createProduct);
router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);
// get singleProduct
router.get("/:id", getProductById);

export default router;