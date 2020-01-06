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
		var p = "http://51.178.25.226:8080/category/"+urlParams.get('th')+"/"+urlParams.get('s');
		//var p = "http://51.178.25.226:8080/category/2/1";
		//var p = "http://192.168.1.222:8080/category/"+$.getUrlParameter('th')+"/"+$.getUrlParameter('s');

		$.getJSON(p, function (data) {

			$.each(data, function (i, field) {
				owl.trigger('add.owl.carousel','<img width="700" class="preload-image" src="http://51.178.25.226:8080/res/205">'
					+ '<h4>' + field.q 
					+ '</h4>'
					+ '<p>' + field.p1 + '<br>' + field.p2 + '<br>' + field.p3 + '</p>'
					+ '</div>');
			});

			//owl.trigger('to.owl.carousel',0);
			owl.trigger('refresh.owl.carousel');
			
		}).fail(function (jqxhr, textStatus, error) {

			var err = textStatus + ", " + error;
			console.log("Request Failed: " + err);

			window.location = "login.html";
		});
	});

});

