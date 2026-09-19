const	prompt = require("prompt-sync")();
const	fix = 0.27778
let	km = prompt("Enter  la vitesse en kilomètres par heure (km/h) : ");
let	ms = Number(km*fix)
console.log("la vitesse par mètres par seconde" , ms," (m/s)");
