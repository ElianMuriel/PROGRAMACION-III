let numero = Number(prompt("Ingrese un Numero:"));

if(numero % 3 === 0 && numero % 5 ===0){
    alert("El Numero es Multiplo de 3 y de 5");
}else if(numero % 3 === 0){
    alert("El Numero es Multiplo de 3");
}else if(numero % 5 === 0){
    alert("El Numero es Multiplo de 5");
}else{
    alert("El Numero No es Multiplo de 3 y ni de 5");
}