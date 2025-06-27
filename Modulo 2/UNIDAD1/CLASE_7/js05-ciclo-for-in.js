const persona ={
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 10,
    direccion: 'an amazonas',
    telefono: '7777777756'
}
console.log('nombre', persona['nombre']);
console.log('Apellido', persona['apellido']);

console.log('Ciclo For.in');

for (const clave of persona){
    console.log(clave,' : ', persona[clave])
}

const producto = {
    nombre: 'Laptop',
    precio: 1000,
    descripcion: 'i7 13va generacion 500gb SSD 32 GbRAM'
}
for (const clave in producto){
    console.log(clave, ' : ',producto[clave])
}