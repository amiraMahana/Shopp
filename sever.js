const express=require('express')
const app=express()
const path=require('path')
app.use(express.static(__dirname+"/dist/shop"))
app.listen(process.env.PORT || 3000)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +"'dist/shop/index.html"))
})