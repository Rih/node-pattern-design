const dog = {
    race: 'Kilterrier',
    woof: function() { //this keyword is not defined in fat arrow function scope
        console.log(`Wow, I'm a ${this.race}`)
    }
}

const kiltro = Object.create(dog)

kiltro.woof()

console.log(kiltro)