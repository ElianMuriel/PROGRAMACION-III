class Animal {
    public nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    moverse(): void{
        console.log(`Sonido del animal.`)
    }
}

class Gato extends Animal {
    emitirSonido(): void{
        console.log(`Miau`)
    }
}

class Vaca extends Animal {
    emitirSonido(): void{
        console.log(`Muuuu`)
    }
}

const miGato = new Gato ("Hello Kitty");
miGato.emitirSonido();
const miVaca = new Vaca ("Lechera");
miVaca.emitirSonido();
