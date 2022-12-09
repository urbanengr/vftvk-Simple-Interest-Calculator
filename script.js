// Displays selected value from range type (slider)
// Credit: css-tricks.com/the-output-element/ Valtteri Laitinen
const rangeInput = document.getElementById('rate');
const output = document.querySelector('output');

function setState() {
	output.value = rangeInput.value;
}

rangeInput.addEventListener('input', setState);
document.addEventListener('DOMContentLoaded', setState);

var amnt = document.getElementById('principal').value;

function dValidate() {
	if (amnt <= 0) {
		alert("Enter a postive number");
		amnt = "NaN";
	} else {
		document.getElementById("demo1").innerHTML = amnt;
		}
	}


// function collects inputs and displays output when button clicked
function compute() 	{
	
	var amnt = document.getElementById('principal').value;

	if (amnt <= 0) {
		alert("Enter a postive number");
		amnt = "NaN";
	} else {
		document.getElementById("demo1").innerHTML = amnt;
	}
	
	// collect interest rate
	var slider = document.getElementById("rate").value;
	document.getElementById("demo2").innerHTML = slider;

	// calculate interest earned
	var nYears = document.getElementById('years').value;
	var totInt = Math.round(amnt * (slider/100) * nYears);
	document.getElementById("demo3").innerHTML = totInt;

	// calculate future date
	var fYears = Number(nYears);
	var curYr = new Date();
	var justYear = (curYr.getFullYear());
	var futureYear = justYear + fYears;
	document.getElementById("demo4").innerHTML = futureYear;
}	
        