let comida=['arepa','pan','tinto','chocolate','cafe']


comida.push('empanada'); //agrega al final
comida.pop(); //elimina al final
comida.unshift('gaseosa'); //agrega al inicio
comida.shift(); //elimina al principio
comida.splice(1,1);

console.log(comida[2]);
console.log(comida.length);
console.log(comida[comida.length-1]);

console.log(comida.sort());//ordena ascendente

comida.forEach(function(elemento,index,array){
    console.log(`posición ${index} elemento ${elemento}`);
}
)

let aprendices=[];
let seguir=true;
while(seguir==true){

    aprendices.push(prompt("Ingrese nombre aprendiz"))
    seguir=confirm("Desea ingresar otro valor");
}

console.log(aprendices);
let filtro=aprendices.filter(aprendices=>aprendices=="johan");
console.log(filtro);

let busqueda=aprendices.find(aprendices=>aprendices=="johan");
console.log(busqueda);


let aprendiz=[
    {primernombre:"Johan", primerapellido:"Avendaño"},
    {primernombre:"Santiago", primerapellido:"Carreño"}
]

console.log(aprendiz);

let nombreCompleto=aprendiz.map(function(elemento,index,array){
    return `${elemento.primernombre} ${elemento.primerapellido}`
});

console.log(nombreCompleto);
