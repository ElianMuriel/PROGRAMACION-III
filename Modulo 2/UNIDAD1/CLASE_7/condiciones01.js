let a = prompt("Ingrese el primer numero:");
let b = prompt("Ingrese el segundo numero:");

a = Number(a);
b = Number(b);

if(a > b){
    alert("El Primer Numero es el Mayor");
} else if(a < b){
    alert("El Segundo Numero es el Mayor");
} else {
    alert("Ambos Numeros son Iguales");
}