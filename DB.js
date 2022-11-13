const mongoose= require("mongoose")

mongoose.connect(process.env.DBKEY).then(()=>console.log("DB CONNECTED")).catch((error)=>console.log(error))