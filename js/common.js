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
	$('.js-slick-clients').slick({
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
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$(".js-client-prev").on("click",function(){
		$('.js-slick-clients').slickPrev();
	});
	$(".js-client-next").on("click",function(){
		$('.js-slick-clients').slickNext();
	});
});