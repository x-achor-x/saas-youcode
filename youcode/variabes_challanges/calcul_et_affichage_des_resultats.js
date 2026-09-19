const   prompt = require("prompt-sync")();

var     a = parseFloat ( prompt("Entrez le premier nombre : "));
var     b = parseFloat (prompt("Entrez le deuxième nombre : "));

console.log(a+b,'\n',a-b,'\n',a*b,'\n',a/b );
