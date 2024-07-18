const uuid = require("uuid").v4

class band {

    constructor(name,count){
        this.id = uuid()
        this.name = name,
        this.count = count
    }

}

module.exports = band