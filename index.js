import express from "express";

const app = express();
const PORT = 3000;


import mantenimiento from "./src/middlewares/mantenimiento.js";
app.use (mantenimiento);


app.get('/', (req, res) => {
    res.json({'message':"Bienvenidos a nuestra API REST"});
});

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});