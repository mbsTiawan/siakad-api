const dosenMatkulController = {}
const { Dosen, MataKuliah, DosenMatkul } = require('../models')
/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async (req, res) => {
    res.json({
        message: "Hello dosenMatkulController"
    })
}

dosenMatkulController.create = async (req, res) => {
    const { id_dosen, id_maktul } = req.body;
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_maktul
            }
        })

        if (getDosen === null || getMatkul === null) {
            throw Error('Data tidak ditemukan ! ')
        } else {
            const createDosenMatkul = await DosenMatkul.create({
                id_dosen: getDosen.id,
                id_maktul: getMatkul.id
            })

            return res.status(201).json({
                message: 'Data berhasil ditambahkan '
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

dosenMatkulController.getAll = async (req, res) => {
    try {
        const getDsnMatkul = await Dosen.findAll({
            include: [
                {
                    model: MataKuliah
                }
            ],
        })
        return res.status(200).json({
            data: getDsnMatkul
        })
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

dosenMatkulController.getById = async (req, res) => {
    try {
        const { id } = req.params
        const getDsnMatkul = await Dosen.findOne({
            include: [
                {
                    model: MataKuliah
                }
            ],

            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getDsnMatkul
        })
    } catch (error) {

        return res.status(500).json({
            message: error
        })
    }
}

dosenMatkulController.update = async (req, res) => {
    const { id } = req.params;
    const { id_dosen, id_maktul } = req.body
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_maktul
            }
        })

        if (getDosen === null || getMatkul === null) {
            throw Error('Data tidak ditemukan ! ')
        } else {
            const updateDosenMatkul = await DosenMatkul.update({
                id_dosen: id_dosen,
                id_maktul: id_maktul
            }, {
                where: {
                    id: id
                }
            })

            return res.status(201).json({
                message: 'Data berhasil diperbarui '
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

dosenMatkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteDosen = await DosenMatkul.destroy({
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

module.exports = dosenMatkulController

