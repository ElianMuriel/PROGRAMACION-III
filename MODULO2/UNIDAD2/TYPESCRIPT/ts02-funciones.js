function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
console.log(saludar("Betty Marmol"));
//Parametros Opcionales
function obtenerApellido(apellido) {
    return "Mi apellido, ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());
//Parametros Opcionales
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "Mi edad, ".concat(edad, " a\u00F1os");
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());
//funciones tipo flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("La suma es :", sumar(5, 4));
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("Suceso en Norte de Quito");
//Tipar funciones como variables
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("Resultado suma", operacion(15, 30));
//funcion que reciba un arreglo string y salude a cada persona
