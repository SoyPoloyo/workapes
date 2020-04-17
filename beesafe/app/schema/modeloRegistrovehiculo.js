var mongoose = require("mongoose");

var registroVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  placaVehi: Number,
  modelo: String,
  anno: Number,
  marca_vehiculo: String,
  identificador: String
});

module.exports = mongoose.model( "registroVehiculo", registroVehiculoSchema ,"registroVehiculos");