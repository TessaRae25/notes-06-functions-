// A function is declared by using the 'function' keyword, followed by the function's name, then its parameters/arguments in round braces. And finally, in curly braces, you write out the instructions or code that the function should perform. For example...

function myFunction() {
	document.getElementById('function1').innerHTML = 'I\'m a functioning member of society.';
}

// The function above will not run, until it is called or invoked. Like below...
myFunction();

// Global Scope variables using #scope 1
var pants = 'Jeans';  // pants is a global variable
document.getElementById('scope1').innerHTML = pants;
var pants = 'Cargo';  // this instance of pants has overwritten the one above it
document.getElementById('scope1').innerHTML = pants;

// Local Scope variables using #scope2
function myLocalShirts() {
	var shirts = 'Blouse'; // declare a Local variable
	document.getElementById('scope2').innerHTML = shirts;
}

myLocalShirts (); // Call the myLocalShirts() function and run it
var shirts = 'Sweater';
document.getElementById('scope2').innerHTML = shirts;
myLocalShirts();

// Creat a function that will take in two arguments then return a value
function addNumbers(a, b) {
	var sum = a + b;
	// send the value of sum from the above operations outside of the function using a return
	return sum;
}

document.getElementById('arguments').innerHTML = 'The sum of addNumbers is ' + addNumbers(56, 4);

// Create a function that will take in two arguments that return the modulus of two numbers and displays the remainder it inside of #modulus
function modNumbers(c, d) {
	var mod = c % d;
	return mod;
}

document.getElementById('modulus').innerHTML = 'The remainder of modNumbers is ' + modNumbers(34, 8);

//Using Conditionals in Functions with #conditional
function applesOranges(myFruit) {
	var fruits;

	if (myFruit == 'apples') {
		var fruits = document.getElementById('conditional').innerHTML = 'Apples!';
	}	else if (myFruit == 'oranges') {
			var fruits = document.getElementById('conditional').innerHTML = 'Oranges!';
	}	else if (myFruit == 'potato') {
			var fruits = document.getElementById('conditional').innerHTML = 'That\'s not even a fruit!';
	}	else {
		var fruits = document.getElementById('conditional').innerHTML = 'You don\'t have apples or oranges';
	}
	return fruits;
}

applesOranges('potato');

// Ask the user to enter how many loops they would like
 
var userLoop = prompt('How much do you want to loop?', 'enter a number');

function loopThis(howMany) {
	for (var i = 0; i < howMany; i++) {
		document.write('I\'m Looping! <br>');
	}
}

loopThis(userLoop);






























