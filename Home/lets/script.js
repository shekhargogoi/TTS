$(window).scroll(function(){
		var scrollposition  = $(document).scrollTop();
    console.log(scrollposition)
	});

$(document).ready(function(){
var myFullpage =  new fullpage('#fullpage', {
	//Navigation
	lockAnchors: false,
	anchors:['home', 'explore','quality','products'],
	menu: '#myMenu',
	navigation: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
	css3:true,
	
	afterLoad:function(e){
		var aSec=fullpage_api.getActiveSection();
		console.log('section',aSec.anchor);
		if(aSec.anchor === 'quality'){
			$('.dot').css('background-color','#000');
			$('.menu').css('color','#000');
		}else{
			$('.dot').css('background-color','#fff');
			$('.menu').css('color','#fff');
		}
	}
	
});
	
});


var Tl = new TimelineMax();
Tl.from('.line',0.5,{
	y:"100",
	delay:0.5,
	height:0,
	
})

Tl.from('.img img',1.5,{
	delay:0,
	x:"220",
	ease: Expo.easeOut,
	
});

Tl.from('.text .headline',0.8,{
	opacity:0,
	y:"50",
	ease: Expo.easeOut,
	delay:-1,
});
Tl.from('.text .sub-text',0.8,{
	opacity:0,
	y:"50",
	ease: Expo.easeOut,
	delay:-0.9
});