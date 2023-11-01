const express = require("express");
const dosenMatkulController = require("../controller/dosenMatkulController");
const routeDosenMatkul = express.Router()

routeDosenMatkul.post('/', dosenMatkulController.create)
routeDosenMatkul.get('/', dosenMatkulController.getAll)
routeDosenMatkul.get('/:id', dosenMatkulController.getById)
routeDosenMatkul.put('/:id', dosenMatkulController.update)
routeDosenMatkul.delete('/:id', dosenMatkulController.delete)

module.exports = routeDosenMatkul