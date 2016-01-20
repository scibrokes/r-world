(function($) {
    $(document).ready(function() {
	
	$('#unif_plot').scianimator({
	    'images': ['unif_dir/unif_plot1.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#unif_plot').scianimator('play');
    });
})(jQuery);
