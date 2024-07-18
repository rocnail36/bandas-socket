const Server = require("./structure/server");
const Socket = require("./structure/Socket");
var cors = require('cors')



function main (){

    const server = new Server()
    const socket = new Socket(server.server)

    server._app.use(cors({
        origin:"http://localhost:5173"
    }))

 

    socket.start()
    server.start()

}


main()