let cantidad: number =19;
let nombre: string = " JOSE ZAMBRANO";
let opcion: boolean = true;
console.log("cantidad", cantidad);
console.log("Nombre", nombre);
console.log("Opcion", opcion);

let opcional:any = "comodin any";

opcional=100;

// Tipos de DATOS COMPUESTOS

let equipos: string[] =["Barcelona", "Real Madrid", "Ecuador", "Vino Tinto", "La Liga"];
console.log("Equipos", equipos);
let edades: Array<number> = [10, 12, 23, 456]
console.log("Edades", edades);

//taplas
let persona: [string, number] = ["Pedro", 6161616];
console.log("Alumno", persona);

//Enums
let Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO
}
let meEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);