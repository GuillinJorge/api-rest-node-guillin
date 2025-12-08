import * as Model from "../models/Product.js";

// Obtener todos los productos o filtrarlos por categoría
export const getAllProducts = async (req, res) => {
  const { category } = req.query;

  // Si viene ?category= , filtra desde el modelo
  if (category) {
    const productsByCategory = await Model.getProductByCategory(category);
    return res.json(productsByCategory);
  }

  // Si no, devuelve todo
  const products = await Model.getAllProducts();
  res.json(products);
};

// Buscar productos por nombre
export const searchProducts = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const products = await Model.getAllProducts();

  const productFiltered = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (productFiltered.length === 0) {
    return res.status(404).json({ error: "No se encontraron productos" });
  }

  res.json(productFiltered);
};

// Obtener producto por ID
export const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await Model.getProductById(id);

  if (!product) {
    return res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};

// Crear un producto nuevo
export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const product = await Model.createProduct({ name, price, categories });

  res.status(201).json(product);
};

// Actualizar producto (PUT → reemplazo total)
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categories } = req.body;

  // Validaciones
  if (!name || !price || !categories) {
    return res
      .status(422)
      .json({ error: "Nombre, precio o categorías son requeridos" });
  }

  const updated = await Model.updateProduct(id, { name, price, categories });

  if (!updated) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(updated);
};

// Actualización parcial del producto (PATCH)
export const updatePatchProduct = async (req, res) => {
  const { id } = req.params;

  const data = {};

  // Construcción dinámica de campos actualizables
  if (req.body.name !== undefined) data.name = req.body.name;
  if (req.body.price !== undefined) data.price = req.body.price;
  if (req.body.categories !== undefined) data.categories = req.body.categories;

  if (Object.keys(data).length === 0) {
    return res.status(422).json({
      error: "No se proporcionaron campos para actualizar el producto",
    });
  }

  const updated = await Model.updatePatchProduct(id, data);

  if (!updated) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(updated);
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await Model.deleteProduct(id);

  if (!deleted) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  // 204 → Sin contenido
  res.status(204).send();
};
