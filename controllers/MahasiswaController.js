const pool = require('../config/database')
require('dotenv').config()

async function getData(req, res){
    try{
        const queryGet = await pool.query("SELECT * FROM mahasiswa")
        res.json({
            data: queryGet.rows,
            message: "Data berhasil ditampilkan",
        })
    } catch (err) {
        console.error(err.message)
    }
}

async function postData(req, res){
    try{
        const dataInfo = req.query
        const keyInfo = Object.keys(dataInfo)

        // Validasi isi query get
        if (keyInfo.length !== 4) {
            res.status(400).json({
                message: keyInfo.length
            })
        }

        for (let i = 0; i < 4; i++){
            switch (keyInfo[i]){
                case 'nama':
                    break
                case 'age':
                    break
                case 'email':
                    break
                case 'alamat':
                    break
                default:
                    res.status(400).json({
                        message: "Something wrong with your request!"
                    })
            }
        }

        const queryPost = await pool.query("INSERT INTO mahasiswa (nama, age, email, alamat) VALUES ($1, $2, $3, $4) RETURNING *", [dataInfo['nama'], dataInfo['age'], dataInfo['email'], dataInfo['alamat']])

        res.json({
            data: queryPost.rows[0],
            message: "Data berhasil ditambahkan!"
        })
    } catch(err) {
        console.error(err.message)

        // Validasi jika ada e-mail yang duplikat
        if (err.code == 23505){
            res.status(400).json({
                message: "E-mail tidak boleh duplikat bos!"
            })
        }
    }
}

module.exports = {
    getData, postData
}