var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var registroVehiculo = require('../schema/modeloRegistroVehiculo');

router.post('/insertar', function (req, res) {
    var VehiculoNuevo = new registroVehiculo({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        placaVehi: req.body.placaVehi,
        modelo: req.body.modelo,
        anno: req.body.anno,
        marca_vehiculo: req.body.marca_vehiculo,
    });
    VehiculoNuevo.save()
        .then(function (result) {
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
     module.exports = router;