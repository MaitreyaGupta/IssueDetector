var mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Maitreya:KillerMan@cluster0.sk6ugig.mongodb.net/",{useNewUrlParser:true},{useUnifiedTopology:true})

const db=mongoose.connection

db.once("open",function(req,res){
    console.log("Connected to database")
})

module.exports=db
