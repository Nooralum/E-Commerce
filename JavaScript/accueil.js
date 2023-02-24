
/* Sélection des éléments HTML */
let link = document.getElementById('link')
let menu = document.getElementById('menu')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  menu.classList.toggle('open')
  ul.classList.toggle('open')
})