//Eventos Inline
function mostrarAlerta () {
    alert("Este boton usa un evento en linea.");
}

function agregarProducto(){
    ('listaProductos1');
    const li = document.createElement('li');
    li.textContent = "Producto agregado desde un evento inline";
    ul.appendChild(li);
}

//evento addEventListener
document.getElementById('boton').addEventListener('click', ()=>{
    alert('¡Click detectado!');
});

document.getElementById('campo').addEventListener('input', (e) =>{
    console.log('Escribiendo:', e.target.value);
});

