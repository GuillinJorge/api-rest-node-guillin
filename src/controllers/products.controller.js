import * as Model from "../models/Product.js";

export const getAllProducts = async (req, res)=> {

    const {category} = req.query

    const products  = await Model.getAllProducts();


    if (category){
        const productFiltered  = products.filter(item => item.categories.includes(category)
    );
    return  res.json(productFiltered);
    } 
    
    res.json(products);

};

export const searchProducts = async (req, res)=>{
    const {name} = req.query;

    if (!name){
        return  res.status(400).json({error: 'El nombre es requerido'});
    }

    const products  = await Model.getAllProducts();

    const productFiltered = products.filter(item=>item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    if (productFiltered.length == 0){
        return res.status(404).json({error:'No se encontraron productos'});
    }

    res.json(productFiltered);

};

export const getProductById = async (req, res) => {
    const id = req.params.id;

    const product = await Model.getProductById(id);

    if (!product) {
        return res.status(404).json({ error: "No existe el producto" });
    }

    res.json(product);
};


export const createProduct = async (req, res) =>{
    const {name, price, categories} = req.body;
    const product = await Model.createProduct({name, price, categories});
    res.status(201).json(product);
};