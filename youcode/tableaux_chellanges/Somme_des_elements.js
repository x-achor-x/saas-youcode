const prompt = require("prompt-sync") ();

const length = parseInt(prompt("Entrer votre nombre d'éléments : "));
let some = 0;
let i = 0;

while (i < length) {
	let num = parseInt(prompt("Enter un seul nombre : "));
	some += num;
	i++;
}

console.log(some);
