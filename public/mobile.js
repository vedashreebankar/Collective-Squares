$(function(){ //init jquery with this onReady call

	$('.button').click(function(){ // see if we clicked any button

		var data = { //make a new data object 
			animal: $(this).attr('data-animal') // fill this data object with the type of animal and the string of the value of the data-animal attribute defined in our mobile.html (goat, chicken, human, sheep)
		} //close the data object

		console.log(data); // log the data object (https://www.youtube.com/watch?v=WYMKhpEWVrw)

		$.post('/add/animal', data, function(animals){ //post our data object to the '/add/animal' endpoint which our server is looking at. 
			console.log(animals); //the response from the post is the array of animals, so we can just log it here, because we dont really need it on the mobile side of things :)
		}) // close the post 

	}) // close the click handler

}) // close the jquery init
