var AV = {
	initialize: function(){
		AV.loadEvents();
		new WOW().init();
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