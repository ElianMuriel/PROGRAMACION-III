var empleado = {
    nombre: "Bob",
    apellido: "Marley"
};
console.log("Empleado: ".concat(empleado.nombre, " ").concat(empleado.apellido));
function login(Credenciales) {
    console.log("Bienvenido", Credenciales.usuario);
}
var miUsuario = {
    clave: "123",
    usuario: "Jesus",
};
login(miUsuario);
function calcularArea(figura) {
    if (figura.tipo === 'cuadrado') {
        return figura.base * figura.base;
    }
    else if (figura.tipo === 'rectangulo') {
        return figura.base * figura.altura;
    }
    return 0;
}
var figuracuadrado = {
    base: 4,
    altura: 4,
    tipo: 'cuadrado'
};
var figurarectangulo = {
    base: 5,
    altura: 3,
    tipo: 'rectangulo'
};
console.log("\u00C1rea1 (cuadrado): ".concat(calcularArea(figuracuadrado)));
console.log("\u00C1rea2 (rect\u00E1ngulo): ".concat(calcularArea(figurarectangulo)));
