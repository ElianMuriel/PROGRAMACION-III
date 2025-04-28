//Saludo

function saludo (invitado = " a todos los presentes"){
    console.log("Bienvenido ",invitado);
}
saludo("Juan");
saludo();


//Area del Círculo

function circulo(radio = 5){
    console.log("El área del círculo con radio ", radio, " es: ", 3.14 * radio * radio, "m²");
}

circulo(4);
circulo();

Temperatura = [2, 5, 7, 3, 6, 8, 8];

function Tpromedio(temps){
    let suma = 0;
    for (let i = 0; i < temps.length; i++) {
        suma += temps[i];
    }
    let promedio = suma / temps.length;
    console.log("El promedio de las temperaturas es: ", promedio, "°C");
}

Tpromedio(Temperatura);
