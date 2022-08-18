let seguir=true;
let saldo=0;
let jugador=prompt("Ingresa el nombre del jugador");
saldo=parseInt(prompt("Cuanto deseas recargar para jugar"));

while(seguir==true){

    let lanzar=function lanzarmoneda(){
        let moneda = Math.floor((Math.random()*2)+1);
        return moneda;
    }

    let ganar=function(saldo, apuesta){
        saldo=saldo+(apuesta*2);
        return saldo;
    }
    
    let perder=(saldo,apuesta)=>{
        saldo=saldo-apuesta;
        return saldo;
    }

    let eleccion=prompt(`${jugador} Elige 1.Cara 2.Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuánto deseas apostar?`));
    let lanzamiento=lanzar();

    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue cara, escogiste cara, GANASTE, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste sello GANASTE, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste sello PERDISTE tu nuevo saldo es ${saldo}`);
    }

    else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo, apuesta);
        console.log(`El lanzamiento fue sello escogiste cara PERDISTE, tu nuevo saldo es ${saldo}`);
    }
}