const express = require("express");
const app = express();
const http = require('http').Server(app);
let io = require("socket.io")(http);
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/phase3_3";
mongoose.pluralize(null);

mongoose.connect(url).then(res=>console.log("connected to mongoDB")).catch(err => console.log(err));

const messObj = mongoose.Schema({
    name:String,
    mess:String,
    time:String,
    
})

let mesModel = mongoose.model("MessageLog", messObj);



app.get('/',(req,res)=>{
    res.sendFile(__dirname+"\\client.html");
});

io.on("connection",(socket)=>{
    console.log("client connected");

    socket.on("obj", (msg)=>{
        console.log(msg);
    })
; 


    socket.on("obj2", (msg)=>{
        
        let m1 = new mesModel({
            name:msg.name,
            mess:msg.mess,
            time:msg.timeStamp
        })
        mesModel.insertMany(m1, (err,result)=>{
            if(!err){
                console.log(result);
            }else{
                console.log(err);
            }
        })
    })


}) 

http.listen (9090, () => console.log("Server running on 9090"))

