const mhsBimbinganController = {}
const { MahasiswaBimbingan, Mahasiswa, Dosen } = require('../models')
/*
    this is auto generate example, you can continue 

*/
mhsBimbinganController.index = async (req, res) => {
    res.json({
        message: "Hello mhsBimbinganController"
    })
}

mhsBimbinganController.create = async (req, res) => {
    const { id_mahasiswa, id_dosen } = req.body

    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })

        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })

        if (getMahasiswa === null || getDosen === null) {
            throw Error('Data tidak ditemukan ! ')
        } else {

            const createMhsBimbingan = await MahasiswaBimbingan.create({
                id_mahasiswa: getMahasiswa.id,
                id_dosen: getDosen.id
            })

            return res.status(201).json({
                message: 'Data berhasil dibuat ! '
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mhsBimbinganController.getAll = async (req, res) => {
    try {
        const getMhsBimbingan = await Mahasiswa.findAll({
            include: [
                {
                    model: Dosen
                }
            ],
        })
        return res.status(200).json({
            data: getMhsBimbingan
        })
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

mhsBimbinganController.getById = async (req, res) => {
    try {
        const { id } = req.params
        const getMhsBimbingan = await Mahasiswa.findOne({
            include: [
                {
                    model: Dosen
                }
            ],

            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getMhsBimbingan
        })
    } catch (error) {

        return res.status(500).json({
            message: error
        })
    }
}

mhsBimbinganController.update = async (req, res) => {
    const { id } = req.params
    const { id_mahasiswa, id_dosen } = req.body

    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })

        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })

        if (getMahasiswa === null || getDosen === null) {
            throw Error('Data tidak ditemukan ! ')
        } else {

            const createMhsBimbingan = await MahasiswaBimbingan.update({
                id_mahasiswa: id_mahasiswa,
                id_dosen: id_dosen
            }, {
                where: {
                    id: id
                }
            })

            return res.status(201).json({
                message: 'Data berhasil diperbarui ! '
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mhsBimbinganController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteMhsBimbingan = await MahasiswaBimbingan.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).json({
            message: 'Data berhasil dihapus ! '
        })

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

module.exports = mhsBimbinganController

