function add(a,b) {
	
	let sum = parseFloat(a) + parseFloat(b);
	console.log(sum);
	return sum;
};

function subtract(a,b) {
	const difference = parseFloat(a) - parseFloat(b);
	return difference;	
};

function multiply(a,b) {
	const product = parseFloat(a) * parseFloat(b);
	return product;
};

function divide(a,b) {
	const dividend = parseFloat(a) / parseFloat(b);
	return dividend;
};

//let a = user input first number;
let a;
//let op = user input operator;
let op;

//let b = user input second number;
let b;

// display.innertext = "0";
function btnDisplay() {;
	const num = document.getElementsByClassName('numBtn');
	const operator = document.getElementsByClassName('operator');
	let btnPress = document.querySelectorAll("button");
	// console.log(btnPress);
	let display = document.getElementById('display');

	// display.innerText = "0";
	// console.log(display.textContent);
	for (i = 0; i <btnPress.length ; i++){
		btnPress[i].addEventListener('click',function(e){
			let key = e.target;
			let screen = display.innerText;
			console.log(a, op, b);
			
			if(key.className === "numBtn" && a === undefined){
				display.innerText = key.innerText;
				a = key.innerText;
				console.log(a);
				} else if(a !== undefined && key.className === "numBtn" && op === undefined && b === undefined ){
					display.innerText += `${key.innerText}`;
					a += `${key.innerText}`;
					console.log(a);
					console.log(typeof(a));
				// console.log(screen);
				console.log("you pressed a number!");}
				else if(key.className === "operator" && a !== undefined && b === undefined ) {
					op = key.innerText;
					display.innerText += `${key.innerText}`;
					console.log("that's an operator");
				}
				else if (key.className === "operator" && a !== undefined && b !== undefined) {display.innerText = operate() + `${key.innerText}`;
					a = operate()
					b = '';
					op = key.innerText;
				}
				
				else if( key.className === "numBtn" && a !== undefined && op !== undefined && b === undefined){
					b = key.innerText;
					display.innerText += `${key.innerText}`;
				}

				else if (key.className === "numBtn" && a !== undefined && op !== undefined ) {
					b += `${key.innerText}`;
					display.innerText += `${key.innerText}`;
					console.log(a, op, b);
				}
				if (key.className === "calculate")  {display.innerHTML = operate();
					a = undefined;
					b = undefined;
					op = undefined;
					console.log(operate())
					;
					
					
			}
			

			if (key.className === "displayClear") {a = undefined;
			b = undefined;
			op = undefined;
			display.innerText = "0";}

	})}}
	// return a, b, op;
	// console.log`${btnDisplay()}`;
	
	btnDisplay();
	function operate(btnDisplay) {
		let answer;
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
		// console.log(operate(btnDisplay()))