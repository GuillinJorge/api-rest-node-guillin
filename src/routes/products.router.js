import { Router } from "express";

const router = Router();

import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct, updateProduct, updatePatchProduct } from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

router.get("/products", getAllProducts);
router.get('/products/search',searchProducts);
router.get("/products/:id", getProductById);

router.post('/products', verifyToken, createProduct);

router.put('/products/:id', updateProduct);

router.patch('/products/:id', updatePatchProduct);

router.delete('/products/:id', deleteProduct );


export default router;