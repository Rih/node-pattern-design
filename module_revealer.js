const result = ( () => {
    const x = {}

    //this is public
    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }


})()

result.a()

result.b('cheese','goat')

result.a()

// undefined
console.log(result.x)