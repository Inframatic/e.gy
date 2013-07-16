$(document).ready(function() {
	// $('#headernav li a').hover(
	// 	function() { $(this).animate( { opacity: 1.0, paddingTop: '15%' }, "fast" ); },
	// 	function() { $(this).animate( { opacity: 1.0, paddingTop: '10%' }, "fast" ); }
	// );
	// $('#headerimg img').hover(
	// 	function() { $(this).animate( { opacity: 1.0, marginTop: '5px' }, "fast" ); },
	// 	function() { $(this).animate( { opacity: 0.7, marginTop: '0px' }, "fast" ); }
	// );

	if (toggle=true) {
		enter = true
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeIn();
		toggle = false;        
	};

	
		$(document).keypress(function(event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == 13) { 
				$("#welcomebox").css('display', 'none');
				$(".questionbox").css('display', 'block');
				enter = false;
			}
		})
		
	var enter = false
	var toggle = true
	var cloudmadeUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
	var subDomains = ['otile1','otile2','otile3','otile4'];
	var cloudmadeAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
	var cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, minZoom: 3, attribution: cloudmadeAttrib, subdomains: subDomains, zindex: -1});
	var latlng = new L.LatLng(85.037, -167.343);
	var maxBounds = new L.LatLngBounds(latlng);
	var london = new L.LatLng(51.505, -0.09);
	var map = new L.Map('map', {center: london, zoom: 13, zoomControl: false, layers: [cloudmade]});
	new L.Control.Zoom({position: "bottomright"}).addTo(map)
});