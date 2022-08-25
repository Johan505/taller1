let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");
let op1=document.getElementById("opcion1");
let op2=document.getElementById("opcion2");
let op3=document.getElementById("opcion3");
let op4=document.getElementById("opcion4");
opciones.addEventListener('click', (e)=>{

    e.preventDefault();

    if(e.target.id=="opcion1"){
        resp.innerHTML='opcion incorrecta';
        resp.classList.add("incorrecto");
        resp.style.properties("visibility","visible");
        resp.classList.remove("correcto");
    }
    else if(e.target.id=="opcion2"){
        resp.innerHTML='opcion incorrecta';
        resp.classList.add("incorrecto");
        resp.style.properties("visibility","visible");
        resp.classList.remove("correcto");
    }
    else if(e.target.id=="opcion3"){
        resp.innerHTML='opcion correcta';
        resp.classList.add("correcto");
        resp.style.properties("visibility","visible");
        resp.classList.remove("incorrecto");
    }
    else if(e.target.id=="opcion4"){
        resp.innerHTML='opcion incorrecta';
        resp.classList.add("incorrecto");
        resp.style.properties("visibility","visible");
        resp.classList.remove("correcto");
    }

})