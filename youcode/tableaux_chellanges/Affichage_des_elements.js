const prompt = require("prompt-sync")();

const length = Number(prompt("Entrer votre nombre d'éléments : "));
let tmp = [];
let arr;
let i = 0;

while (i < length) {
	arr = parseInt(prompt("Enter one number for the arr : "));
	tmp.push(arr);
	i++;
}

console.log(tmp);
