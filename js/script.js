console.log("hola mundo");

let numero = 25;

console.log("El numero es",numero);
console.log(`El numero es ${numero}`);

let nombre="johan";

console.log("Mi nombre es",nombre);
console.log(`Mi nombre es ${nombre}`);

let booleano=true ;
let sinValor;

console.log(`El Booleano es ${booleano}`);
console.log(`El dato Sin Valor ${sinValor}`);

let res=numero+5;

console.log(`La suma es: ${res}`);
console.log(`La suma es: ${numero+10}`);

// window.alert("Esto es una alerta");
// let $estado=window.confirm("Quieres que esta pagina te inspeccione?");

// console.log("El pibe quiere que ${$estado}"");

// let num1=prompt("Digite el primer numero");
// let num2=prompt("Digite el segundo numero");
// let suma=parseInt(num2)+parseInt(num1);
// console.log("La suma es: ${suma}");

// // Condicionales
// console.log("numero 1: ${num1}");
// console.log("numero 2: ${num2}");

// if(parseInt(num1)>parseInt(num2))

// console.log("El primer numero digitado es mayor que el segundo");
// else if(parseInt(num1)==parseInt(num2)){
//     console.log("Los dos numeros son iguales");
// }
// else{
//         console.log("El segundo numero dijitado es mayor el que el primero");
// }

// //operador ternario

// let nummayor=(num1>num2)
// ?"El numero mayor es el primero"
// : "El numero mayor es el segundo"

// console.log(nummayor);

//Condicionales con condicion compuesta

// let username=prompt("Digite su Usuario");
// let password=prompt("Digite su contraseña");

// if(username=="Avendaño" && password=="123")
// window.alert("Bienvenido");
// else if(username=="Avendaño" || password=="no se"){
// window.alert("Contraseña incorrecta");
// }
// else if(username=="johan" || password=="123"){
//     window.alert("Usuario incorrecto");
// }
// else{
//     window.alert("Revise sus credenciales");
// }

//Condicional multiple
let num1=parseInt(prompt("Digite el primer numero"));
let num2=parseInt(prompt("Digite el segundo numero"));
let operaciones=prompt("¿que operacion elige?");
switch(operaciones){
 case "suma": 
     resultado= parseInt(num1) + num2;
     window.alert(`Tu suma es: ${resultado}`)
    break;
    case "resta":
    resultado= num1 - num2;
    window.alert(`Tu resta es:${resultado}`)
    break;
    case "multiplicacion":
    resultado= num1 * num2;
    window.alert(`Tu multiplicacion es: ${resultado}`)
    break;
    case "division":
    resultado= num1 / num2;
    window.alert(`Tu division es: ${resultado}`)
    break;
    case "raiz1":
    resultado= Math.sqrt(num1).toFixed(3);
    window.alert(`Tu raiz del primer numero es: ${resultado}`)
    break;
    case "raiz2":
        resultado= Math.sqrt(num1).toFixed(3);
        window.alert(`Tu raiz del primer numero es: ${resultado}`)
        break;
    case "potencia":
    resultado= Math.pow(num1,num2);
    window.alert(`Tu potenciacion es: ${resultado}`)
    break;
    default:
        window.alert(`no elegiste`);
}

console.log(`El primero es ${num1}`);
console.log(`El segundo es ${num2}`);
