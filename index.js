const express = require('express')
const app = express()
const errorHand = require('./middleware/ErrorHandling')

const cors = require('cors')

app.use(cors())

app.use(express.json())

// Routes
app.use(require('./routes/api'))

// Errrrrr
app.use(errorHand.error404)
app.use(errorHand.error500)

app.listen(5000, () => {
    console.log("Server berhasil terhubung di port 5000")
})