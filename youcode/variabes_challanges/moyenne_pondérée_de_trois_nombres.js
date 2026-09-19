const	prompt = require("prompt-sync")();

var	a = parseFloat (prompt("Entrez votre 1er nombre : "));
var	b = parseFloat (prompt("Entrez votre 2eme nombre : "));
var     b = parseFloat (prompt("Entrez votre 3eme nombre : "));

const	c1 = 2 ;
const	c2 = 3 ;
const	c3 = 5 ;

var	line1 = ( a*c1 ) + ( b*c2) + (c*c3) ;
var	line2 = c1 + c2 + c3 ; 

consloe.log( line1 / line2);
