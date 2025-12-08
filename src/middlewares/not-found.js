// Middleware para manejar rutas no encontradas (404)
// --------------------------------------------------
// Este middleware se ejecuta cuando ninguna ruta definida coincide
// con la solicitud realizada por el cliente.
//
// Su función es devolver una respuesta indicando que el recurso
// solicitado NO existe dentro de nuestra API.
//
// Se coloca al final del archivo principal (server.js o app.js)
// para que actúe como “última opción”.

export default (req, res, next) => {
    res.status(404).json({ error: "NOT FOUND" });
};
