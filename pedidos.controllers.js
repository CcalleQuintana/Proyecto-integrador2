import { pedidos } from '../models/pedidos.js';

export const getPedidos = async (req, res) => {
    const Pedidos = await pedidos.findAll()
    res.json(Pedidos)
}

export const createPedido = async (req, res) => {
    const { fecha, metodo_pago, estado } = req.body
    const newPedidos = await pedidos.create({
        fecha,
        metodo_pago,
        estado
    })
    res.json(newPedidos)
        
};

export const updatePedido = async (req, res)=>{
    const{fecha}=req.body;
    const{metodo_pago}=req.body;
    const{estado}=req.body;

    const pedido = await pedidos.upsert({fecha,metodo_pago,estado});

    console.log(pedido)
    res.send('Updating')
    
};
export const deletePedido = async (req, res)=>{
    try{
        const{id}=req.params;
        await pedidos.destroy({
            where:{
                id
            }
        })
        res.senStatus(204)
    }catch (error){
        return res.status(500).json({error})
    }
}