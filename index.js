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
    switch (process.env.NODE_ENV){
        case 'development':
            console.log("--- ENVIRONMENT STATUS: DEVELOPMENT ---")
            break
        case 'test':
            console.log("--- ENVIRONMENT STATUS: TEST ---")
            break
        case 'production':
            console.log("--- ENVIRONMENT STATUS: PRODUCTION ---")
            break
        default:
            console.log("Errrrrrrrrrrrrrr environment not detected!")
        
    }
    console.log("Server berhasil terhubung di port 5000")
})