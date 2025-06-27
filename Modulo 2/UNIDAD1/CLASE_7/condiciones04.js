let edad = Number(prompt("Cual es tu Edad?"));
let password = prompt("Ingresa tu Contraseña:");

if(edad >= 18 && password === "admin123"){
    alert("Acceso Concedido");
}else{
    alert("Acceso Denegado");
}