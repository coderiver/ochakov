head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	


	$(".js-toggle-key").on("click", function(){
		var el = $(this).attr("data-toggle");
		$("."+el).toggleClass("is-active")
	});

	$('.js-slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false
	});
	$('.js-slider-clients').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 980,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        centerMode: true,
        		centerPadding: '60px',
       			slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});

	$('.js-slider-banners').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	centerMode: true,
        		centerPadding: '45px',
       			slidesToShow: 1,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	centerMode: true,
        		centerPadding: '45px',
       			slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});

	$('.js-slider-news').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
		    {
		      breakpoint: 780,
		      settings: {
       			slidesToShow: 2,
       			slidesToScroll: 1,
		        arrows: false,
		        adaptiveHeight: true
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
       			slidesToShow: 1,
       			slidesToScroll: 1,
		        arrows: false,
		        dots: true,
		        adaptiveHeight: true
		      }
		    }
		]
	});

	$('.js-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		onAfterChange: function(index) {
			var current = $(".js-slider-current");
			var title = $(".js-slider-title");
			var index = $('.js-slider').slickCurrentSlide()+1;
			var text = $('.js-slider').find(".slick-active").attr("data-title");
			title.text(text);
			current.text(index);
		}
	});

	var allSlides = $(".js-slider-item").length-2;
	$(".js-slider-all").text(allSlides);

	$(".js-slider-prev").on("click",function(){
		$('.js-slider').slickPrev();
	});
	$(".js-slider-next").on("click",function(){
		$('.js-slider').slickNext();
	});

	$('.js-carousel').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 980,
		      settings: {
		      	centerMode: true,
        		centerPadding: '30px',
       			slidesToShow: 3,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		      	centerMode: true,
        		centerPadding: '15px',
       			slidesToShow: 2,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	centerMode: true,
        		centerPadding: '15px',
       			slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});

	$(".js-carousel-next").on("click",function(){
		$('.js-carousel').slickNext();
	});

	$(".js-client-prev").on("click",function(){
		$('.js-slider-clients').slickPrev();
	});
	$(".js-client-next").on("click",function(){
		$('.js-slider-clients').slickNext();
	});
});