# API REST con Node.js y Firebase

## Descripción
API REST para la gestión de productos desarrollada con Node.JS y Express.

## Instalación

1. Debemos clonar el repositorio

2. Instalamos dependencias:

```bash
npm install
```

3. Configuramos la variable de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```
Luego proseguimos editando el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo

```bash
npm run dev
```

## Domentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Repuesta ejemplo:**

```json
{
        "id": "HRxAnMKBj9LbqJPKkj5k",
        "name": "Producto 1",
        "price": 1500,
        "categories": [
            "categoria 1",
            "categoria 2"
        ]
    }
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descipción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parametros:**
    - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json
[{"id":1,"name":"Camiseta Deportiva","price":150}]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descipción:** Devuelve un producto especifico por su ID.
- **Parametros:**
    - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/HRxAnMKBj9LbqJPKkj5k`
- **Respuesta ejemplo:**

```json
{
        "id": "HRxAnMKBj9LbqJPKkj5k",
        "name": "Producto 1",
        "price": 1500,
        "categories": [
            "categoria 1",
            "categoria 2"
        ]
    }
```


### Crear un PRODUCTO  

-**POST** `/products`
-**Descripción:** Crea un nuevo producto en nuestra base de Firebase
-**Body (JSON):**

```json
 {
        "name": "Producto 1",
        "price": 1500,
        "categories": [
            "categoria 1",
            "categoria 2"
        ]
    }
```

-**Respuesta ejemplo:**

```json
{
        "id": "HRxAnMKBj9LbqJPKkj5k",
        "name": "Producto 1",
        "price": 1500,
        "categories": [
            "categoria 1",
            "categoria 2"
        ]
    }
```


### Eliminar un producto

- **DELETE** `/products/:id`
- **DESCRIPCIÓN** Elimina un producto por su ID.
- **Parámetros:**
- `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content