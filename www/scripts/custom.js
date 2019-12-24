$(document).ready(function(){      
    'use strict'	
			
	if($('#meLite').length){
		console.log("app 1");
		//const urlParams = new URLSearchParams(window.location.search);
		//var p = "http://192.168.1.222:8080/category/"+urlParams.get('th')+"/"+urlParams.get('s');
		var p = "http://51.178.25.226:8080/demo";
		//console.log(p)
		
		$.getJSON(p, function(data) {     
			// Remove all child nodes (including text nodes) 
			$("#meLite").empty();      
			$.each(data, function(i, field){
			$("#meLite").append('<div>'
							+ '<img width="700" class="owl-lazy" src="http://51.178.25.226:8080/res/205">'
							//+ '<div class="above-overlay cover-content-bottom center-text">'
							+  '<h4>'+field.qText+'</h4>'
							+ 		'<p>'+field.pro1+'<br>'+field.pro2+'<br>'+field.pro3+'</p>'
							//+		'<p class="color-gray-light bottom-0">'
							//+			'A professional mobile template, fast loading, fluidly animated mobile user experience for you.'
							//+		'</p>'
							//+'</div>'
							//+'<div class="overlay overlay-gradient"></div>'
						+'</div>');
			});      
		}).fail(function(jqxhr, textStatus, error){
									
									var err = textStatus + ", " + error;
									console.log( "Request Failed: " + err );
									
									window.location = "pageapp-login.html";
								});
								
		//console.log('____s___');
		
}

	
	function init_template(){	
			
		//Demo Purposes.
		$('a').on('click', function(){var attrs = $(this).attr('href');	if(attrs === '#'){return false;}});

        //FastClick
        $(function() {FastClick.attach(document.body);});
                
        //Preload Image
        $(function() {$(".preload-image").lazyload({threshold : 500});});
        

		// aaaa
		
		


		
	}
    
	
});

