var AV = {
	initialize: function(){
		AV.loadEvents();	
	},
	loadEvents: function(){
		$('nav>ul>li').click(AV.loadSection);
	},
	loadSection: function(){
		$('section.selected').removeClass('selected');
		var targetSection = $(this).attr('target-section');
		$(targetSection).toggleClass('selected');
	}
}

AV.initialize();