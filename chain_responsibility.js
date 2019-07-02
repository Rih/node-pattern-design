//Concatenate and call same functions in object
class Sum{
    constructor(v = 0){
        this.val = v
    }

    add(v){
        this.val += v;
        return this;
    }
}

const value = new Sum(1)

console.log(value
    .add(1)
    .add(2)
    .add(3)
    .add(4)
    .val)