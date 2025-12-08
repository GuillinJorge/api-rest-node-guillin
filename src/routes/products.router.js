// Importamos Router desde Express para crear rutas modulares
import { Router } from "express";
const router = Router();

// Importamos todas las funciones que manejan la lógica de productos
import { 
    getAllProducts, 
    searchProducts, 
    getProductById, 
    createProduct, 
    deleteProduct, 
    updateProduct, 
    updatePatchProduct 
} from "../controllers/products.controller.js";

// Middleware para verificar el token JWT
import { verifyToken } from "../middlewares/verify-token.js";

// GET /api/products → obtiene todos los productos
router.get("/products", getAllProducts);

// GET /api/products/search → búsqueda por nombre, categoría, etc.
router.get('/products/search', searchProducts);

// GET /api/products/:id → busca un producto por ID
router.get("/products/:id", getProductById);

// POST /api/products → crea un producto (requiere token)
router.post('/products', verifyToken, createProduct);

// PUT /api/products/:id → reemplaza un producto completo (requiere token)
router.put('/products/:id', verifyToken, updateProduct);

// PATCH /api/products/:id → actualiza parcialmente un producto (requiere token)
router.patch('/products/:id', verifyToken, updatePatchProduct);

// DELETE /api/products/:id → elimina un producto (requiere token)
router.delete('/products/:id', verifyToken, deleteProduct);

// Exportamos el router para usarlo en el servidor
export default router;