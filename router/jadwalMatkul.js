const express = require("express");
const jadwalMatkulController = require("../controller/jadwalMatkulController");
const routeJadwalMatkul = express.Router()

routeJadwalMatkul.post('/', jadwalMatkulController.create)
routeJadwalMatkul.get('/', jadwalMatkulController.getAll)
routeJadwalMatkul.get('/:id', jadwalMatkulController.getById)
routeJadwalMatkul.put('/:id', jadwalMatkulController.update)
routeJadwalMatkul.delete('/:id', jadwalMatkulController.delete)

module.exports = routeJadwalMatkul