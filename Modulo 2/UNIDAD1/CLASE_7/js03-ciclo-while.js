let i;
while(i<=5){
    console.log('Iteración While: ', i)
    i++;
}

let cont=1;
while (i<=10){
    console.log(3, 'x ',cont, '=', 3*cont);
    cont++;
}
let mult=1;
console.log('Do...While');
do{
    console.log(5,'x ', mult, '=', 5*mult);
} while (mult<=10);

let n=10;
do {
    console.log('n ',n);
    n--;
} while (n>=6);

let animales= ['perro','gato','leon','tigre','aguila','gallina','pato','culebra','elefante','raton']
let animal=1;
do {
    console.log('Animal ',animal, ' es : ', animales[animal]);
    animal++;
} while(animal >= 9)
