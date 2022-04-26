const express = require('express')
const app = express()

app.use(require('./routes/api'))

app.listen(5000, () => {
    console.log("Server berhasil terhubung di port 5000")
})