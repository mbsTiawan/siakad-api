const { Mahasiswa } = require('../models')
const { get } = require('../router')
const mahasiswaController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswaController.index = async (req, res) => {
    res.json({
        message: "Hello mahasiswaController"
    })
}

mahasiswaController.create = async (req, res) => {
    const { nim, nama, alamat } = req.body;
    try {
        const createMahasiswa = await Mahasiswa.create({
            nim,
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
mahasiswaController.getAll = async (req, res) => {
    try {
        const getMahasiswa = await Mahasiswa.findAll({
            order: [["createdAt", "DESC"]]
        })

        return res.status(200).json({
            data: getMahasiswa
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
mahasiswaController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDetailMhs = await Mahasiswa.findOne({
            where: {
                id: id
            }
        })

        return res.status(200).json({
            data: getDetailMhs
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}
mahasiswaController.update = async (req, res) => {
    const { nim, nama, alamat } = req.body;
    const id = req.params.id
    try {
        const getDetailMhs = await Mahasiswa.findOne({
            where: {
                id: id
            }
        })

        if (getDetailMhs === null) {
            return res.status(404).json({
                message: 'Data tidak ditemukan ! '
            })
        }
        const updateMahasiswa = await Mahasiswa.update({
            nim,
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
mahasiswaController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteMhs = await Mahasiswa.destroy({
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

module.exports = mahasiswaController

