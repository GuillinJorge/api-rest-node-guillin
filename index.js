// Carga las variables de entorno desde el archivo .env
import 'dotenv/config';

// Importa Express para crear el servidor
import express from "express";
const app = express();

// Middleware para permitir recibir datos en formato JSON en las solicitudes
app.use(express.json());

// Obtiene el puerto desde .env o usa 3001 como valor por defecto
const PORT = process.env.PORT || 3001;

// Importa y aplica el middleware de mantenimiento
// Este middleware puede cortar el acceso temporalmente si la API está en mantenimiento
import mantenimiento from "./src/middlewares/mantenimiento.js";
app.use(mantenimiento);

// Ruta principal de prueba para verificar que la API funciona
app.get('/', (req, res) => {
    res.json({ 'message': "Bienvenidos a nuestra API REST" });
});

// Rutas de autenticación (registro y login)
import authRouter from './src/routes/auth.router.js';
app.use('/api/auth', authRouter);

// Rutas relacionadas a productos
import productsRouter from './src/routes/products.router.js';
app.use('/api', productsRouter);

// Middleware para rutas no encontradas (404)
import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

// Inicia el servidor y escucha peticiones en el puerto configurado
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});