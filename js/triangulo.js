function calcular(){
    let base=parseInt(document.getElementById("base").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);

    if(base==num2 && base==num3){
        Swal.fire(`El triangulo es equilatero`);
    }

    else if(base<num2 && base<num3 && num2==num3){
        Swal.fire(`El triángulo es isosceles`)
    }

    else if(base!=num2 && num2!=num3 && base!=num2){
        Swal.fire(`El triángulo es escaleno`)
    }
}