//Ejecuta la funcion despues de 3 segundos.
//La función no tiene nombre (anónima)

setTimeout(function() {
    console.log("Hola desde funcion setTime");
}, 3000);

let mensaje = function(){
    return "Mesaje desde una funciòn anonima";
}
console.log(mensaje());
