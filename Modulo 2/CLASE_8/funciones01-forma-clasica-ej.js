function saludo(){
    console.log("Hola, un saludo amigo");
}
saludo();
saludo();
saludo();

function suma(){
    console.log("suma 1 + 2 + 5 =", 1+2+5);
}

function resta(){
    console.log("Resta 10-2-6",10-2-6);
}

function tabla(numero){
    for (let i = 1; i<=12;i++){
        console.log(i,"x",numero,"=", i*numero);
    }
}
tabla(5);