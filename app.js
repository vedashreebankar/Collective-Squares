var express = require('express'); //we need to use express which we installed from npm
app = express(); //use the newly available express method to create a new instance of express which is housed in a variable called app
var bp = require('body-parser'); // we also need to use the body-parser to look at html files and understand them

app.use(bp.urlencoded({ extended:false })) //some garbage to enable parsing of the body
app.use(bp.json()) // enable parsing of JSON files
app.use(express.static('public')); //use express in static mode to look into the 'public' folder for files (.html, .jpg, .css, etc.)

var animals = []; //make an empty array to contain all instances of our animals (this is our barnyard)


// when recieveing a posted message from out mobile.js, do things on the request and response
app.post('/add/animal',function(request,response){
	 var animal = { // create an animal object which contains our animal type and some coordinates
	 	type: request.body.animal, // get the type of animal which we clicked on from the data variable sent via out mobile.js' $.post
	 	x: Math.random()*800, //generate a random x coordinate between 0 and 800
	 	y: Math.random()*500, //generate a random y coordinate between 0 and 500
	 } //close the animal object

	 animals.push(animal); // add this new animal object which now contains a type, x coordinate, and y coordinate to the animals array (our barnyard)
	 response.json(animals); // send the animals array back as a response to the user who posted (or dont and use the line below)
	 // res.ok(); // ok its good, end the connection.
})// close the app.post

// when recieving a get request, we are just sending data back, in this case the array of animals
app.get('/animal', function(request,response){
	response.json(animals); // send the animals array which contains many animal objects back to the user.
}) //close the app.get

app.listen('3000'); // have our server start working on port 3000