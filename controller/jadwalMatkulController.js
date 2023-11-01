const jadwalMatkulController = {}
const { JadwalMatkul, MataKuliah } = require('../models')

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async (req, res) => {
    res.json({
        message: "Hello jadwalMatkulController"
    })
}

jadwalMatkulController.create = async (req, res) => {
    const { id_maktul, hari, jam } = req.body;
    try {
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_maktul
            }
        })

        if (getMatkul === null) {
            throw Error('Data tidak ditemukan ! ')
        } else {
            const createJadwalMatkul = await JadwalMatkul.create({
                id_maktul: getMatkul.id,
                hari,
                jam
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

jadwalMatkulController.getAll = async (req, res) => {
    try {
        const getJadwalMatkul = await MataKuliah.findAll({
            include: [
                {
                    model: JadwalMatkul
                }
            ],
        })
        return res.status(200).json({
            data: getJadwalMatkul
        })
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

jadwalMatkulController.getById = async (req, res) => {
    try {
        const { id } = req.params
        const getJadwalMatkul = await MataKuliah.findOne({
            include: [
                {
                    model: JadwalMatkul
                }
            ],
            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getJadwalMatkul
        })
    } catch (error) {

        return res.status(500).json({
            message: error
        })
    }
}

jadwalMatkulController.update = async (req, res) => {
    const { id } = req.params;
    const { id_maktul, hari, jam } = req.body
    try {
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_maktul
            }
        })

        if (getMatkul === null) {
            throw Error('Data tidak ditemukan ! ')
        } else {
            const updateJadwalMatkul = await JadwalMatkul.update({
                id_maktul: id_maktul,
                hari,
                jam
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

jadwalMatkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteJadwalMatkul = await JadwalMatkul.destroy({
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

module.exports = jadwalMatkulController

