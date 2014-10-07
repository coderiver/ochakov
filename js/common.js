head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(".js-toggle-key").on("click", function(){
		var el = $(this).attr("data-toggle");
		$("."+el).toggleClass("is-active")
	});
});