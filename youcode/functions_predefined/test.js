//const	prompt = require("prompt-sync")();

//var	a = []
//var	ask = prompt("Enter ur number of elements :" );

//for( i = 0 ; i < ask ; i++ ) {
//	let nombre = prompt(" enter ur number : ");
//	a.push(nombre);
//}
//var a = [1,2,3,4,5];

function arrayLength(a){
  var i = 0;
  while(a[i])
	{
    	i++;
	}
  	return i;
}

console.log(arrayLength(""));       // 5

