//FORMAS POPULARES PARA RECORRER UN AREGLO

//1
console.log("Recorrer arreglos");
let numeros = [2,3,2,3,267,4]
for(let num of numeros){
    console.log("numero : ",num);
}

//2
let ciudades = ["Quito","Guayaquil","Caracas", "Maracaibo","Tumbaco"]
for(let i=0; i<ciudades.length;i++){
    console.log("Ciudad: ",ciudades[i]);
}

//3)
let colores = ["azul","amarillo","verde","rojo"];
colores.forEach(function(valor,indice){
    console.log("color ",indice,":",valor);
}
);