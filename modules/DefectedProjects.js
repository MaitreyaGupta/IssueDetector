const mongoose=require("mongoose")

const defectedProject=new mongoose.Schema({
    name:{
        type:String, 
        required:true
    }
})

const name=new mongoose.model("name",defectedProject)

module.exports=name
