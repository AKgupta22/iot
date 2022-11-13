const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())
require('./DB')
const Temp = require('./models/Temp')
const PORT = process.env.PORT || 8000

app.post('/harshit', async (req, res) => {
    try {
        const Data = new Temp(req.body)
        await Data.save()
        res.send({ result: "Success", message: "Recorded Added" })


    }
    catch (error) {
        if (error.errors.Temp)
            res.status(400).send({ result: "Fail", message: error.errors.Temp.message })
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
