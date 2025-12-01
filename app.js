const express=require("express")
const app=express();
const port=3000
//api


app.use(express.json())
app.get('/movies',function(req,res){
    res.json({
        name:"bahubali",
        director:"rajumouli",
        actor:"prabhas",
        rating:5
    })
})

app.post('/upload',function(req,res){
    res.json({
        message:"photo is uploaded succesfully"
    })
})

app.post('/users',function(req,res){
    res.json({
        message:"registartion succesful"
    })
})

app.get('/fact',function(req,res){
 res.json({
    msg:"cat is an animal"
 })
})

app.listen(port,function(){
    console.log(`the server is running on ${port}`)
})