//Manipulacion de objeto
let alumno ={
    nombre: 'Esteban',
    apellido: 'Corella',
    direccion: 'Av. Calderon',
    telefono: 39389433434
}

console.log(alumno);

//Acceder a propiedades
console.log('apellido del alumno: ',alumno.apellido);
console.log('nombre del alumno: ',alumno['nombre']);

//Modificar propiedades
alumno.apellido = 'Lopez';
alumno['direccion'] = 'Av. Bolivar';

console.log(alumno);

//Incluir nueva propiedad
alumno.promedio = 9;

console.log(alumno);

//eliminar propiedad
delete alumno.promedio;

console.log(alumno);

//Usamos parametros rest
alumnoClonado = {...alumno}
alumnoClonado.nombre = 'Antonio';
alumnoClonado.apellido = 'Apellido';
console.log(alumnoClonado);

//Multiplicar PrecioUnitario * Cantidad y sumarle IVA
//asignar el valor subtotal
item = {
    preciounitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: 'Laptop',
    subtotal: 0
}
precio = item.preciounitario;
cantidad = item;
iva = item.iva;

item.subtotal = (item.preciounitario * item.cantidad + iva) 
console.log("Subtotal con IVA:", item.subtotal);

//
for (let e in item){
    console.log(e, ' : ',item[e])
};

//listar las claves o propiedades
console.log(Object.keys(item));
//listar los valores
console.log(Object.values(item));

//Metodos o funciones en objetos
usuario = {
    nombre: 'Luis',
    saludar: function(){
        return 'Hola soy ' + this.nombre;
    }
}
console.log(usuario.saludar());

//objetos anidados
categoria = {
    nombre:'Electronica',
    productos: ['Laptop','Monitor','Teclado', { cantidad:12, marca:'Sony' }],
    descripcion: {
        capacidad:'16hz',
        tamaño:'12 pulgadas'
    }
}
console.log(categoria);