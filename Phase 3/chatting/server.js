const express = require("express");
const app = express();
const http = require('http').Server(app);
let io = require('socket.io')(http);


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"\\clinet.html");
});

io.on("connection",(socket)=>{
    console.log("client connected");

    socket.on("obj", (msg)=>{
        console.log(msg);
    })
    socket.emit("obj1", "Hello Client connected server....");


    socket.on("obj2", (msg)=>{
        console.log(msg)
        setTimeout(()=>{socket.emit("obj3", randReply())}, 1000);
    })

    function randReply(){
        let reply =[
            "Hello!!!",
            "How are you",
            "I asked you first",
            "oh thats really mature saying exactly what I said"
        ]
        let num = Math.floor(Math.random() * 4);

        return reply[num];

    }
}) 

http.listen (9090, () => console.log("Server running on 9090"))

