interface Persona {
    nombre: string,
    apellido: string,
}

let empleado: Persona = {
    nombre: "Bob",
    apellido: "Marley"
}
console.log(`Empleado: ${empleado.nombre} ${empleado.apellido}`);

interface Credenciales{
    clave: string,
    usuario: string,
}
function login(Credenciales: Credenciales): void{
    console.log("Bienvenido", Credenciales.usuario);
}
let miUsuario: Credenciales = {
    clave:"123",
    usuario: "Jesus",
}
login(miUsuario);

//Hacer una interface figura que tenga base, altura y tipo de figura(caudrado y rectangulo)
//se la pase a uan funcion segun el tipo que se le pase calcular el area

interface Figura {
    base: number;
    altura: number;
    tipo: 'cuadrado' | 'rectangulo';
}

function calcularArea(figura: Figura): number {
    if (figura.tipo === 'cuadrado') {
        return figura.base * figura.base;
    } else if (figura.tipo === 'rectangulo') {
        return figura.base * figura.altura;
    }
    return 0;
}

const figuracuadrado: Figura = {
    base: 4,
    altura: 4,
    tipo: 'cuadrado'
};

const figurarectangulo: Figura = {
    base: 5,
    altura: 3,
    tipo: 'rectangulo'
};

console.log(`Área1 (cuadrado): ${calcularArea(figuracuadrado)}`);
console.log(`Área2 (rectángulo): ${calcularArea(figurarectangulo)}`);

