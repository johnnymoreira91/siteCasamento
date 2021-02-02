const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
require('../models/listaCasamento');
const listaCasamento = mongoose.model('listaCasamento');

var whiteList = ['http://localhost:3001/api/lista', 'http://192.168.0.99:3001/api/lista'];

const options = {
    origin: whiteList,
};

router.use(cors(options));

router.get('/lista', (req, res) => {
    listaCasamento.find({}).then((listaTotal) => {
        return res.json(listaTotal)
    }).catch((error) => {
        return res.status(400).json({
            error: true,
            message: "Nenhuma lista encontrada"
        })
    })
});

router.get('/lista/:id', (req, res) => {
    listaCasamento.findOne({ _id: req.params.id }).then((listaTotal) => {
        return res.json(listaTotal)
    }).catch((error) => {
        return res.status(400).json({
            error: true,
            message: "Nenhuma lista encontrada"
        })
    })
});

router.put('/list/edit/:id', (req, res) => {
    const editList = listaCasamento.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error, a lista não foi editada com sucesso"
        })
        return res.status(200).json({
            error: false,
            message: "Arquivo Editado com sucesso"
        })
    })
});

router.delete('/list/del/:id', (req, res) => {
    const del = listaCasamento.deleteOne({_id: req.params.id}, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            message: ' Arquivo não foi apagado'
        })
        return res.status(200).json({
            error: true,
            message: "Arquivo Apagado com sucesso"
        })
    })
});

router.post('/casamento', async (req, res) => {
    console.log(req.body);
    const casamentoLista = await listaCasamento.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: 'Não foi realizado o insert',
        })
        return res.status(200).json({
            error: false,
            message: 'Insert Realizado com sucesso',
        })
    });
});


module.exports = router;