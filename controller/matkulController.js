const matkulController = {}
const { MataKuliah } = require('../models')
/*
    this is auto generate example, you can continue 

*/
matkulController.index = async (req, res) => {
    res.json({
        message: "Hello matkulController"
    })
}

matkulController.create = async (req, res) => {
    const { kode_matkul, nama, sks } = req.body;
    try {
        const createMatkul = await MataKuliah.create({
            kode_matkul,
            nama,
            sks
        })

        return res.status(201).json({
            message: 'Data berhasil ditambahkan ! '
        })
    } catch (error) {
        return res.tatus(500).json({
            message: error
        })
    }

}
matkulController.getAll = async (req, res) => {
    try {
        const getMatkul = await MataKuliah.findAll({
            order: [["createdAt", "DESC"]]
        })

        return res.status(200).json({
            data: getMatkul
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
matkulController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where: {
                id: id
            }
        })

        return res.status(200).json({
            data: getDetailMatkul
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
matkulController.update = async (req, res) => {
    const { kode_matkul, nama, sks } = req.body;
    const id = req.params.id
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where: {
                id: id
            }
        })

        if (getDetailMatkul === null) {
            return res.status(404).json({
                message: 'Data tidak ditemukan ! '
            })
        }
        const updateMatul = await MataKuliah.update({
            kode_matkul,
            nama,
            sks
        }, {
            where: {
                id: id
            }
        })

        return res.status(200).json({
            message: 'Data berhasil diperbarui ! '
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
matkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteMatkul = await MataKuliah.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).json({
            message: 'Data berhasil dihapus ! '
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}


module.exports = matkulController

