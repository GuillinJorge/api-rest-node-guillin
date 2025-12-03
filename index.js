import express from "express";

const app = express();
const PORT = 3000;

const products = [
    {
        id: 1,
        name: "Camiseta Deportiva",
        price: 150,
        categories: ["ropa", "deportes"],
    },
    {
        id: 2,
        name: "Zapatos Running",
        price: 1200,
        categories: ["calzado", "deportes"],
    },
    {
        id: 3,
        name: "Mochila escolar",
        price: 350,
        categories: ["mochilas", "escolar"],
    },
    {
        id: 4,
        name: "Auricular BT",
        price: 800,
        categories: ["tecnología", "audio"],
    },
    {
        id: 5,
        name: "Botella termica",
        price: 220,
        categories: ["hogar", "accesorios"],
    },
]

import mantenimiento from "./src/middlewares/mantenimiento.js";
app.use (mantenimiento);


app.get('/', (req, res) => {
    res.json({'message':"Bienvenidos a nuestra API REST"});
});

app.get("/products", (req, res)=> {

 
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(item => item.id === id);

    if (!product) {
        return res.status(404).json({ error: "No existe el producto" });
    }

    res.json(product);
});


import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});