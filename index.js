console.log("zumiez");

const button = document.querySelector('nav button');
const nav = document.querySelector('nav');

button.addEventListener('click', function() {
    const expanded = nav.getAttribute('aria-expanded') === 'true' || false;
    nav.setAttribute('aria-expanded', !expanded);
});