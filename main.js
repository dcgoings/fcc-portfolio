$(document).ready(function() {

	$(".scroll").click(function(event) {
		event.preventDefault();
		$("html,body").animate({
			scrollTop: $(this.hash).offset().top - $(".navbar-default").height()
		}, 1000);
	});

	$(document).on('click', '.navbar-collapse.in', function(e) {
		if ($(e.target).is('a')) {
			$(this).collapse('hide');
		}
	});
});

/** navbar height back up
	
	$("#toplinks").on('click','a', function(event){ 
    event.preventDefault();
    var o =  $( $(this).attr("href") ).offset();   
    var sT = o.top - $(".navbar-header").outerHeight(true); // get the fixedbar height
    // compute the correct offset and scroll to it.
    window.scrollTo(0,sT);
	 });

**/