const prompt = require("prompt-sync")();

let length = parseInt(prompt("Enter le nombre des elements : "));
let i = 0;
let arr = [];
let num;
let swp;
let j = length - 1;

while (i < length) {
	num = parseInt(prompt("Entrer un nombre : "));
	arr.push(num);
	i++;
}

for (let i = 0; i < length; i++) {
	console.log(`i: ${i}`);
	for (j; j > 0; j--) {
		if (arr[j] < arr[i]) {
			swp = arr[i];
			//console.log(`swp: ${swp}`);
			arr[i] = arr[j];
			console.log(`i in arr: ${i}`);
			//console.log(`arr[i]: ${arr[i]}`);
			arr[j] = swp;
			console.log(`j in arr: ${j}`);
 			//console.log(`arr[j]: ${arr[j]}`);
		}
	}
	j = length - 1;
	console.log(arr);
}

//console.log(arr);

//[ 4, 12, 5, 17, 19 ]
//i: 1
//i in arr: 1
//j in arr: 2
//[ 4, 5, 12, 17, 19 ]
//i: 2
//i in arr: 2
//j in arr: 1
//[ 4, 12, 5, 17, 19 ]
//i: 3
//i in arr: 3
//j in arr: 2
//[ 4, 12, 17, 5, 19 ]
//i: 4
//i in arr: 4
//j in arr: 3
//[ 4, 12, 17, 19, 5 ]
