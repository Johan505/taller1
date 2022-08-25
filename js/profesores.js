const ops=document.getElementById('ops');
const rta=document.getElementById("respuesta")
ops.addEventListener('click', (e)=>{

    e.preventDefault();

    let op=parseInt(document.getElementById("seleccion").value);
    let op2=parseInt(document.getElementById("seleccion2").value);
    let op3=parseInt(document.getElementById("seleccion3").value);

    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);

    const rta=document.getElementById("respuesta");
   

    if(op==1 && op2==1 && op3==1){
        alert(`Correcto`);
        let texto=`<p><i class="fa-solid fa-check"></i></p>`;
        rta.innerHTML=texto; 
        rta.style.setProperty("font-size","70px");
        rta.style.setProperty("text-align","center");
    }

    else if(op==2 && op2==2 && op3==2){
        alert(`Correcto`);
        let texto=`<p><i class="fa-solid fa-check"></i></p>`;
        rta.innerHTML=texto; 
        rta.style.setProperty("font-size","70px");
        rta.style.setProperty("text-align","center");
    }

    else if(op==3 && op2==3 && op3==3){
        alert(`Correcto`);
        let texto=`<p><i class="fa-solid fa-check"></i></p>`;
        rta.innerHTML=texto; 
        rta.style.setProperty("font-size","70px");
        rta.style.setProperty("text-align","center");
    }

    else if(op==4 && op2==4 && op3==4){
        alert(`Correcto`);
        let texto=`<p><i class="fa-solid fa-check"></i></p>`;
        rta.innerHTML=texto; 
        rta.style.setProperty("font-size","70px");
        rta.style.setProperty("text-align","center");
    }
    else{
        alert(`Incorrecto`);
        let texto=`<p><i class="fa-solid fa-xmark"></i></p>`;
        rta.innerHTML=texto;
        rta.style.setProperty("font-size","70px");
        rta.style.setProperty("text-align","center");
    }
    
});