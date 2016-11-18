var AV = {
	initialize: function(){
		AV.loadEvents();	
	},
	loadEvents: function(){
		$('nav>ul>li').click(AV.loadSection);
	},
	loadSection: function(){
		var newTarget = '.section-'+$(this).attr('target-section');
		var oldTarget = '.section-'+$('section.selected').attr('initial');		
		$(oldTarget).removeClass('selected');
		setTimeout(function(){
			$(oldTarget).removeClass('top');
			$(oldTarget).addClass('top');
		},1000);
		$(newTarget).addClass('selected');
	}
}

AV.initialize();