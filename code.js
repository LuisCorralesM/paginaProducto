const nav = document.querySelector('.content-span button');
const menu = document.querySelector('.content-menu');
nav.addEventListener('click', e=>{
    nav.classList.toggle('open');
    menu.classList.toggle('content-menu-open');
});
