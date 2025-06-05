//Eventos addEventListener
function mostrarAlerta() {
    alert("Este botòn usa un evento en lìnea.");
}

function agregarProducto() {
    const ul = document.getElementById
    ('listaProductos1');
    const li = document.createElement('li');
    li.textContext = "Producto agregado desde un evento inline";
    ul.appendChild(li);
}
// Eventos addEventListener
document.getElementById('boton').addEventListener
('click', () => {
    alert('!Clic detectado!');
});

document.getElementById('campo').addEventListener
('iput', (e) => {
    console.log('Escribiendo:', e.target.value);
});

document.getElementById('btnAgregar').addEventListener
('click', () => {
    const ul = document.getElementById
    ('listaProductos2 ');
    const li = document.createElement('li');
    li.textContent = "Item agregado desde un evento con addEventListener";
    ul.appendChild(li);
});

