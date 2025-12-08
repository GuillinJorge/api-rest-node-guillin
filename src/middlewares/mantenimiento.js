// Middleware para registrar actividad o activar un modo de mantenimiento
export default (req, res, next) => {

    // Ejemplo: registrar el método HTTP de cada request en consola
    console.log(req.method);

    // Si quisieras activar modo mantenimiento, descomentar:
    // return res.json({ message: "API en mantenimiento" });

    // Continuamos hacia la siguiente ruta o middleware
    next();
};
