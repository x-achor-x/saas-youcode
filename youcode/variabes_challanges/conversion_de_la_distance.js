const	prompt = require("prompt-sync")();
const	fix = 1093.61;
let	km = prompt("Enter la distance en kilomètres : ");
let	yards = Number(km*fix);
console.log("La distance est ", yards , "Yards");
