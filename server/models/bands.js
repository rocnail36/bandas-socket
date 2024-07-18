const band = require("./Band")



class Bands {

    static bands = [
        {
            id:1,
            name: "metallica",
            vote: 1
        },
        {
            id:2,
            name:"aerosmith",
            vote:4
        },
        {
            id:3,
            name:"kiss",
            vote:6
        }
    ]


    static addVote(id){

       this.bands.filter(band => band.id == id)[0].vote++
        return this.bands
  
    }

    static deleteBand(id){
      this.bands = this.bands.filter(band => band.id != id)
        return this.bands
    }


    static changeName(data){
        const {id,name} = data
        console.log(id)
        this.bands.filter(band => band.id == id)[0].name = name
        
        return this.bands
    }

    static createBand(data){
      const newBand =  new band(data)
      this.bands.push(newBand)
      return this.bands
    }

}



module.exports = Bands