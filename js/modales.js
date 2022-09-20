let btnmodal=document.getElementById("abrirModal");

let venmodal=document.getElementById("ventanaModal");

let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click", ()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none";
})

window.addEventListener("click", (e)=>{
    if(e.target==venmodal){
        venmodal.style.display="none";
    }
})