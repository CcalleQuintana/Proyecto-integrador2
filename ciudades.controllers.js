

import { ciudades} from '../models/ciudades.js'
export const getCiudades = async (req, res) => {
    const Ciudades = await ciudades.findAll()

    res.json(Ciudades)
}

export const createCiudad = async (req, res) => {
    const { id, nombre } = req.body

    const newCiudades = await ciudades.create({
        id,
        nombre
    })

    res.json(newCiudades)
}; 

export const updateCiudad =  async (req, res) => {
    const {id} = req.params;
    const{nombre}= req.body;
    const ciudad = await ciudades.upsert({id,nombre});



    
    console.log(ciudad)
   
    res.send('Updating')
};

export const deleteCiudad = async (req, res) => {
    try {
        const { id } = req.params;
        await ciudades.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ error })
    }
};

