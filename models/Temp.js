const mongoose = require("mongoose")

const TempSchema = new mongoose.Schema({
    MID: {
        type: String,
        default: "HVERMA"
    },
    Temp: {
        type: String,
        required: [true, 'Digit is required']
    },
    Time: {
        type: String,
        default:new Date()
    }

})

const Temp = mongoose.model("Temp", TempSchema)

module.exports = Temp