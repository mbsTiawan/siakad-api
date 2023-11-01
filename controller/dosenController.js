const dosenController = {}
const { Dosen } = require('../models')

/*
    this is auto generate example, you can continue 

*/
dosenController.index = async (req, res) => {
    res.json({
        message: "Hello dosenController"
    })
}

dosenController.create = async (req, res) => {
    const { nidn, nama, alamat } = req.body;
    try {
        const createDosen = await Dosen.create({
            nidn,
            nama,
            alamat
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
dosenController.getAll = async (req, res) => {
    try {
        const getDosen = await Dosen.findAll({
            order: [["createdAt", "DESC"]]
        })

        return res.status(200).json({
            data: getDosen
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
dosenController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDetailDosen = await Dosen.findOne({
            where: {
                id: id
            }
        })

        return res.status(200).json({
            data: getDetailDosen
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
dosenController.update = async (req, res) => {
    const { nidn, nama, alamat } = req.body;
    const id = req.params.id
    try {
        const getDetailDosen = await Dosen.findOne({
            where: {
                id: id
            }
        })

        if (getDetailDosen === null) {
            return res.status(404).json({
                message: 'Data tidak ditemukan ! '
            })
        }
        const updateDosen = await Dosen.update({
            nidn,
            nama,
            alamat
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
dosenController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteDosen = await Dosen.destroy({
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

module.exports = dosenController

