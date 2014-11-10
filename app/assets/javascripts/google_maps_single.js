var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

	$("canvas.spot_forecast").each(function(index) {
		var spot_id = $(this).attr('data-location');

		$.getJSON('http://www.spitcast.com/api/spot/forecast/' + $(this).attr('data-location') + '/?dcat=' + duration_day + '&dval=' + $(this).attr('data-date') + '&format=json', function(data) {
			var latitude = data[0].latitude;
			var longitude = data[0].longitude;

			var featureOpts = [{
				"featureType" : "all",
				"stylers" : [{
					"saturation" : 0
				}, {
					"hue" : "#e7ecf0"
				}]
			}, {
				"featureType" : "road",
				"stylers" : [{
					"saturation" : -70
				}]
			}, {
				"featureType" : "transit",
				"stylers" : [{
					"visibility" : "off"
				}]
			}, {
				"featureType" : "poi",
				"stylers" : [{
					"visibility" : "off"
				}]
			}, {
				"featureType" : "water",
				"stylers" : [{
					"visibility" : "simplified"
				}, {
					"saturation" : -60
				}]
			}];
			var mapOptions = {
				disableDefaultUI : true,
				zoom : 15,

				mapTypeControlOptions : {
					mapTypeIds : [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
				},
				mapTypeId : MY_MAPTYPE_ID
			};
			var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			var styledMapOptions = {
				name : 'Custom Style'
			};

			var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

			map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

			var marker;
			var waveImage = new google.maps.MarkerImage('http://cdn.flaticon.com/png/64/48043.png', new google.maps.Size(64, 64), new google.maps.Point(0, 0), new google.maps.Point(32, 32));

			var pos = new google.maps.LatLng(latitude, longitude);
			var marker = new google.maps.Marker({
				position : pos,
				map : map,
				icon : waveImage,
			});
			map.setCenter(pos);

		});

	});

}

function handleNoGeolocation(errorFlag) {
	if (errorFlag) {
		var content = 'Error: The Geolocation service failed.';
	} else {
		var content = 'Error: Your browser doesn\'t support geolocation.';
	}

	var options = {
		map : map,
		position : new google.maps.LatLng(60, 105),
		content : content
	};

	var infowindow = new google.maps.InfoWindow(options);
	map.setCenter(options.position);
}
