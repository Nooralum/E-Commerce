const form = document.querySelector('form');
form.addEventListener('submit', function(local){
// empecher soumission du formulaire si les champs sont vide
local.preventDefault();  

// recupérer valeur des champs

const nom_prénom = document.getElementsByClassName('form__field_1').value;
const Téléphone = document.getElementsByClassName('form__field_2').value;
const email =  document.getElementsByClassName('form__field_3').value;
const Mot_de_passe =  document.getElementsByClassName('form__field_4').value;
const Cfm_Mot_de_passe =  document.getElementsByClassName('form__field_5').value;

// Stocker les valeurs dans le localStorage
localStorage.setItem('form_field_1', nom_prénom);
localStorage.setItem('form_field_2', Téléphone);
localStorage.setItem('form_field_3', email);
localStorage.setItem('form_field_4', Mot_de_passe);
localStorage.setItem('form_field_5', Cfm_Mot_de_passe);

// redirection de l'utilisateur
alert('Formulaire soumis avec succès');
window.location.href = '../pages html/accueil.html';





}
);

