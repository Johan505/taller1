function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let op=document.getElementById("operacion").value;
    let op1=document.getElementById("operacion1").value;

    if(op==1 && op1==1){
        Swal.fire(`No se puede convertir ya que son los mismos`);
    }

    else if(op==1 && op1==2){

        let res= ((5*(num1-32))/9);
        Swal.fire(`${res}`);
    }

    else if(op==1 && op1==3){
        let res=((5*(num1-32)/9)+273.15);
        Swal.fire(`${res}`);
    }



    else if(op==2 && op1==1){
        let res=((9*num1)/5)+32;
        Swal.fire(`${res}`);
    }

    else if(op==2 && op1==2){
        Swal.fire(`No se puede convertir ya que son los mismos`);
    }

    else if(op==2 && op1==3){
        let res=num1+273.15;
        Swal.fire(`${res}`);
    }


    else if(op==3 && op1==1){
        let res= ((9*(num1-273.15))/5)+32;
        Swal.fire(`${res}`);
    }

    else if(op==3 && op1==2){
        let res=num1-273.15;
        Swal.fire(`${res}`);
    }

    else if(op==3 && op1==3){
        Swal.fire(`No se puede convertir ya que son los mismos`);
    }
}