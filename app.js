var AV = {
	initialize: function(){
		AV.loadEvents();		
	},
	loadEvents: function(){
		new WOW().init();
		particlesJS();
		$('.nav-btn,.nav-menu-item>.content>a').click(function(){
			$('.nav-btn').toggleClass('nav-close');
			$('nav').toggleClass('nav-open');			
		});	
	}
}

AV.initialize();