$(document).ready(function() {

	$(document).on("click", function(){
        $(".js-overlay").fadeOut(400);
        $("html").removeClass("has-open-popup");
	});
	
	// popups 
    $(".js-popup-link").on("click", function(event){
        var popup = $(this).attr("href");
        $("html").addClass("has-open-popup");
        $('[data-popup="'+popup+'"]').fadeIn(400);
        event.stopPropagation();
        return false; 
    });

    $(".js-popup-close").on("click", function(){
        $(".js-overlay").fadeOut(400);
        $("html").removeClass("has-open-popup");
        return false;
    });
    $(".js-popup").on("click", function(event){
        event.stopPropagation();
    });
    

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
	$('.js-slider-color').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false
	});
	$('.js-slider-color-width').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 8,
		arrows: false
	});
	$(".js-color-prev").on("click",function(){
		$('.js-slider-color').slickPrev();
		$('.js-slider-color-width').slickPrev();
	});
	$(".js-color-next").on("click",function(){
		$('.js-slider-color').slickNext();
		$('.js-slider-color-width').slickNext();
	});

	$('body').on("click",".js-slider-color a", function(){
		$(".js-slider-color a").removeClass("is-active");
		$(this).addClass("is-active");
		return false;
	});
	$('body').on("click",".js-tag", function(){
		$(this).parents(".js-tag-cloud").find("a").removeClass("is-active");
		$(this).addClass("is-active");
		return false;
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

	$('.js-prod-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 640,
		      settings: {
		      	centerMode: true,
        		centerPadding: '15px',
       			slidesToShow: 1,
		        arrows: false
		      }
		    }
		]
	});

	$(".js-prod-prev").on("click",function(){
		$(this).parents(".prod-slider").find('.js-prod-slider').slickPrev();
	});
	$(".js-prod-next").on("click",function(){
		$(this).parents(".prod-slider").find('.js-prod-slider').slickNext();
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

    $(".js-file-btn button").on("click",function(){
    	$(this).parent().find("input").trigger("click");
		return false;
	});

	function fixedHeader() {
		var top = $(".header__top").outerHeight() + 23;
		if ($(document).scrollTop() >= top) {
			$("html").addClass("has-fixed-header");
		}
		else {
			$("html").removeClass("has-fixed-header");
		}
	}
	if ($(window).width() > 963) {
		fixedHeader();
	}
	$(window).scroll(function(){
		if ($(window).width() > 963) {
			fixedHeader();
		}
	});

	function tab() {
       $(".js-tab").each(function(){
        	var tab_link = $(this).find("a");
        	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
        	tab_cont.hide();
            var id_active = $(this).find(".is-active a").attr("href");
        	$("."+id_active).show();
        	$(this).parents(".js-tab-group").find(".js-tab1").show();
        	$(".js-tab a").on("click", function() {
            	var index = $(this).attr("href");
            	$(this).parents(".js-tab").find("li").removeClass("is-active");
            	$(this).parent().addClass("is-active");
            	$(this).parents(".js-tab-group").find(".js-tab-cont").hide();
            	$(this).parents(".js-tab-group").find("."+index).show();
            	return false;
          	});
       });
  	}
  	tab();

  	// $(".item").on("touchstart",function(){
  	// 	$(this).addClass("is-active");
  	// });

	$('.js-slider-product').slick({
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-slider-preview'
	});
	$('.js-slider-preview').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.js-slider-product',
		dots: false,
		arrows: false,
		// centerMode: true,
		focusOnSelect: true
	});

	$(".js-client-prev").on("click",function(){
		$('.js-slider-clients').slickPrev();
	});
	$(".js-scroller-next").on("click",function(){
		$('.js-slider-preview').slickNext();
	});
			

	$(".js-sort").on("click",function(){
		$(this).parents(".js-sort-group").find("a").removeClass("is-active");
		$(this).addClass("is-active");
		if ($(this).hasClass("is-top")) {
			$(this).removeClass("is-top").addClass("is-down");
		}
		else {
			$(this).removeClass("is-down").addClass("is-top");
		}
		return false;
	});

	
  	
});