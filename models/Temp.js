const mongoose = require("mongoose")

const TempSchema = new mongoose.Schema({
    MID: {
        type: String,
        default: "HVERMA"
    },
    ADC: {
        type: Number,
        required: [true, 'ADC is required']
    },
    KEY: {
        type: Number,
        default: 0
    },
    Time: {
        type: String,
        default: new Date()
    }

})

const Temp = mongoose.model("Temp", TempSchema)

module.exports = Temp