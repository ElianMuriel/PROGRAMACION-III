console.log("CONDICIONALES");
//if
console.log("If Simple");
temperatura = 35;
if (temperatura > 30){
    console.log("Hace Calor");
}

//if - else
console.log("If Else");
usuarioLogueado = true;
if (usuarioLogueado){
    console.log("Bienvenido de Nuevo");
} else {
    console.log("Por favor, Inicia Sesion");
}

//if - else if - else
console.log("If Else If Else");
nota = 9;
if (nota >= 9){
    console.log("Excelente");
} else if (nota >= 6){
    console.log("Aprobado");
}else {
    console.log("Reprobado");
}

//if anidado
console.log("If Anidado");
edad = 18;
tieneLicencia = true;
if (edad >= 18){
    if (tieneLicencia){
        console.log("Puede Conducir");
    } else {
        console.log("Necesita Licencia para Conducir");
    }
} else {
    console.log("Es Menor de Edad");
}

//if con Op. Logicos
console.log("If con Op. Logicos");
let estudiante = true;
let tieneDescuento = true;
if (estudiante && tieneDescuento){
    console.log("Aplica a Tarifa Reducida");
}

esAdmin = true;
esEditor = false;
if (esAdmin || esEditor){
    console.log("Puede editar el Contenido");
}