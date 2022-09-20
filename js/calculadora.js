
 
 function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
   

    if(op==1){
        let sum=num1+num2;
        Swal.fire(`El numero 1 es ${num1} y el numero 2 ${num2} la suma es ${sum}`);
    }

    else if(op==2){
        let res=num1-num2;
        Swal.fire(`El numero 1 es ${num1} y el numero 2 ${num2} la resta es ${res}`)
    }

    else if(op==3){
        let mul=num1*num2;
        Swal.fire(`El numero 1 es ${num1} y el numero 2 ${num2} la multiplicación es ${mul}`)
    }

    else if(op==4){
        let div=num1/num2;
        Swal.fire(`El numero 1 es ${num1} y el numero 2 ${num2} la división es ${div}`)
    }
    
}
const btn=document.getElementById('boton');
btn.addEventListener('click', calcular);


const ops=document.getElementById('ops');
const rta=document.getElementById("respuesta")
ops.addEventListener('click', (e)=>{
    
let num1=parseInt(document.getElementById("num1").value);
let num2=parseInt(document.getElementById("num2").value);
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);

    if(e.target.id=="suma"){
        console.log(`${num1}, ${num2}`);
        let sum = num1+num2;
        Swal.fire(`${sum}`);
        let texto=`<p><i class="fa-solid fa-check"></i></p>`;
        rta.innerHTML=texto; 
        rta.style.setProperty("font-size","80px");
    }
    else if(e.target.id=="resta"){
        let res = num1-num2;
        Swal.fire(`${res}`);
        let texto=`<p><i class="fa-solid fa-xmark"></i></p>`;
        rta.innerHTML=texto;
        rta.style.setProperty("font-size","80px");
    }

});


