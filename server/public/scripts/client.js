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

// Grabs the text of the operator button on click
function changeOperator(){
	operator = $(this).text();
	console.log(operator);
}

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
}

function renderItems(calcArray) {
	$('#output').empty();
  
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
	if(calcArray.length > 0){
	$('#answerOutput').empty('')
	$('#answerOutput').append(`
	${calcArray[calcArray.length-1].answer} 
  	`);
	}
  }
  
//   function appendAnswer(){
// 	$('#answerOutput').append(`
// 	<h2>
// 	<p></p>
// 	</h2>
// 	`)
//   }


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
		  console.log('Testing add calculator function!');
		  getCalculations();
	  })
	  .catch(function(error){
		  alert('Request failed')
	  });
	  $('#firstNumber').val('')
	  $('#secondNumber').val('')
	  $('.operatorButton').val('')
  }

function clearInputs (){
	$('input').val('');
}

