const mongoose = require("mongoose")

const TempSchema = new mongoose.Schema({
    api_key: {
        type: String,
        default: ""
    },
    field1: {
        type: String,
        default: ""
    },
    Time: {
        type: String,
        default: new Date()
    }

})

const Temp = mongoose.model("Temp", TempSchema)

module.exports = Temp