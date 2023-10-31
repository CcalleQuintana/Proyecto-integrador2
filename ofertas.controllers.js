import { ofertas } from "../models/ofertas.js";

export const getOfertas = async (req, res) => {
    const Ofertas = await ofertas.findAll()
    res.json(Ofertas)
}
export const createOferta = async (req, res) => {
    const {id,nombre,descripcion,estados,inicio,fin } = req.body
    const newOferta = await ofertas.create({
        id,
        nombre,
        descripcion,
        estados,
        inicio,
        fin
    })
    res.json(newOferta)
}

export const updateOferta = async (req, res)=>{
    const {id}= req.params;
    const {nombre}=req.body;
    const {descripcion}=req.body;
    const {estados}=req.body;
    const {inicio}=req.body;
    const {fin}=req.body; 
    const oferta = await ofertas.upsert({id,nombre,descripcion,estados,inicio,fin});

    console.log(oferta)
    res.send('Updating')
};

export const deleteOferta = async (req, res)=>{
    try{
        const {id}= req.params;
        await ofertas.destroy({
            where:{
                id
            }
        })
        res.senStatus(204)
    }catch (error){
        return res.status(500).json({error})
    }
};