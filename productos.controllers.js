import { productos } from "../models/productos.js";

export const getProductos = async (req, res) => {
    const Productos = await productos.findAll()
    res.json(Productos)
}

export const createProducto = async (req, res) => {
    const { descripcion, precio } = req.body
    const newProducto = await productos.create({
        descripcion,
        precio
    })
    res.json(newProducto)
};

export const updateProducto = async (req, res)=>{
    const{id}=req.params;
    const{descripcion}=req.body;
    const {precio}=req.body;

    const producto= await productos.upsert({id,descripcion,precio});
    console.log(producto);
    res.send('Updating')
};

export const deleteProducto = async (req, res)=>{
    try{
        const{id}=req.params;
        await productos.destroy({
            where:{
                id
            }
        })
        res.sendStatus(204)
    }catch(error){
        return res.sendsatus(500).json({error})
    }
};