import { carritos } from "../models/carritos.js";

export const getCarritos = async (req, res) => {
    const Carritos = await carritos.findAll()
    res.json(Carritos)

} 

export const createCarrito = async (req, res) => {
    const { Estado } = req.body
    const newCarrito = await carritos.create({
        Estado
    })
    res.json(newCarrito)
};  

export const updateCarrito = async (req, res)=>{
    const {id}=req.params;
    const {estado}=req.body;
    const carrito = await carritos.upsert({id,estado});

    console.log(carrito)
    res.send('Updating')
};

export const deleteCarrito = async (req, res)=>{
    try{
        const {id}= req.params;
        await carritos.destroy({
            where:{
                id,
            }
        })
        res.senStatus(204)
    }catch(error){
        return res.stautus(500).json({error})
    }
};