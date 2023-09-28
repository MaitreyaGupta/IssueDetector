const mongoose=require("mongoose")

const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    }
})

const project=new mongoose.model("project",projectSchema)

module.exports=project
