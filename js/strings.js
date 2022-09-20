function calcular(){
    let palabra=document.getElementById("palabra").value;
    let op=document.getElementById("operacion").value;

    if(op==1){

        let word=palabra.length;
        Swal.fire(`La longitud de la palabra es: ${word}`);
    }

    else if(op==2){
        Swal.fire(`${palabra.toUpperCase()}`);
    }

    else if(op==3){
        Swal.fire(`${palabra.toLowerCase()}`);
    }

    else if(op==4){
        Swal.fire(`${palabra.charAt(0)}`);
    }
}