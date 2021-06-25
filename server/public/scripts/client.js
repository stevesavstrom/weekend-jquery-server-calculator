$(document).ready(onReady);

function onReady() {
getCalculations();
}

function getCalculations(){
	$.ajax({
		method: 'GET',
		url: '/calculations'
	})
	.then(function(response){
		console.log('getCalculations working!', response);
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
		  <strong>Item:</strong> ${item.name} <span class="author-name"> <strong>Description:</strong> ${item.description}</span>
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

