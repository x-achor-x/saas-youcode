const	prompt = require("prompt-sync")();

var	c = prompt(" Saisissez la température : ");
if	( c < 0){
	console.log("Solide");
}
else if ( c >= 0 && c < 100) {
	console.log("Liquide");
}
else {
	console.log("Gaz");
}
