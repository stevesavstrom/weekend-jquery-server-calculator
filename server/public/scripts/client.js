console.log('testing js');

$(document).ready(onReady);

function onReady() {
getCalculations();
$('#equalButton').on('click', addCalculations);
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
  }

  function addCalculations(){
	  $.ajax({
		  method: 'POST',
		  url: '/calculations',
		  data: {
			  calcToAdd: {
				  numberOne: $('#firstNumber').val(),
				  numberTwo: $('#firstNumber').val(),
				  operator: $('.operatorButton').val(),
			  }
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
	  $('#firstNumber').val('')
	  operator: $('.operatorButton').val('')
  }

