//class Person{
//    constructor(){
//        this.name = "Rodrigo"
//    }
//    greet(){
//        console.log(`Hi, im ${this.name}`)
//    }
//}


//class Dog extends Person{

//}

const greet = name => console.log(`Hi, im ${name}`);
const bye = () => console.log(`Byeeeee`);
const sleep = () => console.log(`Zzzzz....`);

//one way
const person = {
    name: 'Rodrigo',
    greet: function(){ greet(this.name) }
}

//another way
class Person{
    constructor(){
        this.name = "Rodrigo";
    }
    greet(){
        greet(this.name);
    }
    bye(){ bye(); }
    sleep(){ sleep(); }
}

class Robot{
    constructor(){
        this.name = "iRobot";
    }
    greet(){
        greet(this.name);
    }
    bye(){ bye(); }
}