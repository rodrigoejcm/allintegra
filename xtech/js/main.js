/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$wrapper = $('#page-wrapper'),
			$capa = $('#banner'),
			$como_funciona = $('#banner_como_funciona');
		

		// Disable animations/transitions until the page has loaded.


		// Mobile?
			/*if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});
*/
		

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










