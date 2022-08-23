function calcular(){
    let palabra=document.getElementById("palabra").value;
    let op=document.getElementById("operacion").value;

    if(op==1){

        let word=palabra.length;
        alert(`La longitud de la palabra es: ${word}`);
    }

    else if(op==2){
        alert(`${palabra.toUpperCase()}`);
    }

    else if(op==3){
        alert(`${palabra.toLowerCase()}`);
    }

    else if(op==4){
        alert(`${palabra.charAt(0)}`);
    }
}