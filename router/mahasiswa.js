const express = require("express");
const mahasiswaController = require("../controller/mahasiswaController");
const routeMahasiswa = express.Router()

routeMahasiswa.post('/',mahasiswaController.create)
routeMahasiswa.get('/',mahasiswaController.getAll)
routeMahasiswa.get('/:id',mahasiswaController.getById)
routeMahasiswa.put('/:id',mahasiswaController.update)
routeMahasiswa.delete('/:id',mahasiswaController.delete)

module.exports = routeMahasiswa