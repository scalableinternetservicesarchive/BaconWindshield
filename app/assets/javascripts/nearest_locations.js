// window.onload = getLocation();

var counties = gon.counties;
var locations = gon.locations;

var getLocation = function() {
	navigator.geolocation.getCurrentPosition(callback);
};


function callback(position) {
	var nearestSpots = getNearestSpots(position.coords.latitude, position.coords.longitude);

	var nearestTableString = '<table class="table table-hover table-striped inner margTop"><thead id="nearest-table-head"><tr><th>Nearest spots</th><th>Distance</th></tr></thead><tbody>';

	for (var i = 0; i < nearestSpots.length; i++) {
		nearestTableString += '<tr><td><a href=/locations/' + nearestSpots[i].id + '>' + nearestSpots[i].name + '</a>' + '</td>' + "<td>" + nearestSpots[i].distance.toFixed(2) + " miles" + "</td>" + '</tr>';
	};
	nearestTableString += '</tbody></table>';

	$(nearestTableString).insertAfter(".inner");
}

function discardFurthestLocation(geoLocations, newLoc) {
	geoLocations.sort(compare);
	if (newLoc.distance < geoLocations[geoLocations.length - 1].distance) {
		geoLocations[geoLocations.length - 1] = newLoc;
	}
	return geoLocations;
}

function openPage() {
	location.href = "/locations/" + finalNearestSpots[0][2];
}

function getNearestCounties(latitude, longitude) {
	var nearestCounties = [];
	for (var i = 0; i < counties.length; i++) {
		var distance = calculateDistance(latitude, longitude, counties[i].latitude, counties[i].longitude);
		var tempCounty = {
			name : counties[i].name,
			id : counties[i].id,
			distance : distance
		};
		if (nearestCounties.length == 2) {
			nearestCounties = discardFurthestLocation(nearestCounties, tempCounty);
		} else {
			nearestCounties.push(tempCounty);
		}
	};
	return nearestCounties;
}

function getNearestSpots(latitude, longitude) {
	var nearestCounties = getNearestCounties(latitude, longitude);
	var nearestSpots = [];

	for (var i = 0; i < gon.locations.length; i++) {
		if (locations[i].county_id == nearestCounties[0].id || locations[i].county_id == nearestCounties[1].id) {
			var distance = calculateDistance(latitude, longitude, locations[i].latitude, locations[i].longitude);
			tempSpot = {
				name : locations[i].name,
				distance : distance,
				id : locations[i].id
			};
			if (nearestSpots.length == 5) {
				nearestSpots = discardFurthestLocation(nearestSpots, tempSpot);
			} else {
				nearestSpots.push(tempSpot);
			};
		};
	};
	return nearestSpots.sort(compare);
}

function compare(spot1, spot2) {
	if (spot1.distance < spot2.distance)
		return -1;
	if (spot1.distance > spot2.distance)
		return 1;
	return 0;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
	var R = 3959;
	var φ1 = toRadians(lat1);
	var φ2 = toRadians(lat2);
	var Δφ = toRadians(lat2 - lat1);
	var Δλ = toRadians(lon2 - lon1);

	var a = Math.sin(Δφ * 0.5) * Math.sin(Δφ * 0.5) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ * 0.5) * Math.sin(Δλ * 0.5);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	var d = R * c;
	return d;
}

function toRadians(num) {
	return (num * Math.PI / 180);
}

$(document).ready(getLocation);
$(document).on('page:load', getLocation);