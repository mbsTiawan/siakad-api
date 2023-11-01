const express = require("express");
const matkulController = require("../controller/matkulController");
const routeMatkul = express.Router()

routeMatkul.post('/', matkulController.create)
routeMatkul.get('/', matkulController.getAll)
routeMatkul.get('/:id', matkulController.getById)
routeMatkul.put('/:id', matkulController.update)
routeMatkul.delete('/:id', matkulController.delete)

module.exports = routeMatkul