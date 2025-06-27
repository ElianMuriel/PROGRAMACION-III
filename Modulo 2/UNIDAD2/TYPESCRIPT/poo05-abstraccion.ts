// Abstracción
abstract class Trabajador {
    public nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    abstract calcularSueldo(salarioDiario: number): void;
    saludoTrabajador(): void{
        console.log(`Hola ${this.nombre}.`);
    }
}

class Obrero extends Trabajador {
    calcularSueldo(salarioDiario: number): void{
        console.log(`Porcentaje hora extra: `, salarioDiario * 0.05)
    }
}

class Medico extends Trabajador {
    calcularSueldo(salarioDiario: number): void{
        console.log(`Porcentaje hora extra: `, salarioDiario * 0.1)
    }
}

const elMedico = new Medico ("Dr. Chapatin");
elMedico.calcularSueldo(15);
const carpintero = new Obrero ("Pinocho");
carpintero.calcularSueldo(10);
