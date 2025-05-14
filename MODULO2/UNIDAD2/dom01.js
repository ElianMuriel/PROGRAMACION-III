console.log(document.head);

const titulo = document.getElementsByNameIs('titulo');
console.log("elemento titulo", titulo)

const notas = document.getElementsByClassName('notas');
Array.from(notas).forEach(n=>console.log(n.textContent));

const items = document.querySelectorAll('.item');
item.forEach(elemento=>console.log(elemento.textContent));

