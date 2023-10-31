import { categorias } from "../models/categorias.js";

export const getCategorias =async (req, res) =>{
    const Categorias =await categorias.findAll()
    res.json(Categorias)
}

export const createCategoria = async (req, res)=>{
    const {nombre, descripcion, estado} = req.body
    const newCategorias =await categorias.create({
        nombre,
        descripcion,
        estado
    })
    res.json(newCategorias)
};

export const updateCategoria = async (req, res)=>{
    const {id}=req.params;
    const{nombre}=req.body;
    const{descripcion}=req.body;
    const{estado}=req.body;

    const categoria = await categorias.upsert({id,nombre,descripcion,estado})
    console.log(categoria)
    res.send('Updating')
};

export const deleteCategoria = async (req, res)=>{
    try{
        const {id}=req.params;
        await categorias.destroy({
            where:{
                id,
            },
        });
        res.senStatus(204)
    }catch(error){
        return res.status(500).json({error})
    }
};