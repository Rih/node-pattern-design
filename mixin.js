let mixin = {
    greet(){
        console.log(`Hi ${this.name}`); //name will be defined in Class
    },   
    farewell(){
        console.log(`Bye ${this.name}`);
    }
};

//Class

class User{
    constructor(name){
        this.name = name;
    }
}

//extend prototype

Object.assign(User.prototype, mixin);

const user = new User('Happy pig')
user.greet()



