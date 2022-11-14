const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())
const encoded = bodyParser.urlencoded()
require('./DB')
const Temp = require('./models/Temp')
const PORT = process.env.PORT || 8000
app.post('/harshit',encoded, async (req, res) => {
    try {
        const Data = new Temp(req.body)
        await Data.save()
        res.send({ result: "Success", message: "Recorded Added" })


    }
    catch (error) {
        if (error.errors.ADC)
            res.status(400).send({ result: "Fail", message: error.errors.ADC.message })
        else if (error.errors.email)
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
