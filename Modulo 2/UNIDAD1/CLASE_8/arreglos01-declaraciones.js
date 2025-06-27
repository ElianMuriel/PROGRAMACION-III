console.log("Declaración de arreglos");
// Primera forma
let numeros = [2,3,2,3,267,4];
for(let num of numeros){
    console.log("numero: ",num);
}
//Segunda forma
let vacio = new Array();
for(let v of vacio){
    confirm.log("elemento: ", v);
}
console.log(vacio);

// Acceder a un elemento

console.log("elemento o: ", numeros[0]);
console.log("elemento 1. ",numeros[1]);
console.log("elemento 2: ",numeros[2]);

let j = 0;
for(let i of numeros){
    console.log("Elemento ",j,":",i);
    j++;
}

// Modificaciòn de elementos de un arreglo
console.log("Array de Números", numeros);
numeros[0] = 88888;
numeros[2] = 98;
numeros[5] = 1000;
console.log("Array de números modificados", numeros);

//Arreglar elemento a un array
//Agregar al final del array
numeros.push(50);
// Agregar al inicio del array
numeros.unshift(70);
console.log("Array de números incluidos", numeros);

//borrar un lemento de un array
// eliminar el último
numeros.pop();
//elimina el primero
numeros.shift();
console.log("Arreglo con números eliminados: ", numeros);