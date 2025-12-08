import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();  // Crea un router para las rutas de autenticación

// POST → Registro de usuario
router.post("/register", register);

// POST → Inicio de sesión (devuelve un JWT)
router.post("/login", login);

export default router;