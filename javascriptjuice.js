$(document).ready(function() {
	// $('#headernav li a').hover(
	// 	function() { $(this).animate( { opacity: 1.0, paddingTop: '35px' }, "fast" ); },
	// 	function() { $(this).animate( { opacity: 1.0, paddingTop: '30px' }, "fast" ); }
	// );
	// $('#headerimg img').hover(
	// 	function() { $(this).animate( { opacity: 1.0, marginTop: '5px' }, "fast" ); },
	// 	function() { $(this).animate( { opacity: 0.7, marginTop: '0px' }, "fast" ); }
	// );

	// return $(window).resize(function() {
	// 	var boxHeight = $("#welcomebox").css;
	// 	({
	// 		"height": function() {
	// 	 return $(window).height() * 0.3;
	// 	}
	// });
	if (toggle=true) {
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeIn();
		toggle = false;        
	};

	$("#welcomebox").click(function() {
  		$("#welcomebox").fadeToggle();
	});
	
	$("#aboutbox").click(function() {
  		$("#aboutbox").fadeToggle();
	});
  		// click signin and display welcomebox but hide all others
	$("#signin").click(function() {
		$("#aboutbox").fadeOut();
  		$("#welcomebox").fadeIn();
	});
	$("#register").click(function() {
		$("#aboutbox").fadeOut();
  		$("#welcomebox").fadeIn(); 
	});
		
	$("#about").click(function() {
  		$("#welcomebox").fadeOut();
  		$("#aboutbox").fadeIn();

	});
	// press enter to continue
		// $(document).keypress(function(event) {
		// 	var keycode = (event.keyCode ? event.keyCode : event.which);
		// 	if (keycode == 13) { 
		// 		$("#welcomebox").css('display', 'none');
		// 		$(".container").css('display', 'block')
		// 		// $(".questionbox").css('display', 'block');
		// 	}
		// })
		
	$("#toggle").click(function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});
	var enter = false
	var toggle = true
	var cloudmadeUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
	var subDomains = ['otile1','otile2','otile3','otile4'];
	var cloudmadeAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
	var cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, minZoom: 3, attribution: cloudmadeAttrib, subdomains: subDomains, zindex: -1});
	var latlng = new L.LatLng(85.037, -167.343);
	var maxBounds = new L.LatLngBounds(latlng);
	var start = new L.LatLng(15.505, -45.09);
	var map = new L.Map('map', {center: start, zoom: 4, zoomControl: false, layers: [cloudmade]});
	new L.Control.Zoom({position: "bottomright"}).addTo(map)
	L.icon = function (options) {
    return new L.Icon(options);
};
		var blueIcon = L.icon({
	  	iconUrl: 'bluemarker.png',
	    // shadowUrl: 'bluemarker.png',
    iconSize:     [28, 35], // size of the icon
    // shadowSize:   [38, 95], // size of the shadow
    iconAnchor:   [21, 34], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
// 	var marker = L.marker([43.6481, -79.4042], {icon: blueIcon}).addTo(map).bindPopup("Welcome!");
// 	L.marker([51.5, -0.09], {icon: blueIcon}).addTo(map).bindPopup("I am a green leaf.");
// L.marker([51.495, -0.083], {icon: blueIcon}).addTo(map).bindPopup("I am a red leaf.");
// L.marker([51.49, -0.1], {icon: blueIcon}).addTo(map).bindPopup("I am an orange leaf.");
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
//     .openPopup();
});
