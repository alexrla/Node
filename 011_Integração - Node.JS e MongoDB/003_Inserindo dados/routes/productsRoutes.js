import express from "express";
import ProductController from "../controllers/ProductController.js";

const router = express.Router();

router.get("/create", ProductController.createProduct);
router.post("/create", ProductController.createProductPost);
router.get("/", ProductController.showProducts);

export default router;