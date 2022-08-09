let dinero, marranito=0, cont=0;
let resp=true;

while(resp==true){
    dinero=parseInt(prompt("Ingrese la cantidad a guardar"));
    marranito=marranito+dinero;
    cont=cont+1

    resp=confirm("Desea continuar");
}

console.log(`La suma es ${marranito}`);
console.log(`El contador es ${cont}`);