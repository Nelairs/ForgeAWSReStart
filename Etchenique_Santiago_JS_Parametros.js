function greeting(name){
    return `Buen dia,${name}`;
}

console.log(greeting("Anakin"));


/* ---------------------------- PERSONALIZACION 1 --------------------------- */

function greeting(name){
    return `Buen dia,${name} son las ${Date()}`;
}

console.log(greeting("Anakin"));

/* ---------------------------- PERSONALIZACION 2 --------------------------- */

function greeting(name){
    return `Buen dia,${name} son las ${Date()}`;
}

function    countDooku(){
    console.log("Voy por ti, Dooku!")
}

console.log(greeting("Anakin"));

countDooku();