var table = '<table class="table table-hover table-striped inner margTop"><thead id="nearest-table-head"><tr><th>Nearest spots</th></tr></thead><tbody>';

function getAllCounties() {
	return gon.counties;
}

function getAllLocations() {
	return gon.locations;
}

var getLocation = function() {
	navigator.geolocation.getCurrentPosition(positionCallback, errorHandler);
};

function errorHandler(error) {
	switch(error.code) {
	case error.PERMISSION_DENIED:
		table += '<tr><td>You have to allow use of your position to get the nearest spots!</td></tr>';
		$(table).insertAfter(".inner");
		break;
	case error.POSITION_UNAVAILABLE:
		table += '<tr><td>Could not get your position. Check your internet connection and/or refresh the page!</td></tr>';
		$(table).insertAfter(".inner");
		break;
	case error.TIMEOUT:
		table += '<tr><td>Position request timeout</td></tr>';
		$(table).insertAfter(".inner");
		break;
	case error.UNKNOWN_ERROR:
		table += '<tr><td>An unknown error ocurred, sorry dude/dudette!</td></tr>';
		$(table).insertAfter(".inner");
		break;
	}
}

function positionCallback(position) {
	var nearestSpots = getNearestSpots(position.coords.latitude, position.coords.longitude);
	havePos = true;

	var nearestTableString = '<table class="table table-hover table-striped inner margTop"><thead id="nearest-table-head"><tr><th>Nearest spots</th><th>Distance</th></tr></thead><tbody>';

	for (var i = 0; i < nearestSpots.length; i++) {
		nearestTableString += '<tr><td><a href=/locations/' + nearestSpots[i].id + '>' + nearestSpots[i].name + '</a></td><td>' + nearestSpots[i].distance.toFixed(2) + " miles" + "</td>" + '</tr>';
	};
	nearestTableString += '</tbody></table>';

	$(nearestTableString).insertAfter(".inner");

}

function discardFurthestLocation(geoLocations, newLoc) {
	// geoLocations.sort(compare);
	if (newLoc.distance < geoLocations[geoLocations.length - 1].distance) {
		geoLocations[geoLocations.length - 1] = newLoc;
	}
	return geoLocations;
}

function getNearestCounties(latitude, longitude) {
	var counties = getAllCounties();
	if (null !== counties) {
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
	} else {
		table += '<tr><td>Could not get your position. Maybe refreshing the page will work?</td></tr>';
		$(table).insertAfter(".inner");
	};
}

function getNearestSpots(latitude, longitude) {
	var locations = getAllLocations();
	if (null !== locations) {
		var nearestCounties = getNearestCounties(latitude, longitude);
		var nearestSpots = [];

		for (var i = 0; i < locations.length; i++) {
			if (locations[i].county_id == nearestCounties[0].id || locations[i].county_id == nearestCounties[1].id) {
				var distance = calculateDistance(latitude, longitude, locations[i].latitude, locations[i].longitude);
				tempSpot = {
					name : locations[i].name,
					distance : distance,
					id : locations[i].id
				};
				if (nearestSpots.length == 5) {
					nearestSpots.sort(compare);
					nearestSpots = discardFurthestLocation(nearestSpots, tempSpot);
				} else {
					nearestSpots.push(tempSpot);
				};
			};
		};
		return nearestSpots.sort(compare);
	} else {
		table += '<tr><td>Could not get your position. Maybe refreshing the page will work?</td></tr>';
		$(table).insertAfter(".inner");
	}
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
	//miles
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
