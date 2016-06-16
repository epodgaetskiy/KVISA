$(function() {

	$('.column-mobile').slick({
		speed: 500,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000
	});

	$('.questions-slider').slick({
		speed: 500,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 10000,
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
				dots: true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 10000,
		      }
		    }
		]
	});

	//stick menu
	var header = new Headhesive('.navigation');

	$(".btn-menu-mobile").click(function(e){
		e.preventDefault();

		if ($(".menu-mobile").hasClass("show")) {
			$(".menu-mobile").fadeOut(600);
			$(".menu-mobile").removeClass("show");

		} else {
			$(".menu-mobile").fadeIn(600);
			$(".menu-mobile").addClass("show");
		}
		
	})

	//scroll
	$(".menu li a").mPageScroll2id();
	$(".menu-mobile li a").mPageScroll2id();

	$(".menu-mobile li a").click(function(){
		$(".menu-mobile").fadeOut(600);
		$(".menu-mobile").removeClass("show");
	})

	$(".btn-registration").mPageScroll2id();

	$(".discover-answer").click(function(e){
		e.preventDefault();

		var i = $(".discover-answer").index($(this));

		$(this).toggle();
		$(".answer").eq(i).toggle();
	
	})

	$('.partners-slider').slick({
		speed: 500,
		dots: false,
		arrows: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: false,
		autoplaySpeed: 10000,
		responsive: [
			{
		      breakpoint: 1200,
		      settings: {
				dots: true,
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay: false,
				autoplaySpeed: 10000,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
				dots: true,
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: false,
				autoplaySpeed: 10000,
		      }
		    }
		]
	});

	$(".btn-enter-team").click(function(e) {
		e.preventDefault();

		$(".modal-enter-team").fadeIn(600);
		$(".shadow").addClass("active-shadow");
	})


	$(".icon-close").click(function(e) {
		e.preventDefault();

		$(".modal-enter-team").toggle();
		$(".shadow").removeClass("active-shadow");
	})

	$(".btn-registration-go").click(function(e) {
		e.preventDefault();

		$(".modal-registration").fadeIn(600);
		$(".shadow").addClass("active-shadow");
	})


	$(".icon-close-registration").click(function(e) {
		e.preventDefault();

		$(".modal-registration").toggle();
		$(".shadow").removeClass("active-shadow");
	})

	//choise game-date
	var choiseGame = $(".game-info-block");
		btnChoiseGame = $(".game-block");

	choiseGame.first().addClass("active");
	btnChoiseGame.first().addClass("active");

	btnChoiseGame.click(function(e){
		e.preventDefault();

		var i = btnChoiseGame.index($(this));

		btnChoiseGame.removeClass("active");
		btnChoiseGame.eq(i).addClass("active");
		choiseGame.removeClass("active");
		choiseGame.eq(i).addClass("active");
	})

	//personal.html
	//progress bar 
	$('input[type="range"]').rangeslider({
	    polyfill: false
	  });

	//iframe video play
	var video = $('.video-container iframe');

	video.iframeTracker({

		blurCallback: function(){
			$(".icon-play").fadeOut(0);
		}
	});

	$(".icon-play").click(function(){
		$(this).fadeOut(0);
	})


});
