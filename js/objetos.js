const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",

    comer(){
        console.log(`${animal} está comiendo`);
        console.log(`${this.nombre} está comiendo`)
    }

    
}

console.log(animal);
animal.comer;
