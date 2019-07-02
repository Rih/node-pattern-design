//

class Macbook{
    constructor(){
        this.price = 1000
        this.screen = 11.6
    }
}


const mac = new Macbook()

//this is a decorator
mac.addMemory = function(){
    this.price += 100
}

mac.addMemory()
console.log(mac.price)