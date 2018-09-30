// Color Style Switcher

$(document).ready(function($) {
	
	$("#btnSwitch").on("click", function(){
		
		$("#switch-style").toggleClass("active");
		
	});
	
	
	$("#switch-style > div > ul > li > a").each(function(){
		$(this).on("click", function(){
			
			var style  = $(this).attr("class");
			
			$("#styles").attr("href", 'assets/css/'+style+'.css');
			
		});
		
	});
		
				
});