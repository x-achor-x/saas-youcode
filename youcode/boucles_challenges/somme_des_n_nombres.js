
const   prompt = require("prompt-sync")();
let     n = Number(prompt("Entrez un nombre :"));
let     sum = 0;
let     i = 0;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log(" La somme de " + n +" est :" + sum);
