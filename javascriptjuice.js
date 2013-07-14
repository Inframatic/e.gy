$(document).ready(function() {
	$('#headernav li a').hover(
		function() { $(this).animate( { opacity: 1.0, paddingTop: '35px' }, "fast" ); },
		function() { $(this).animate( { opacity: 1.0, paddingTop: '30px' }, "fast" ); }
	);
	$('#headerimg img').hover(
		function() { $(this).animate( { opacity: 0.8, marginTop: '5px' }, "fast" ); },
		function() { $(this).animate( { opacity: 1.0, marginTop: '0px' }, "fast" ); }
	);


	var cloudmadeUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
	var subDomains = ['otile1','otile2','otile3','otile4'];
	var cloudmadeAttrib = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
	var cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, minZoom: 3, attribution: cloudmadeAttrib, subdomains: subDomains, zindex: -1});
	var latlng = new L.LatLng(85.037, -167.343);
	var maxBounds = new L.LatLngBounds(latlng);
	var london = new L.LatLng(51.505, -0.09);
	var map = new L.Map('map', {center: london, zoom: 13, zoomControl: false, layers: [cloudmade]});
	new L.Control.Zoom({position: "bottomright"}).addTo(map)
});