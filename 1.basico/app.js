let win = window;
let dom = document;
// let header = document.querySelectorAll('header h1');
// const arreglo = [...header];
// console.log(header);
// arreglo.map((elemento) =>
// {
//   console.log(elemento);

// })

let p = dom.querySelector("main h1");
// const container = document.getElementsByClassName('container')
let api = dom.querySelectorAll("#api");

// api.textContent = "No valido";
let formularios = dom.forms;
let imagenes = dom.images;
let script = dom.scripts;

let list = dom.querySelector("ul");
let lists = dom.querySelectorAll("ul.list > li.item"); //> es para los hijos
let card = dom.querySelectorAll('div.cards > .card');
let cards = dom.querySelector('div.cards');
console.log(cards.children);
console.log("Padre", cards.parentElement);
console.log("Hermano", cards.previousElementSibling);

let body = dom.querySelector('body')
console.log(body.previousElementSibling);
console.clear();
let elemento = dom.querySelector('#elementos2');
elemento.textContent = 'Nuevo';
elemento.innerHTML = "<p> textos </p><p> textos2 </p>";
setTimeout(() => {
  body.classList.add('bg-red')
  console.log(body.classList);
}, 1000);

