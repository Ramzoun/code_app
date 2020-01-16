$(document).ready(function () {
	'use strict'

	//Demo Purposes.
	$('a').on('click', function () { var attrs = $(this).attr('href'); if (attrs === '#') { return false; } });

	//FastClick
	$(function () { FastClick.attach(document.body); });

	//Preload Image
	$(function () { $(".preload-image").lazyload({ threshold: 500 }); });


	var owl = $('.owl-carousel');
	
	owl.owlCarousel({
		margin: 10,
		nav: true,
		dots:false,
		loop: false,
		lazyLoad: true,
		autoplay: false,
		items: 1
	});

	
	
	$(function () {

		const urlParams = new URLSearchParams(window.location.search);
		var p = "http://51.178.25.226:8008/category/"+urlParams.get('th')+"/"+urlParams.get('s');

		$.getJSON(p, function (data) {

			$.each(data, function (j, field) {
				owl.trigger('add.owl.carousel','<div> <img width="700" class="preload-image" src="http://51.178.25.226:8008/res/'+field.i+'">'
					+ '<h4>' + field.q + '</h4>'
					+ '<p>' 
					+ 		'<input type="radio" name="r'+field.i+'" id="c'+field.i+'1" value="a" /> <label for="c'+field.i+'1">'+field.l + '</label> <br />' 
					+ 		'<input type="radio" name="r'+field.i+'" id="c'+field.i+'2" value="b" /> <label for="c'+field.i+'2">'+field.m + '</label> <br />'  
					+ 		'<input type="radio" name="r'+field.i+'" id="c'+field.i+'3" value="c" /> <label for="c'+field.i+'3">'+field.n + '</label> <br />'  
					+ '</p>'
					+ '</div>');
			});

			//owl.trigger('to.owl.carousel',0);
			owl.trigger('refresh.owl.carousel');
			
		}).fail(function (jqxhr, textStatus, error) {

			//var err = textStatus + ", " + error;
			//console.log("Request Failed: " + err);

			window.location = "index.html";
		});
	});

});

