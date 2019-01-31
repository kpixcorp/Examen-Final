$(function() {
	
	$('.mainside__img img').hover(function() {
		$(this)
			.toggleClass('transparency', '1.2s')
	})


	$('.brand__krustyburguer a i').on('click', function(event) {
		event.preventDefault();
		$('.brand__menu li').toggleClass('show')
	})	

});