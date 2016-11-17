var AV = {
	imgList: [
	],
	desktopImgList: [
		'http://i.imgur.com/R1KRe85.jpg',
		'http://i.imgur.com/1uKrmah.jpg',
		'http://i.imgur.com/2UrZm2J.jpg',
		'http://i.imgur.com/AadtmEQ.jpg',
		'http://i.imgur.com/AZ7wZS0.jpg',
		'http://i.imgur.com/c8PJcDc.jpg',
		'http://i.imgur.com/cQnMCIr.jpg',
		'http://i.imgur.com/FQOpjBu.jpg',
		'http://i.imgur.com/kn1Esve.jpg',
		'http://i.imgur.com/qt3niol.jpg',
		'http://i.imgur.com/0xES8Lj.jpg',
		'http://i.imgur.com/fJmWv4a.jpg'
	],
	mobileImgList: [
		'http://i.imgur.com/R1KRe85h.jpg'
	],
	initialize: function(){
		if($(window).width() > 768){
			AV.imgList = AV.desktopImgList;
			setInterval(function(){
				AV.nextImg();
			},10000);	
		} else {
			AV.imgList = AV.mobileImgList;
		}
		AV.loadBgImg();
		AV.loadEvents();
	},
	loadEvents: function(){
		document.onclick = function(){
			AV.nextImg();
		};
		$('.profile').click(function(){
			$('.about').toggleClass('about-visible');
			$('.links').removeClass('links-visible');
		});
		$('.about-close-btn,.about').click(function(){
			$('.about').removeClass('about-visible');
			$('.links').addClass('links-visible');
		});
	},
	loadBgImg: function(){
		var bgImg = new Image();
		bgImg.onload = function(){
			var imgUrl = AV.imgList[0];
			var bgImg = new Image();
			var bgUrl = "url('" + imgUrl +"')";
		   $('.bg-image').css("background", bgUrl);
		   $('.bg-image').addClass('show-image');   
		   $('.links').addClass('links-visible');
		   $('.loader').removeClass('loader-visible'); 
		};
		bgImg.src = AV.imgList[0];
	},
	nextImg: function(){
		var imgUrl = AV.getRandomImg();
		var bgImg = new Image();
		var bgUrl = "url('" + imgUrl +"')";
		bgImg.onload = function(){
		   $('.bg-image').css("background", bgUrl);
		};
		bgImg.src = imgUrl;
	},
	getRandomImg: function(){
		return AV.imgList[~~(Math.random() * AV.imgList.length)];
		
	}
}

AV.initialize();