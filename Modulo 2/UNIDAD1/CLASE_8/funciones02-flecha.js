// FUNCIONES FLECHA:
const saludar = ()=> {
    console.log("hola desde arrow function")
}
saludar();
saludar();
saludar();

const cuadrado1 = (num)=>{
    console.log("cuadrado de: ",num,"es igual a: ", num*num)
}
cuadrado1(4);

// Con input y alert
const cuadrado2 = (num)=>{
    alert('Cuadrado de: ${num} es igual a: ${num*num}');
}
let num = prompt("ingrese el promero numero: ");
let numero = Number(num);
cuadrado2(numero);