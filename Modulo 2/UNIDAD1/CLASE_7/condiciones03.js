let nota = prompt("Ingresa tu Nota (0-10):");
nota = Number(nota);

if(nota >= 9){
    alert("Excelente");
}else if(nota >= 7){
    alert("Bueno");
}else if(nota >= 5){
    alert("Regular");
}else{
    alert("Reprobado");
}