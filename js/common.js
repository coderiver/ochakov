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
});