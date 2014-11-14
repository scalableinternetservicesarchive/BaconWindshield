var MY_MAPTYPE_ID = 'custom_style';

function initialize1() {
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
		zoom : 4,

		mapTypeControlOptions : {
			mapTypeIds : [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId : MY_MAPTYPE_ID
	};
	var map = new google.maps.Map(document.getElementById('map-canvas1'), mapOptions);
	var styledMapOptions = {
		name : 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	var regionData = [{"id":"2","name":"France","latA":"49.9","latB":"42.7","lonA":"-7.6","lonB":"3.1","URL":"\/France-Surf-Forecast\/2\/","type":"region"},{"id":"3","name":"South Africa","latA":"-25","latB":"-37","lonA":"14","lonB":"33.5","URL":"\/South-Africa-Surf-Forecast\/3\/","type":"region"},{"id":"4","name":"New Zealand","latA":"-34.1","latB":"-47.5","lonA":"166","lonB":"179.4","URL":"\/New-Zealand-Surf-Forecast\/4\/","type":"region"},{"id":"5","name":"Canary Islands","latA":"30","latB":"27","lonA":"-19","lonB":"-13","URL":"\/Canary-Islands-Surf-Forecast\/5\/","type":"region"},{"id":"8","name":"Spain + Portugal","latA":"45","latB":"35","lonA":"-12","lonB":"0","URL":"\/Spain-Portugal-Surf-Forecast\/8\/","type":"region"},{"id":"9","name":"Gulf Coast","latA":"31.3","latB":"17.7","lonA":"-99.7","lonB":"-80","URL":"\/Gulf-Coast-Surf-Forecast\/9\/","type":"region"},{"id":"10","name":"Germany + Denmark","latA":"58","latB":"51","lonA":"2.5","lonB":"10","URL":"\/Germany-Denmark-Surf-Forecast\/10\/","type":"region"},{"id":"12","name":"Morocco","latA":"36","latB":"28","lonA":"-13","lonB":"-5","URL":"\/Morocco-Surf-Forecast\/12\/","type":"region"},{"id":"14","name":"Washington","latA":"49","latB":"46","lonA":"-126","lonB":"-123","URL":"\/Washington-Surf-Forecast\/14\/","type":"region"},{"id":"15","name":"Oregon","latA":"46.5","latB":"42","lonA":"-126","lonB":"-122","URL":"\/Oregon-Surf-Forecast\/15\/","type":"region"},{"id":"16","name":"California, North","latA":"42.5","latB":"37","lonA":"-126","lonB":"-121","URL":"\/California-North-Surf-Forecast\/16\/","type":"region"},{"id":"17","name":"California, South","latA":"34.75","latB":"32.25","lonA":"-121","lonB":"-116.9","URL":"\/California-South-Surf-Forecast\/17\/","type":"region"},{"id":"22","name":"New Jersey + New York","latA":"41.3","latB":"38.7","lonA":"-75.1","lonB":"-71.5","URL":"\/New-Jersey-New-York-Surf-Forecast\/22\/","type":"region"},{"id":"23","name":"Atlantic States","latA":"39","latB":"36.5","lonA":"-77","lonB":"-74","URL":"\/Atlantic-States-Surf-Forecast\/23\/","type":"region"},{"id":"25","name":"South Carolina + Georgia","latA":"34.1","latB":"30.5","lonA":"-82","lonB":"-78.5","URL":"\/South-Carolina-Georgia-Surf-Forecast\/25\/","type":"region"},{"id":"29","name":"Central America South","latA":"13.5","latB":"6.5","lonA":"-88","lonB":"-78","URL":"\/Central-America-South-Surf-Forecast\/29\/","type":"region"},{"id":"30","name":"Ecuador","latA":"2","latB":"-4.5","lonA":"-84","lonB":"-75","URL":"\/Ecuador-Surf-Forecast\/30\/","type":"region"},{"id":"31","name":"Peru - North","latA":"-3","latB":"-9","lonA":"-83","lonB":"-76","URL":"\/Peru-North-Surf-Forecast\/31\/","type":"region"},{"id":"32","name":"Peru - South","latA":"-9","latB":"-18","lonA":"-82","lonB":"-70","URL":"\/Peru-South-Surf-Forecast\/32\/","type":"region"},{"id":"33","name":"Chile - North","latA":"-18","latB":"-28","lonA":"-75","lonB":"-64","URL":"\/Chile-North-Surf-Forecast\/33\/","type":"region"},{"id":"34","name":"Chile - South","latA":"-28","latB":"-38","lonA":"-77","lonB":"-67","URL":"\/Chile-South-Surf-Forecast\/34\/","type":"region"},{"id":"38","name":"Brazil - Northeast","latA":"-2","latB":"-12","lonA":"-42","lonB":"-30","URL":"\/Brazil-Northeast-Surf-Forecast\/38\/","type":"region"},{"id":"40","name":"Windward Islands","latA":"16.6","latB":"11.5","lonA":"-64","lonB":"-57","URL":"\/Windward-Islands-Surf-Forecast\/40\/","type":"region"},{"id":"41","name":"Leeward Islands","latA":"20","latB":"16","lonA":"-68","lonB":"-62","URL":"\/Leeward-Islands-Surf-Forecast\/41\/","type":"region"},{"id":"42","name":"Central Caribbean","latA":"28","latB":"16","lonA":"-85","lonB":"-68","URL":"\/Central-Caribbean-Surf-Forecast\/42\/","type":"region"},{"id":"43","name":"Venezuela, Trindad + Tobago","latA":"13","latB":"8","lonA":"-70","lonB":"-60","URL":"\/Venezuela-Trindad-Tobago-Surf-Forecast\/43\/","type":"region"},{"id":"44","name":"South West Australia","latA":"-26","latB":"-35.5","lonA":"108","lonB":"120","URL":"\/South-West-Australia-Surf-Forecast\/44\/","type":"region"},{"id":"45","name":"South Australia","latA":"-31","latB":"-39","lonA":"128.5","lonB":"141","URL":"\/South-Australia-Surf-Forecast\/45\/","type":"region"},{"id":"46","name":"Victoria","latA":"-36","latB":"-41","lonA":"141","lonB":"151","URL":"\/Victoria-Surf-Forecast\/46\/","type":"region"},{"id":"47","name":"New South Wales","latA":"-28","latB":"-38","lonA":"146","lonB":"156","URL":"\/New-South-Wales-Surf-Forecast\/47\/","type":"region"},{"id":"48","name":"Queensland","latA":"-23","latB":"-29","lonA":"150","lonB":"157","URL":"\/Queensland-Surf-Forecast\/48\/","type":"region"},{"id":"49","name":"Tasmania","latA":"-40","latB":"-45","lonA":"144","lonB":"149","URL":"\/Tasmania-Surf-Forecast\/49\/","type":"region"},{"id":"51","name":"Hawaii","latA":"22.5","latB":"18.5","lonA":"-160.5","lonB":"-154.5","URL":"\/Hawaii-Surf-Forecast\/51\/","type":"region"},{"id":"52","name":"Norway","latA":"68.5","latB":"57.5","lonA":"2","lonB":"14","URL":"\/Norway-Surf-Forecast\/52\/","type":"region"},{"id":"53","name":"Oman","latA":"23.5","latB":"16","lonA":"53","lonB":"60","URL":"\/Oman-Surf-Forecast\/53\/","type":"region"},{"id":"54","name":"Sri Lanka","latA":"10","latB":"5.5","lonA":"78","lonB":"83","URL":"\/Sri-Lanka-Surf-Forecast\/54\/","type":"region"},{"id":"56","name":"Maldives","latA":"5","latB":"0","lonA":"70.5","lonB":"76","URL":"\/Maldives-Surf-Forecast\/56\/","type":"region"},{"id":"58","name":"Mauritius + R\u00c3\u00a9union","latA":"-17.5","latB":"-23.5","lonA":"55","lonB":"65","URL":"\/Mauritius-Reunion-Surf-Forecast\/58\/","type":"region"},{"id":"60","name":"Ghana + The Ivory Coast","latA":"10","latB":"4","lonA":"-8","lonB":"1.5","URL":"\/Ghana-The-Ivory-Coast-Surf-Forecast\/60\/","type":"region"},{"id":"61","name":"Japan","latA":"37","latB":"25","lonA":"125.5","lonB":"142","URL":"\/Japan-Surf-Forecast\/61\/","type":"region"},{"id":"64","name":"Java","latA":"-5","latB":"-10","lonA":"105","lonB":"115","URL":"\/Java-Surf-Forecast\/64\/","type":"region"},{"id":"66","name":"Philippines","latA":"21","latB":"5","lonA":"113","lonB":"133","URL":"\/Philippines-Surf-Forecast\/66\/","type":"region"},{"id":"67","name":"Azores","latA":"41","latB":"35","lonA":"-33","lonB":"-23.5","URL":"\/Azores-Surf-Forecast\/67\/","type":"region"},{"id":"68","name":"Micronesia (Carolines)","latA":"20","latB":"0","lonA":"133","lonB":"166","URL":"\/Micronesia-Carolines-Surf-Forecast\/68\/","type":"region"},{"id":"69","name":"West Africa","latA":"19","latB":"4","lonA":"-27","lonB":"-7","URL":"\/West-Africa-Surf-Forecast\/69\/","type":"region"},{"id":"70","name":"Bermuda","latA":"33","latB":"31.5","lonA":"-66","lonB":"-63.5","URL":"\/Bermuda-Surf-Forecast\/70\/","type":"region"},{"id":"71","name":"South East Asia","latA":"22","latB":"4","lonA":"90","lonB":"112","URL":"\/South-East-Asia-Surf-Forecast\/71\/","type":"region"},{"id":"73","name":"Iceland","latA":"67","latB":"63","lonA":"-24","lonB":"-12","URL":"\/Iceland-Surf-Forecast\/73\/","type":"region"},{"id":"78","name":"China","latA":"35","latB":"18","lonA":"109","lonB":"126","URL":"\/China-Surf-Forecast\/78\/","type":"region"},{"id":"79","name":"India","latA":"24","latB":"7","lonA":"67","lonB":"89","URL":"\/India-Surf-Forecast\/79\/","type":"region"},{"id":"80","name":"Netherlands + Belgium","latA":"58","latB":"51","lonA":"2.5","lonB":"10","URL":"\/Netherlands-Belgium-Surf-Forecast\/80\/","type":"region"},{"id":"81","name":"Great Lakes","latA":"49.24","latB":"41.36","lonA":"-92.63","lonB":"-75.69","URL":"\/Great-Lakes-Surf-Forecast\/81\/","type":"region"},{"id":"84","name":"Maluku Islands","latA":"3","latB":"-8.6","lonA":"124","lonB":"135","URL":"\/Maluku-Islands-Surf-Forecast\/84\/","type":"region"},{"id":"85","name":"Western Sahara ","latA":"28","latB":"21","lonA":"-20","lonB":"24","URL":"\/Western-Sahara-Surf-Forecast\/85\/","type":"region"},{"id":"86","name":"Central Africa","latA":"7","latB":"-19","lonA":"3","lonB":"17","URL":"\/Central-Africa-Surf-Forecast\/86\/","type":"region"},{"id":"87","name":"Colombia","latA":"12","latB":"0","lonA":"-80","lonB":"-67","URL":"\/Colombia-Surf-Forecast\/87\/","type":"region"},{"id":"88","name":"Taiwan","latA":"26","latB":"21","lonA":"119","lonB":"123","URL":"\/Taiwan-Surf-Forecast\/88\/","type":"region"},{"id":"89","name":"Italy","latA":"46","latB":"36","lonA":"7","lonB":"19","URL":"\/Italy-Surf-Forecast\/89\/","type":"region"},{"id":"90","name":"Israel","latA":"33.5","latB":"31","lonA":"34","lonB":"37","URL":"\/Israel-Surf-Forecast\/90\/","type":"region"},{"id":"91","name":"Seychelles","latA":"-3.978","latB":"-5.016","lonA":"54.985","lonB":"56.171","URL":"\/Seychelles-Surf-Forecast\/91\/","type":"region"},{"id":"92","name":"Uruguay","latA":"-33.5","latB":"-34.9788","lonA":"-58.4146","lonB":"-52.5861","URL":"\/Uruguay-Surf-Forecast\/92\/","type":"region"},{"id":"93","name":"Equatorial Guinea","latA":"2.19947","latB":"1.00331","lonA":"8.74786","lonB":"11.3678","URL":"\/Equatorial-Guinea-Surf-Forecast\/93\/","type":"region"},{"id":"94","name":"Antarctic Peninsula","latA":"-60","latB":"-72","lonA":"-80","lonB":"-50","URL":"\/Antarctic-Peninsula-Surf-Forecast\/94\/","type":"region"},{"id":"98","name":"Greece","latA":"41","latB":"34","lonA":"19","lonB":"28","URL":"\/Greece-Surf-Forecast\/98\/","type":"region"},{"id":"99","name":"Bangladesh","latA":"20","latB":"23","lonA":"89","lonB":"93","URL":"\/Bangladesh-Surf-Forecast\/99\/","type":"region"},{"id":"100","name":"Persian Gulf","latA":"23","latB":"31","lonA":"47","lonB":"57","URL":"\/Persian-Gulf-Surf-Forecast\/100\/","type":"region"},{"id":"1","name":"UK + Ireland","latA":"59.5","latB":"49","lonA":"-11.7","lonB":"3","URL":"\/UK-Ireland-Surf-Forecast\/1\/","type":"region"},{"id":"18","name":"Mexico, Baja","latA":"33","latB":"22","lonA":"-119","lonB":"-107","URL":"\/Mexico-Baja-Surf-Forecast\/18\/","type":"region"},{"id":"19","name":"Mexico, Pacific","latA":"23","latB":"14","lonA":"-109","lonB":"-95","URL":"\/Mexico-Pacific-Surf-Forecast\/19\/","type":"region"},{"id":"20","name":"Florida","latA":"31","latB":"24","lonA":"-86.5","lonB":"-78","URL":"\/Florida-Surf-Forecast\/20\/","type":"region"},{"id":"21","name":"New England","latA":"45","latB":"41.3","lonA":"-75","lonB":"-67","URL":"\/New-England-Surf-Forecast\/21\/","type":"region"},{"id":"24","name":"North Carolina","latA":"36.63","latB":"33.8","lonA":"-78.6","lonB":"-75","URL":"\/North-Carolina-Surf-Forecast\/24\/","type":"region"},{"id":"26","name":"Nova Scotia","latA":"47","latB":"43","lonA":"-66.5","lonB":"-59.5","URL":"\/Nova-Scotia-Surf-Forecast\/26\/","type":"region"},{"id":"28","name":"Central America North","latA":"15","latB":"12","lonA":"-93","lonB":"-87","URL":"\/Central-America-North-Surf-Forecast\/28\/","type":"region"},{"id":"35","name":"Argentina","latA":"-34","latB":"-40","lonA":"-63","lonB":"-56","URL":"\/Argentina-Surf-Forecast\/35\/","type":"region"},{"id":"36","name":"Brazil - South","latA":"-21","latB":"-31","lonA":"-51","lonB":"-40","URL":"\/Brazil-South-Surf-Forecast\/36\/","type":"region"},{"id":"37","name":"Brazil - East","latA":"-12","latB":"-22","lonA":"-44","lonB":"-34","URL":"\/Brazil-East-Surf-Forecast\/37\/","type":"region"},{"id":"50","name":"Canada, West","latA":"52","latB":"48","lonA":"-129","lonB":"-123","URL":"\/Canada-West-Surf-Forecast\/50\/","type":"region"},{"id":"55","name":"Bali + Lombok","latA":"-6.5","latB":"-10","lonA":"113","lonB":"118","URL":"\/Bali-Lombok-Surf-Forecast\/55\/","type":"region"},{"id":"57","name":"Mozambique + Madagascar","latA":"-10","latB":"-28","lonA":"30","lonB":"51","URL":"\/Mozambique-Madagascar-Surf-Forecast\/57\/","type":"region"},{"id":"62","name":"French Polynesia","latA":"-14","latB":"-21","lonA":"-153","lonB":"-142","URL":"\/French-Polynesia-Surf-Forecast\/62\/","type":"region"},{"id":"63","name":"Sumatra + Mentawais","latA":"6.5","latB":"-6.5","lonA":"92","lonB":"106.5","URL":"\/Sumatra-Mentawais-Surf-Forecast\/63\/","type":"region"},{"id":"65","name":"Nusa Tenggara","latA":"-5","latB":"-12","lonA":"116.5","lonB":"128","URL":"\/Nusa-Tenggara-Surf-Forecast\/65\/","type":"region"},{"id":"76","name":"Fiji, Samoa + Tonga","latA":"-10","latB":"-23","lonA":"177","lonB":"193","URL":"\/Fiji-Samoa-Tonga-Surf-Forecast\/76\/","type":"region"},{"id":"77","name":"North West Australia","latA":"-19","latB":"-27","lonA":"110","lonB":"120","URL":"\/North-West-Australia-Surf-Forecast\/77\/","type":"region"},{"id":"82","name":"Alaska","latA":"62","latB":"52.133","lonA":"-159.74","lonB":"-130.95","URL":"\/Alaska-Surf-Forecast\/82\/","type":"region"},{"id":"96","name":"Russia","latA":"77","latB":"46.9","lonA":"30.4","lonB":"175.6","URL":"\/Russia-Surf-Forecast\/96\/","type":"region"},{"id":"97","name":"Lebanon","latA":"35","latB":"33","lonA":"35","lonB":"37","URL":"\/Lebanon-Surf-Forecast\/97\/","type":"region"},{"id":"101","name":"Bulgaria + Romania","latA":"40","latB":"47","lonA":"27","lonB":"42","URL":"\/Bulgaria-Romania-Surf-Forecast\/101\/","type":"region"},{"id":"102","name":"Cook Islands","latA":"-18","latB":"-24","lonA":"-162","lonB":"-156","URL":"\/Cook-Islands-Surf-Forecast\/102\/","type":"region"},{"id":"103","name":"Sweden","latA":"55","latB":"75","lonA":"10","lonB":"25","URL":"\/Sweden-Surf-Forecast\/103\/","type":"region"},{"id":"104","name":"Baltic Sea","latA":"54","latB":"60","lonA":"19","lonB":"29","URL":"\/Baltic-Sea-Surf-Forecast\/104\/","type":"region"},{"id":"105","name":"Turkey","latA":"34","latB":"42.5","lonA":"25.5","lonB":"45","URL":"\/Turkey-Surf-Forecast\/105\/","type":"region"}];


	var marker, i;
	var markers = [];
	var markers2 = [];


	var targetImage = new google.maps.MarkerImage('http://icons.iconarchive.com/icons/pixelkit/gentle-edges/32/Location-Map-icon.png', new google.maps.Size(32, 32), new google.maps.Point(0, 0), new google.maps.Point(16, 16));
	var waveImage1 = new google.maps.MarkerImage('http://cdn.flaticon.com/png/64/48043.png', new google.maps.Size(64, 64), new google.maps.Point(0, 0), new google.maps.Point(32, 32));
	var waveImage2 = new google.maps.MarkerImage('http://cdn.flaticon.com/png/16/48043.png', new google.maps.Size(16, 16), new google.maps.Point(0, 0), new google.maps.Point(8, 8));


	for ( i = 0; i < regionData.length; i++) {
		
		var rectangle = new google.maps.Rectangle({
	    strokeColor: '#A4A4A4',
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: '#ffffff',
	    fillOpacity: 0.35,
	    map: map,
	    bounds: new google.maps.LatLngBounds(
	      new google.maps.LatLng(regionData[i].latA,regionData[i].lonA),
	      new google.maps.LatLng(regionData[i].latB,regionData[i].lonB))
	      });
	}

	// Try to use geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			var marker = new google.maps.Marker({
				position : pos,
				map : map,
				icon : targetImage,
				title : 'You are here!'
			});
			markers2.push(marker);

			map.setCenter(pos);
		}, function() {
			handleNoGeolocation(true);
		});
	} else {
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	}
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

// google.maps.event.addDomListener(window, 'load', initialize); 