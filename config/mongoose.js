var mongoose=require("mongoose")
mongoose.connect("mongodb+srv://maitreyaguptaa:killerman@devs.syeiknh.mongodb.net/issuetracker",{useNewUrlParser:true},{useUnifiedTopology:true})

const db=mongoose.connection

db.once("open",function(req,res){
    console.log("Connected to database")
})

module.exports=db
