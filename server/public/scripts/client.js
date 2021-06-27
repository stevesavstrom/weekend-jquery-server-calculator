console.log('testing js');

$(document).ready(onReady);

function onReady() {
getCalculations();
$('#equalButton').on('click', addCalculations);
$('.operatorButton').on('click', changeOperator);
$('#clearButton').on('click', clearInputs)
}

// global variable for operator (grabbed from button)
let operator = '';

// captures the text of the operator button on click
function changeOperator(){
	operator = $(this).text();
	console.log(operator);
}

// AJAX function for GET request from server
function getCalculations(){
	$.ajax({
		method: 'GET',
		url: '/calculations'
	})
	.then(function(response){
		console.log('getCalculations working!', response);
		renderItems(response);
	})
	.catch(function(error) {
		console.log('Error!', error);
	});
} // end getCalculations

// render function to display inputs and answers on DOM
function renderItems(calcArray) {
	$('#output').empty();

// loop through items in array and posts all historical inputs on DOM
	for (let item of calcArray) {
	  $('#output').append(`
		<li>
		  ${item.numberOne} <span></span> 
		  ${item.operator} <span></span>  
		  ${item.numberTwo} <span></span> =
		  ${item.answer} <span></span>
		</li>
	  `);
	}
// appends current answer on DOM and is replaced each new input.
	if(calcArray.length > 0){
	$('#answerOutput').empty('')
	$('#answerOutput').append(`
	${calcArray[calcArray.length-1].answer} 
  	`);
	}
  } // end renderItems

// AJAX function for GET request from server
function addCalculations(){
	$.ajax({
		method: 'POST',
		url: '/calculations',
		data: {
				numberOne: $('#firstNumber').val(),
				numberTwo: $('#secondNumber').val(),
				operator: operator,
				answer: undefined
			  }
	  })
	.then(function(response) {
		console.log('addCalculations function working!');
		getCalculations();
	  })
	.catch(function(error){
		alert('Request failed')
	  });

	  $('#firstNumber').val('')
	  $('#secondNumber').val('')
	  $('.operatorButton').val('')
  } // end addCalculations

// Clears inputs when "C" is clicked
function clearInputs (){
	$('input').val('');
} // end clearInputs

