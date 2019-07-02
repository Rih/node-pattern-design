//
class Macbook{
    price(){
        return 1000
    } 
}

//this is a decorator
const memory = mac => {
    const v = mac.price()
    mac.price = function(){
        return v + 100
    }
}

const mac = new Macbook()
memory(mac)
console.log(mac.price())