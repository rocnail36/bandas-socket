const { Server } = require("socket.io");
var cors = require('cors');
const Bands = require("../models/bands");

class Socket {

    constructor(httpServer){
      this.io = new Server(httpServer,{cors:{origin:"http://localhost:5173"}})
    }


    start(){
        this.io.on("connection", (socket) => {
           

            socket.emit("bands",Bands.bands)

            socket.on("addVote",(data) => {
              this.io.emit("bands", Bands.addVote(data))
            })

            socket.on("deleteBand",(data) => {
              this.io.emit("bands",Bands.deleteBand(data))
            })

            socket.on("changeName",(data) => {
              this.io.emit("bands", Bands.changeName(data))
            })

            socket.on("createBand",(data) => {
              this.io.emit("bands", Bands.createBand(data))
            })


          });
    }

}


module.exports = Socket