var AV = {
	initialize: function(){
		AV.loadEvents();
	},
	loadEvents: function(){
		$(window).scroll(function(){
			if($(document).scrollTop() > $('header').height()){
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		});
	}
}

AV.initialize();