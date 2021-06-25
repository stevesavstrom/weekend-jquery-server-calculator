// creating express app...

// required express - give us function
const express = require('express');

// create an instance of express by calling a function
const app = express();
const port = 5000;

// express static file serving - public is folder name:
app.use(express.static('server/public'));

// app.use(bodyparser.urlencoded({extended: true})); // older
app.use(express.urlencoded({ extended: true }));

// JSON function...
app.use(express.json());

// start up our server
app.listen(port, () => {
	console.log('listening on port', port);
  });

inputArray = [
	{
	numberOne: '10',
	numberTwo: '5',
	operator: '/',
	answer: '2'
	},
	{
	numberOne: '5',
	numberTwo: '3',
	operator: '+',
	answer: '8'
	}
];

// Express routes for server side...
app.get(`/calculations`, function(req,res) {
	console.log('Request for /calculations was made!');
	//send response
	res.send(inputArray);
   });

app.post(`/calculations`, function(req,res) {
	console.log('Get a POST request!', req.body);

	let newCalc = req.body.calcToAdd;
  
	// Push the new item into our array.
	console.log('Adding a new calculation:', newCalc);
	inputArray.push(newCalc);
  
	res.sendStatus(201);
   });


// Calculator function...doing the math
function calculator (calculatorInputs) {
	if(calculatorInputs.operator === '+'){
		calculatorInputs.answer = Number(calculatorInputs.firstNum) + Number(calculatorInputs.secondNum)
	}
}

