const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()
app.use(cors())
app.use(express.json())
const encoded = bodyParser.urlencoded()
require('./DB')
const Temp = require('./models/Temp')
const PORT = process.env.PORT || 8000
app.post('/harshit', encoded, async (req, res) => {
    try {
        const Data = new Temp(req.body)
        await Data.save()
        res.send({ result: "Success", message: "Recorded Added" })


    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal server error" })
    }
})
app.get('/harshit', async (req, res) => {
    try {
        const Data = await Temp.find()
        res.send({ result: "Success", data: Data })

    }
    catch (e) {
        res.status(500).send({ result: "Fail", message: "Internal server error" })
    }
})
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
