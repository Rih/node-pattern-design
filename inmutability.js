const obj = {
    a: 1
}

const obj2 = {
    ...obj,
    c: 3
}

//do not do that
//obj.b = 2;
console.log(obj, obj2);