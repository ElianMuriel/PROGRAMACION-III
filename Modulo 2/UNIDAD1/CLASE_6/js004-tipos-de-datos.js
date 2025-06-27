console.log("TIPOS DE VARIABLES");
//Primitivas
console.log("1. Variables Primitivas");
let mensaje = "Hola como estas?"; //String
let edad = 10; //Number
let activo = true; //Boolean
let vacio = null; //Null
let x; //Undefined

console.log("Mensaje ", mensaje, "tipo de variable: ", typeof mensaje);
console.log("Edad  ", edad, "tipo de variable: ", typeof edad);
console.log("Activo ", activo, "tipo de variable: ", typeof activo);
console.log("Vacio ", vacio, "tipo de variable: ", typeof vacio);
console.log("X ", x, "tipo de variable: ", typeof x);

//No Primitivias
console.log("2. Variables No Primitivas");
const persona = {
    Nombre: "Christian",
    Apellido: "Alcocer"
}
console.log("Apellido: ", persona.Apellido, "tipo de variable: ", typeof persona);
persona.Apellido = "Gonzales";
console.log("Apellido: ", persona.Apellido, "tipo de variable: ", typeof persona);

const frutas = ["peras", "manzanas", "naranjas", "piñas"];
console.log("Frutas: ", frutas, "tipo de variable: ", typeof frutas);

const hoy = new Date();
console.log("Fecha Actual: ", hoy, "tipo de variable: ", typeof hoy);

console.log("2.1. Expresiones Regulares");
const regex = /[a-z]+/;
console.log(regex.test("abc1"));

//Conversiones
console.log("3. Conversiones");
a = "10";
b = 5;
multiplicacion = a * b;
console.log("a = ", a, "tipo de variable: ", typeof a);
console.log("b = ", b, "tipo de variable: ", typeof b);
console.log("Resultado de la Multiplicacion ", multiplicacion, "tipo de variable: ", typeof multiplicacion);