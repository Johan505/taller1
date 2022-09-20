
let btnmodal=document.getElementById("abrirModal");

let venmodal=document.getElementById("ventanaModal");

let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none"; 
}
})



let btnmodalArea=document.getElementById("abrirModal-area");

let venmodalArea=document.getElementById("ventanaModal-area");

let cermodalArea=document.querySelector(".cerrarModal-area");

btnmodalArea.addEventListener("click",()=>{
    venmodalArea.style.display="block";
})

cermodalArea.addEventListener("click",()=>{
    venmodalArea.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodalArea){
    venmodalArea.style.display="none"; 
}
})


//Rectangulo 

let btnmodal1=document.getElementById("abrirModal-rec");

let venmodal1=document.getElementById("ventanaModal-rec");

let cermodal1=document.querySelector(".cerrarModal-rec");

btnmodal1.addEventListener("click",()=>{
    venmodal1.style.display="block";
})

cermodal1.addEventListener("click",()=>{
    venmodal1.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal1){
    venmodal1.style.display="none"; 
}
})


let btnmodal2=document.getElementById("abrirModal-rec-area");

let venmodal2=document.getElementById("ventanaModal-rec-area");

let cermodal2=document.querySelector(".cerrarModal-rec-area");

btnmodal2.addEventListener("click",()=>{
    venmodal2.style.display="block";
})

cermodal2.addEventListener("click",()=>{
    venmodal2.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal2){
    venmodal2.style.display="none"; 
}
})

//Triangulo

let btnmodal3=document.getElementById("abrirModal-tri");

let venmodal3=document.getElementById("ventanaModal-tri");

let cermodal3=document.querySelector(".cerrarModal-tri");

btnmodal3.addEventListener("click",()=>{
    venmodal3.style.display="block";
})

cermodal3.addEventListener("click",()=>{
    venmodal3.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal3){
    venmodal3.style.display="none"; 
}
})



let btnmodal4=document.getElementById("abrirModal-tri-area");

let venmodal4=document.getElementById("ventanaModal-tri1");

let cermodal4=document.querySelector(".cerrarModal-tri-area");

btnmodal4.addEventListener("click",()=>{
    venmodal4.style.display="block";
})

cermodal4.addEventListener("click",()=>{
    venmodal4.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal4){
    venmodal4.style.display="none"; 
}
})


//Circulo

let btnmodal5=document.getElementById("abrirModal-cir");

let venmodal5=document.getElementById("ventanaModal-cir");

let cermodal5=document.querySelector(".cerrarModal-cir");

btnmodal5.addEventListener("click",()=>{
    venmodal5.style.display="block";
})

cermodal5.addEventListener("click",()=>{
    venmodal5.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal5){
    venmodal5.style.display="none"; 
}
})


let btnmodal6=document.getElementById("abrirModal-cir-area");

let venmodal6=document.getElementById("ventanaModal-cir1");

let cermodal6=document.querySelector(".cerrarModal-cir1");

btnmodal6.addEventListener("click",()=>{
    venmodal6.style.display="block";
})

cermodal6.addEventListener("click",()=>{
    venmodal6.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal6){
    venmodal6.style.display="none"; 
}
})




let btn = document.getElementById('btn')


function perimetroCuadrado(){

    let res = document.getElementById("res")
    let lado = parseInt(document.getElementById('lado').value)

    let resultado = lado*4


    let inser = `<p>El perimetro del cuadrado es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btn.addEventListener('click',perimetroCuadrado)

let btnArea = document.getElementById('btn-area')


function areaCuadrado(){

    let res = document.getElementById("res1")
    let base = parseInt(document.getElementById('cua-base').value)
    let altura = parseInt(document.getElementById('cua-altura').value)

    let resultado = base*altura


    let inser = `<p>El area del cuadrado es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btnArea.addEventListener('click',areaCuadrado)


//Rectangulo

let btnRec = document.getElementById('btn-rec')


function perimetroRectangulo(){

    let res = document.getElementById("res2")
    let base = parseInt(document.getElementById('rec-base').value)
    let altura = parseInt(document.getElementById('rec-altura').value)

    let resultado =  (base*2)+(altura*2)


    let inser = `<p>El perimetro del rectangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btnRec.addEventListener('click',perimetroRectangulo)


let btnRecArea = document.getElementById('btn-rec-area')


function areaRectangulo(){

    let res = document.getElementById("res3")
    let base = parseInt(document.getElementById('rec-base-area').value)
    let altura = parseInt(document.getElementById('rec-altura-area').value)

    let resultado =  base*altura


    let inser = `<p>El area del rectangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btnRecArea.addEventListener('click',areaRectangulo)


//Triangulo


let btntri = document.getElementById('btn-tri')


function perimetroTriangulo(){

    let res = document.getElementById("res-tri")
    let lado1 = parseInt(document.getElementById('tri-lado1').value)
    let lado2 = parseInt(document.getElementById('tri-lado2').value)
    let lado3 = parseInt(document.getElementById('tri-lado3').value)

    let resultado =  lado1+lado2+lado3


    let inser = `<p>El perimetro del triangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btntri.addEventListener('click',perimetroTriangulo)


let btntri1 = document.getElementById('btn-tri1')


function areaTriangulo(){

    let res = document.getElementById("res-tri1")
    let base = parseInt(document.getElementById('base-tri').value)
    let altura = parseInt(document.getElementById('altura-tri').value)

    let resultado =  (base*altura)/2


    let inser = `<p>El area del triangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btntri1.addEventListener('click',areaTriangulo)



//Circulo

let btncir = document.getElementById('btn-cir')


function perimatroCirculo(){

    let res = document.getElementById("res-cir")
    let radio = parseInt(document.getElementById('radio').value)


    let resultado =  2*3.1416*radio


    let inser = `<p>El perimetro del circulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btncir.addEventListener('click',perimatroCirculo)


let btncirarea = document.getElementById('btn-cir-area')


function areaCirculo(){

    let res = document.getElementById("res-cir-area")
    let radio = parseInt(document.getElementById('radio-area').value)


    let resultado =  (radio*radio)*3.1416


    let inser = `<p>El area del circulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '20px');
    


}

btncirarea.addEventListener('click',areaCirculo)






