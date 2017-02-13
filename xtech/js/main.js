

(function($) {

	

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$wrapper = $('#page-wrapper'),
			$capa = $('#banner'),
			$como_funciona = $('#banner_como_funciona');
		


		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					bgParallax: true
					
				});

		

			if ($capa.length > 0 && $header.hasClass('alt')) {
	

				$window.on('resize', function() { $window.trigger('scroll'); });

				$capa.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt');  }
				});

			}

			

		


	});


})(jQuery);










