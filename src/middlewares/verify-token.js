import jwt from "jsonwebtoken";   // Importamos jsonwebtoken para verificar el token JWT

// Middleware para verificar tokens JWT en las rutas protegidas
export const verifyToken = (req, res, next) =>{

    // Obtenemos el header Authorization enviado por el cliente
    const authHeader = req.headers.authorization;

    // Validamos que el header exista y que comience con la palabra "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    try {
        // Extraemos el token eliminando el "Bearer "
        const token = authHeader.split(" ")[1];

        // Verificamos el token usando nuestra clave secreta del .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Guardamos la información del usuario dentro del request
        // para poder usarla en las rutas protegidas
        req.user = decoded;

        // Si todo salió bien, seguimos con el siguiente middleware o controlador
        next();

    } catch (err) {
        // Si el token es inválido o expiró, devolvemos error 401
        return res.status(401).json({ message: "Token inválido" });
    }
};
