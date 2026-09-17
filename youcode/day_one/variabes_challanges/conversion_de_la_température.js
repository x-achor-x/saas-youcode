const	prompt = require('prompt-sync')();
let	fix = 273.15;
let	c = prompt("Enter la température en degrés Celsius :");
let	k = Number(c)+ fix;
console.log( "la temperature en kelvin : ",k);
