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

// JSON function
app.use(express.json());

// start up  server
app.listen(port, () => {
	console.log('listening on port', port);
  });

// global array for all client side inputs (firstNumber, secondNumber, operator)
let inputArray = [];

// Express routes for server side...
app.get(`/calculations`, function(req,res) {
	console.log('Request for /calculations was made!');
	//send response
	res.send(inputArray);
   });

app.post(`/calculations`, function(req,res) {
	console.log('Get a POST request!', req.body);
	let newCalc = req.body
	calculator();
	function calculator(){
		if(newCalc.operator === '+'){
			newCalc.answer = Number(newCalc.numberOne) + Number(newCalc.numberTwo)
		} else if(newCalc.operator === '-') {
			newCalc.answer = Number(newCalc.numberOne) - Number(newCalc.numberTwo)
		} else if (newCalc.operator === 'x'){
			newCalc.answer = Number(newCalc.numberOne) * Number(newCalc.numberTwo)
		} else if (newCalc.operator === '/'){
			newCalc.answer = Number(newCalc.numberOne) / Number(newCalc.numberTwo)
		} else {
			res.status(400).send('Invalid operator: ${newCalc.operator}');
			return;
		}
	}

	// Push the new object into inputArray
	inputArray.push(newCalc);
	
	console.log('Adding a new calculation:', newCalc);
	
	res.sendStatus(201);
   });



