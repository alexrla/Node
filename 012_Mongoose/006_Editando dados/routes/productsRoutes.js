import express from "express";
import ProductController from "../controllers/ProductController.js";

const router = express.Router();

router.get("/create", ProductController.createProduct);
router.post("/create", ProductController.createProductPost);
router.get("/", ProductController.showProducts);
router.get("/:id", ProductController.getProduct);
router.get("/edit/:id", ProductController.editProduct);
router.post("/edit", ProductController.editProductPost);

/*
    router.post("/remove/:id", ProductController.removeProduct);
*/

export default router;