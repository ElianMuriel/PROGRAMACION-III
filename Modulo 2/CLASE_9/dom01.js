console.log(document.head);

const titulo = document.getElementById('titulo');
console.log('elemento titulo', titulo);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(n=>console.log(n.textContent));

const items = document.querySelectorAll('.item');
items.forEach(elemento=>console.log(elemento.textContent));

const mensaje = document.getElementById('mensaje');
mensaje.textContent = 'nuestro h2 se ha actualizado';
mensaje.style.color = 'red';

const enlace = document.getElementById('link');
enlace.textContent = 'ir a google';
enlace.setAttribute('href','https://www.google.com')


