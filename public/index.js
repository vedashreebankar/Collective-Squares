$(function(){ //init jquery with this onReady call

//an array of our types of images (defined in the mobile.js in the data-animal attribute)
var animal_images = {
	yellow: 'https://s3.graphiq.com/sites/default/files/2307/media/images/Banana_Yellow_429852_i0.png',
	blue: 'https://s.graphiq.com/sites/default/files/2307/media/images/t2/Deep_Sky_Blue_429606_i0.png',
	turquoise: 'https://s3.graphiq.com/sites/default/files/2307/media/images/Turquoise_Blue_429719_i0.png',
	pink: 'https://s3.graphiq.com/sites/default/files/2307/media/images/t2/Mexican_Pink_430090_i0.png',
	purple: 'http://vignette2.wikia.nocookie.net/eltigre/images/1/10/Purple-suede.jpg',
	orange: 'https://s3.graphiq.com/sites/default/files/2307/media/images/Safety_Orange_Blaze_Orange_429976_i0.png',
	green: 'https://s.graphiq.com/sites/default/files/2307/media/images/t2/Lime_Green_429727_i0.png',
	salmon: 'https://s.graphiq.com/sites/default/files/2307/media/images/Light_Salmon_Pink_430089_i0.png'
}



	function getThings(){ // a function that will be used below to do everything we need to do every time the interval happens.
		$.get('/animal', function(animals){ // $.get call to the server on the '/animal' endpoint, this will kick back our array of animal objects (the barnyard)

			console.log(animals); //(https://www.youtube.com/watch?v=iJ4T9CQA0UM)

			var html = ''; // make an empty string we can fill with a concated string of some HTML below

			animals.forEach(function(animal){ // do something for every item in the animals array, 'animals' being the array itself and 'animal' being each next animal in the array.

				var img = animal_images[ animal.type ]; // set a new var called img to contain the url of the animal type as defined by the object animal_images above. the [] allow us to use a variable to do this, in this case we are using the type of the animal which we know from out $.get. see also: console.log(animal_images.goat);
				html += '<div class="animal" style="position: absolute; left:' + animal.x + 'px; top:' + animal.y +'px;"><img src="' + img + '"></div>' ; // concat a string to use the img variable to set the image URL, and use the x and y positions from the animal object to set the top and left css paramaters in an inline style. the trick with concating strings is to keep a eye out for the difference between "" and '' and dont forget to use + on each side of the quotes to join everything.
				// += means to add onto the end of the existing variable its the same as doing:
				// html = html + '<div class="animal" style="left:' + animal.x + 'px; top:' + animal.y +'px;"><img src="' + img + '"></div>' ;

				// animal.type
				// animal.x
				// animal.y
			}) //close forEach

			$.each($('img'), function (index, obj) {
			    $(this).css({
			        'max-width' : ((Math.random() * 50))
			    });
			});

			$('body').html(html); // put our newly generated html stored in the variable above into the body of our index.html

		})// close $.get
	} //close getThings




	setInterval(function(){ // do something on an interval. the set Interval takes 2 arguments, first a function, the things you want to do every interval. and second, a time in milliseconds which is how often to execute the code in the function
		getThings(); // do the getThings() function every
	}, 1000) //1000milliseconds or 1 second


}) //close jquery init
