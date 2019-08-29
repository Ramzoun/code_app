function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

$(document).ready(function(){
/* supported by android webview 49 or up
const urlParams = new URLSearchParams(window.location.search);
var p = "http://192.168.1.4:8080/category/"
		+urlParams.get('th')
		+"/"
		+urlParams.get('s');
*/
var p = "http://192.168.1.222:8080/category/"
		+getUrlParameter('th')
		+"/"
		+getUrlParameter('s');
$.getJSON(p, function(data) {     
  // Remove all child nodes (including text nodes) 
  $(".single-slider").empty();      
  $.each(data, function(i, field){
      $(".single-slider").append('<div>'
									+ '<img width="700" class="owl-lazy" src="images/empty.png" data-src="images/pictures/3lq.jpg" data-src-retina="images/pictures/3.jpg">'
									+ '<div class="above-overlay cover-content-bottom center-text">'
									+ 		'<h2 class="color-white bolder">'+field.qText+'</h2>'
									+		'<p class="color-gray-light bottom-0">'
									+			'A professional mobile template, fast loading, fluidly animated mobile user experience for you.'
									+		'</p>'
									+'</div>'
									+'<div class="overlay overlay-gradient"></div>'
								+'</div>');
    });      
}).fail(function(jqxhr, textStatus, error){
											/*
											var err = textStatus + ", " + error;
											console.log( "Request Failed: " + err );
											*/
											window.location = "pageapp-login.html";
										});
});


