const uuid = require("uuid").v4

class band {

    constructor(name){
        this.id = uuid()
        this.name = name,
        this.vote = 1 
    }

}

module.exports = band