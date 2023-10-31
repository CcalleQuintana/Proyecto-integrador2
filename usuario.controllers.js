import { usuarios } from "../models/usuarios.js";
export const getUsuarios = async (req, res) => {
    const Usuarios = await usuarios.findAll()
    res.json(Usuarios)
}
export const createUsuario = async (req, res) => {
    const { nombre, direccion, correo, telefono } = req.body
    const newUsuarios = await usuarios.create({

        nombre,
        direccion,
        correo,
        telefono
    })
    res.json(newUsuarios)
};

export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const { direccion } = req.body;
    const { password } = req.body;
    const { correo } = req.body;
    const { telefono } = req.body;

    const usuario = await usuarios.upsert({ id, nombre, direccion, password, correo, telefono });
    usuario.nombre = nombre
    usuario.direccion = direccion
    usuario.password = password
    usuario.correo = correo
    usuario.telefono = telefono

    console.log(usuario)

    res.send('Updating')

};

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await usuarios.destroy({
            where: {
                id,

            },
        });
        res.sendStatus(204)


    } catch (error) {
        return res.status(500).json({ error })

    }

};
