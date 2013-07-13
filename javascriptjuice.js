$(document).ready(function() {
	$('#headernav li a').hover(
		function() { $(this).animate( { opacity: 1.0, paddingTop: '35px' }, "fast" ); },
		function() { $(this).animate( { opacity: 1.0, paddingTop: '30px' }, "fast" ); }
	);
	$('#headerimg img').hover(
		function() { $(this).animate( { opacity: 0.8, marginTop: '5px' }, "fast" ); },
		function() { $(this).animate( { opacity: 1.0, marginTop: '0px' }, "fast" ); }
	);
});