let carasello, cont=0, apuesta=0, ganancias=0, dinero, pierdes, resp=true;



while(resp==true){
    
    function random(min, max){
        return Math.floor(Math.random() * (max- min) + min);
    }

    cont=cont+1
    
    let pregunta=prompt("¿Desea apostar?");

    if(pregunta=="si"){

    dinero=0;
    dinero=parseInt(prompt("Ingrese la cantidad a apostar"));

    console.log(dinero)
    apuesta=apuesta+dinero;
    

    


    carasello=parseInt(prompt("1 Cara  2 Sello"))

    let numRandom=random(1,3);
    window.alert(`La máquina saco: ${numRandom}`);

                

                if(carasello==1 && numRandom==1){
                    window.alert("Ganaste");
                    ganancias+=(dinero*2);
                    
                }

                else if(carasello==2 && numRandom==2){
                    window.alert("Ganaste");
                    ganancias+=(dinero*2);

                }

                else{
                    window.alert("Perdiste");
                    ganancias-=dinero;    
                }

    }
    else{
        carasello=parseInt(prompt("1 Cara  2 Sello"))

        let numRandom=random(1,3);
        window.alert(`La máquina saco: ${numRandom}`);

                

                if(carasello==1 && numRandom==1){

                    window.alert("Ganaste");
                    
                }

                else if(carasello==2 && numRandom==2){
                    window.alert("Ganaste");

                }

                else{
                    window.alert("Perdiste");   
                }
    }

    resp=confirm("Desea continuar");
}



window.alert(`El dinero obtenido es: ${ganancias}`);
window.alert(`El contador es ${cont}`);

