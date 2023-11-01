const express = require("express");
const dosenController = require("../controller/dosenController");
const routeDosen = express.Router()

routeDosen.post('/',dosenController.create)
routeDosen.get('/',dosenController.getAll)
routeDosen.get('/:id',dosenController.getById)
routeDosen.put('/:id',dosenController.update)
routeDosen.delete('/:id',dosenController.delete)

module.exports = routeDosen