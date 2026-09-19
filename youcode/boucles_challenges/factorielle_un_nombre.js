const   prompt = require("prompt-sync")();
let     n = Number(prompt("Entrez un nombre :"));
let     facto = 1;
let     i = 1;

while (i <= n) {
    facto = facto * i;
    i++;
}

console.log(n + "! = " + facto);
