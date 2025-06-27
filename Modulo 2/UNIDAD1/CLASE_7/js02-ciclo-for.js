for (let i =1; i<=15; i++){
    console.log('Iteración : ', i);
}
for (let i =1; i<=10; i++){
    console.log(i, "x 2 =",i*2);
}
let suma =0;
for (let i =1; i<=10; i++){
    if (i % 2 === 0){
        console.log('numero par',i)
        suma+=i;
    }
}
console.log('la suma d elos numeros pares es: ',suma);

for (let i =1; i<=10; i++){
    console.log('cuadrado de ',i,'es', i**i)
}

let palabra = 'Welcome to JavaScript';
for(let i = 0; i <palabra.length; i++){
    console.log(palabra[i]);
}