const mongoose=require("mongoose")

const regmodelSchema=new mongoose.Schema(
    {
        name:String,
        place:String,
        phnno:String,
        gender:String,
        hgt:String,
        wght:String

    }
)
module.exports=mongoose.model