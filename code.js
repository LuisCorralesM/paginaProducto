import {vestidos, faldas, jeans, tennis, zandalias} from './data/bdVestidos.js'

const nav = document.querySelector('.content-span button');
const menu = document.querySelector('.content-menu');
const gridVestidos = document.querySelector('.grid-vestidos');
const girdFaldas = document.querySelector('.grid-faldas');
const girdJeans = document.querySelector('.grid-jeans');
const girdTennis = document.querySelector('.grid-tennis');
const girdZandalias = document.querySelector('.grid-zapato-zandalia');


nav.addEventListener('click', e=>{
    nav.classList.toggle('open');
    menu.classList.toggle('content-menu-open');
});

vestidos.forEach(vestido => {
    const {src,nombre,precio,href,boton} = vestido
    gridVestidos.innerHTML += `
    <div class="grid-vestidos__items">
        <img src=${src} alt="">
        <h2><span>${nombre}</span><br>${Math.round(Math.random()*precio)}</h2>
        <a href=${href}>
            <button>${boton}</button>
        </a>
    </div>
    `
});

faldas.forEach(falda => {
    const {src,nombre,precio,href,boton} = falda
    girdFaldas.innerHTML += `
    <div class="grid-vestidos__items">
        <img src=${src} alt="">
        <h2><span>${nombre}</span><br>${Math.round(Math.random()*precio)}</h2>
        <a href=${href}>
            <button>${boton}</button>
        </a>
    </div>
    `
});

jeans.forEach(jean => {
    const {src,nombre,precio,href,boton} = jean
    girdJeans.innerHTML += `
    <div class="grid-vestidos__items">
        <img src=${src} alt="">
        <h2><span>${nombre}</span><br>${Math.round(Math.random()*precio)}</h2>
        <a href=${href}>
            <button>${boton}</button>
        </a>
    </div>
    `
});

tennis.forEach(ten => {
    const {src,nombre,precio,href,boton} = ten
    girdTennis.innerHTML += `
    <div class="grid-vestidos__items">
        <img src=${src} alt="">
        <h2><span>${nombre}</span><br>${Math.round(Math.random()*precio)}</h2>
        <a href=${href}>
            <button>${boton}</button>
        </a>
    </div>
    `
});

zandalias.forEach(zandalia => {
    const {src,nombre,precio,href,boton} = zandalia
    girdZandalias.innerHTML += `
    <div class="grid-vestidos__items">
        <img src=${src} alt="">
        <h2><span>${nombre}</span><br>${Math.round(Math.random()*precio)}</h2>
        <a href=${href}>
            <button>${boton}</button>
        </a>
    </div>
    `
});
