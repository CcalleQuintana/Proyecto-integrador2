import { carritos_productos } from "../models/carritos_productos.js";

export const getCarritos_productos = async (req, res) => {
    const Carritos_productos = await carritos_productos.findAll()
    res.json(Carritos_productos)
}

export const createCarritos_producto = async (req, res) => {
    const { cantidad } = req.body
    const newCarritos_producto = await carritos_productos.create({
        cantidad
    })
    res.json(newCarritos_producto)
};

export const updateCarrito_producto = async (req, res) => {
    const { id } = req.params;
    const { cantidad } = req.body;

    const Carrito_producto = await carritos_productos.upsert({ id, cantidad });
    
    Carrito_producto.cantidad
    console.log(Carrito_producto)
    res.send('Updating')
};
export const deleteCarrito_producto = async (req, res) => {
    try {
        const { id } = req.params;
        await carritos_productos.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ error })
    }
};

