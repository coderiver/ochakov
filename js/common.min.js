head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	


	$(".js-toggle-key").on("click", function(){
		var el = $(this).attr("data-toggle");
		$("."+el).toggleClass("is-active");
		$("html").toggleClass("has-active-nav");
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

	function number() { 
        var number = $(".js-number");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus");
            var minus = $(this).find(".js-minus");
            plus.on("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.on("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                else {
                    return false;
                }
            });
            input.on("change", function(){
                var val = +$(this).val();
                if (val > max_number) {
                    val = max_number;
                    $(this).val(val);
                }
                else {
                    return false;
                }
            });
        });
    }
    number();

    $(".js-del-row").on("click",function(){
    	var trCounter = $(this).parents("tbody").find("tr").length;
    	if ( trCounter > 1) {
    		$(this).parents("tr").remove();
    	}
    	else {
    		$(this).parents("table").remove();
    	}
    	console.log(trCounter);
		return false;
	});
});