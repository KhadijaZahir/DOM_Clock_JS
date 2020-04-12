// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

// var today = new Date();

//Ajouter l'heure , minite , seconde  dans des varaiables

// var hour = today.getHours();
//  var min = today.getMinutes();
//  var sec = today.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// var hourhand = hour*360/12 + ((min * 360/60)/12);
// var minhand= (min * 360/60) + (sec* 360/60)/60;
// var sechand = sec * 360/60;
// Déplacer les aiguilles 
function demarrerLaMontre() {
  var today = new Date();
  var hour = today.getHours();
   var min = today.getMinutes();
   var sec = today.getSeconds();

   var hourDeg = hour*360/12 + ((min * 360/60)/12);
   var minDeg= (min * 360/60) + (sec* 360/60)/60;
   var secDeg = sec * 360/60;

   AIGUILLEHR.style.transform = `rotate(${hourDeg}deg)`;
   AIGUILLEMIN.style.transform = `rotate(${minDeg}deg)`;
   AIGUILLESEC.style.transform = `rotate(${secDeg}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);