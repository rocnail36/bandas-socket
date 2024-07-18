const express = require("express")
var cors = require('cors')
const {createServer} = require("http")



class Server {

    constructor(){
    this.Port = 8080
    this._app = express()
    this._app.use(cors())
    this.server = createServer(this._app)
    }


    start(){


        this.server.listen(this.Port, () => {
            console.log("server running")
        })
    }


}

module.exports = Server