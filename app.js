const express=require("express")
const bodyparser=require("body-parser")
const app=express() 
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))
const port=process.env.port||3030
const db=require("./config/mongoose")
const project=require("./modules/Projects")
const defectedprojects=require("./modules/DefectedProjects")
app.use(express.static("public"))
 

app.listen(port,function(req,res){
    console.log("The function is listening")
})

app.get("/",function(req,res){
    res.render("Index")
})

app.post("/",function(req,res){
  const data={
    name:req.body.name,
  }
  project.insertMany(data);
  res.redirect("OnStarter")
})

 
app.get("/OnStarter",async function(req,res){
const DB1=await project.find()
  res.render("OnStarter",{
  name:req.name,
  defectedprojects1:DB1,
  }
  )
})

app.post("/IssuePage",async function(req,res){
  const data={
    name:req.body.Bug, 
  }
  defectedprojects.insertMany(data)
  res.redirect("OnStarter")
})
 
 