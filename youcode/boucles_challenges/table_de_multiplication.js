const   prompt = require("prompt-sync")();

var     n = prompt("Veillier entrer votre nombre de multiplication : ");
var     c;
var     k = 1;
while(k <= 10 ){
        c = k*n ;
        console.log(c);
        k++;
}
