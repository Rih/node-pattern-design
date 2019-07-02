class MyClass {
    constructor(p1){
        this.prop = p1
        this.method = () => {

        }
    }
}

const instance = new MyClass(4)
console.log(instance)

//Same as

function MyClass2(p1){
    this.prop = p1;
    this.method = function(){

    }
}

const instance2 = new MyClass2(4)
console.log(instance2)