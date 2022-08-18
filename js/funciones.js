//Declarar la función por declaración
function lanzamiento(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`El lanzamiento fue ${moneda}`);
}
//Invocar la función
lanzamiento();


//Función con valor de retorno
function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}
//Invocar la función de retorno
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzar=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzar}`);

let saldo=2000;
let apuesta=2;
//función con parámetros
function ganar(saldo,apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

function perder(saldo,apuesta){
    saldo=saldo-apuesta;
    return saldo;
}

//Invocar la función y enviar argumentos según corresponda

ganar(saldo,apuesta);
perder(saldo,apuesta);


//funcion por expresion

let lanzar1=function lanzarmonedas(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

let lanzamientos=lanzar1();
console.log(`${lanzamientos}`);


//funcion anonima

let ganar=function(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

ganar(saldo, apuesta);


//funcion arrow
let perder=(saldo,apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}

perder(saldo, apuesta);

