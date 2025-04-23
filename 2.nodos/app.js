let padre = document.querySelector(".container");
let node = document.createElement('h2');
node.textContent = "Titulo de segundo nivel";
let texto = document.createTextNode("Palabra texto")
padre.appendChild(node);
padre.appendChild(texto);
let lista = document.querySelector('#list')
console.log(lista);

let html = document.createElement("li");
let css = document.createElement("li");
let js = document.createElement("li");

html.classList.add('item');
css.classList.add("item");
js.classList.add("item");

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

lista.append(html, css, js);

let card = document.querySelector('.card')
console.log(card);
let titulo = document.createElement('h2');
titulo.textContent = "Titulo de la card";

card.insertBefore(titulo, lista);

// card.insertAdjacentElement("afterend", titulo);
// card.insertAdjacentElement("beforebegin", titulo);
// card.insertAdjacentHTML("afterend", "<h3>Prueba HTML after</h3>");
// card.insertAdjacentHTML("beforebegin", "<h3>Prueba HTML before</h3>");
// card.insertAdjacentText("afterend", "prueba Text after");
// card.insertAdjacentText("beforebegin", "prueba Text before");

let beforebegin = document.createElement('li');
beforebegin.classList.add('item', 'before');
beforebegin.textContent = "1";

let afterbegin = document.createElement('li');
afterbegin.classList.add('item')
afterbegin.textContent = "2";

let beforeend = document.createElement('li');
beforeend.classList.add('item');
beforeend.textContent = "3";

let afterend = document.createElement('li');
afterend.classList.add('item','before');
afterend.textContent = "4";

lista.insertAdjacentElement('beforebegin', beforebegin) //1
lista.insertAdjacentElement("beforeend", beforeend); //4
lista.insertAdjacentElement('afterbegin', afterbegin); //2
lista.insertAdjacentElement('afterend', afterend); //3

let card_dias = document.querySelector('#dias');
const dias = [
  {
    id: 1,
    name: "Lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Martes",
    img: "https://picsum.photos/640/361",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Miercoles",
    img: "https://picsum.photos/640/362",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Jueves",
    img: "https://picsum.photos/640/363",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Viernes",
    img: "https://picsum.photos/640/364",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    name: "Sabado",
    img: "https://picsum.photos/640/365",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    name: "Domingo",
    img: "https://picsum.photos/640/366",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
console.log(dias);
dias.map(({ name, img, parrafo }) =>
{
  //creacion
  let card = document.createElement("div");
  let header = document.createElement("div");
  let title = document.createElement("h2");
  let body = document.createElement("div");
  let imagen = document.createElement("img");
  let texto = document.createElement("p");
  //adiccion de estilos
  card.classList.add("card");
  header.classList.add("card__header");
  title.classList.add("card__title");
  body.classList.add("card__body");
  imagen.classList.add("card__img");
  texto.classList.add("card__paragraph");
  //administrar atributos
  title.textContent = name;
  imagen.setAttribute("src", img);
  texto.textContent = parrafo;
  //unir elementos
  header.append(title);
  card.append(header, body);
  body.append(imagen, texto);
  card_dias.append(card);
});