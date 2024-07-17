const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http");
const path = require("path")

const server = http.createServer(app)
const io = socketio(server)
io.on("connection" , function(socket){
    console.log("Connected");
})

app.set("view engine" , "ejs");
app.set(express.static(path.join(__dirname , "public")));
app.get("/" , function(req ,  res){
    res.send("Hello");
});

server.listen(3000);

