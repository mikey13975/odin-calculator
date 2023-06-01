function add(a,b) {
	const sum = a + b;
	return sum;
};

function subtract(a,b) {
	const difference = a - b;
	return difference;	
};

function multiply(a,b) {
	const product = a * b;
	return product;
};

function divide(a,b) {
	const dividend = a / b;
	return dividend;
};

//let a = user input first number;
let a;
//let op = user input operator;
let op;

//let b = user input second number;
let b;

// display.innertext = "0";
function operate(a,op,b) {
	if(op === "+") {
		answer = add(a,b);
	} else if(op === "-") {
		answer = subtract(a,b);
	} else if(op === "*") {
		answer = multiply(a,b);
	} else if (op === "/") {
		answer = divide(a,b);
	}
	return answer;
};
function btnDisplay() {;
	const num = document.getElementsByClassName('numBtn');
	const operate = document.getElementsByClassName('operator');
	let btnPress = document.querySelectorAll("button");
	// console.log(btnPress);
	let display = document.getElementById('display');
	
	display.innerText = "0";
	// console.log(display.textContent);
	for (i = 0; i <btnPress.length ; i++){
		btnPress[i].addEventListener('click',function(e){
			let key = e.target;
			let screen = display.innerText;
			console.log(a, op, b);
			
			if(key.className === "numBtn" && screen === "0"){
				display.innerText = key.innerText;
				a = key.innerText;
				console.log(a);
				} else if(screen !== "0" && key.className === "numBtn" && op === undefined && b === undefined ){
					display.innerText += `${key.innerText}`;
					a += `${key.innerText}`;
					console.log(a);
					console.log(typeof(a));
				// console.log(screen);
				console.log("you pressed a number!");}
				else if(key.className === "operator") {
					op = key.innerText;
					display.innerText += `${key.innerText}`;
					console.log("that's an operator");
				}
				
				else if( key.className === "numBtn" && a !== undefined && op !== undefined && b === undefined){
					b = key.innerText;
					display.innerText += `${key.innerText}`;
					console.log(a, op, b);
				}

				else if (key.className === "numBtn" && a !== undefined && op !== undefined ) {
					b += `${key.innerText}`;
					display.innerText += `${key.innerText}`;
				}
			})
		
	}
}
	btnDisplay();