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
	let newCalc = req.body.calcToAdd

	// Push the new item into our array.
	console.log('Adding a new calculation:', newCalc);
	inputArray.push(newCalc);
	res.sendStatus(201);
   });

// app.get('/answers', function(req,res) {
	

// 	console.log('answers working....');

// 	res.send('Some stuff...');
//    });


// Calculator function...doing the math
// Need to use some type of if..else logic
// could also use switch case
// no idea how to run this function on server side
// no idea how to pull data from object and work with it on server side
// I don't recall learning this...?
// Hard to do weekend project without a model/notes or practice...

// let answer = something;
// let num1 = inputArray.numberOne
// let num2 = inputArray.numberTwo
// let operator = inputArray.operator

// if(operator === '+'){
// 	answer = Number(num1) + Number(num2)
// } else if(operator === '-') {
// 	answer = Number(num1) - Number(num2)
// } else if (operator === 'x'){
// 	answer = Number(num1) * Number(num2)
// } else if (operator === '/'){
// 	answer = Number(num1) / Number(num2)
// }

