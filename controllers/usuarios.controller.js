const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    const {cant_prod, grupId} = req.query
    res.json({
        msg: 'get API - Controlador',
        query,
        cant_prod,
        grupId
    });
}

const usuariosPost = (req, res = response) => {
    // const body = req.body;
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}