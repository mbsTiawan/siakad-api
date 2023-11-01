const express = require("express");
const mhsBimbinganController = require("../controller/mhsBimbinganController");
const routeMhsBimbingan = express.Router()

routeMhsBimbingan.post('/', mhsBimbinganController.create)
routeMhsBimbingan.get('/', mhsBimbinganController.getAll)
routeMhsBimbingan.get('/:id', mhsBimbinganController.getById)
routeMhsBimbingan.put('/:id', mhsBimbinganController.update)
routeMhsBimbingan.delete('/:id', mhsBimbinganController.delete)

module.exports = routeMhsBimbingan