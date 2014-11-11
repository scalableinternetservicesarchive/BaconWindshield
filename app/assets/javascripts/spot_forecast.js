var sf = new Array();

var ready = function() {

	// Create Spot Forecasts
	$("canvas.spot_forecast").each(function(index) {

		// Define Variables

		var canvas = $(this)[0];
		var context = canvas.getContext("2d");

		var height_max = 6;
		// Feet
		var height_scale = 12;
		// Pixels

		var chartX_indent = 0.5;
		var chartY_indent = 4.5;

		duration = $(this).attr('data-duration');
		if (duration == 'day') {
			duration_day = duration;
			var time_scale = 19.5;
			var time_max = 24;
			// 1 day in hour
			var time_text_indent = 0;
			var iterator_step = 1;
		} else if (duration == 'week') {
			duration_week = duration;
			var time_scale = 2.65;
			var time_max = 24 * 7;
			// 7 days in hours
			var time_text_indent = 35;
			var iterator_step = 6;
		}

		if (duration == 'day') {
			// Load Forecast

			$.getJSON('http://www.spitcast.com/api/spot/forecast/' + $(this).attr('data-location') + '/?dcat=' + duration_day + '&dval=' + $(this).attr('data-date') + '&format=json', function(data) {

				// CHART SIZE

				var sizeMin = data[0].size;
				var sizeMax = data[0].size;

				for (var i = 0; i < time_max + 1; i++) {
					data[i].size_high = data[i].size_ft + data[i].size_ft / 6;
					data[i].size_low = data[i].size_ft - data[i].size_ft / 6;

					// Find min and max.
					if (data[i].size_low < sizeMin) {
						sizeMin = data[i].size_low;
					}
					if (data[i].size_high > sizeMax) {
						sizeMax = data[i].size_high;
					}
				}

				while (sizeMax > height_max) {
					height_max += 3;
				}
				// if (sizeMax > 6) {
				// if (sizeMax > 10) {
				// height_scale = 4;
				// } else {
				// height_scale = 8;
				// }
				// }
				if (sizeMax > 6) {
					if (Math.ceil(sizeMax) < 13) {

						switch(Math.ceil(sizeMax)) {
						case 7:
							height_scale = 8;
							break;
						case 8:
							height_scale = 8;
							break;
						case 9:
							height_scale = 7;
							break;
						case 10:
							height_scale = 6;
							break;
						case 11:
							height_scale = 6;
							break;
						case 12:
							height_scale = 6;
							break;
						}
					} else {
						if (sizeMax < 15) {
							height_scale = 5;
						} else {
							height_scale = 3;
						}
					}

				}

				$("canvas#spot_" + data[0].spot_id).attr('height', height_max * height_scale + 22);

				// FORECAST SUMMARY

				var summaryText = (Math.round(sizeMin) == Math.round(sizeMax)) ? Math.round(sizeMin) + " ft" : Math.round(sizeMin) + "-" + Math.round(sizeMax) + " ft";

				$("div#forecast_summary_spot_" + data[0].spot_id).html(summaryText);

				// GRID: Height Bars

				for (var i = 0; i < (height_max + 1); i++) {
					if (i % 3 == 0) {
						context.moveTo(chartX_indent, height_max * height_scale - i * height_scale + chartY_indent);
						context.strokeStyle = "rgba(204,204,204,1)";
						context.lineTo(time_max * time_scale + chartX_indent, height_max * height_scale - i * height_scale + chartY_indent);
						context.stroke();
						if (i != 0) {
							context.font = "11px Arial";
							context.textAlign = "left";
							context.textBaseline = "middle";
							context.fillText(i + "ft", time_max * time_scale + chartX_indent + 1, height_max * height_scale - i * height_scale + chartY_indent);
						}

					}
				}

				// GRID: Time Bars
				for (var i = 0; i < (time_max + 1); i++) {
					if (duration_day == 'day') {
						if (i % 6 == 0) {
							context.moveTo(i * time_scale + chartX_indent, chartY_indent);
							context.lineTo(i * time_scale + chartX_indent, height_max * height_scale + chartY_indent);
							context.stroke();

							if (i != 0 && i != 24) {
								switch(i) {
								case 6:
									timeText = "6am";
									break;
								case 12:
									timeText = "Noon";
									break;
								case 18:
									timeText = "6pm";
									break;
								}

								context.font = "11px Arial";
								context.textAlign = "center";
								context.textBaseline = "top";
								context.fillText(timeText, i * time_scale + chartX_indent + time_text_indent, height_max * height_scale + chartY_indent + 2);
							}
						}
					} else if (duration_day == 'week') {
						if (i % 24 == 0) {
							context.moveTo(Math.round(i * time_scale) + chartX_indent, chartY_indent);
							context.lineTo(Math.round(i * time_scale) + chartX_indent, height_max * height_scale + chartY_indent);
							context.stroke();

							if (i != 24 * 7) {
								to_noon = 12;
								timeText = data[i + to_noon].day;
								context.font = "11px Arial";
								context.textAlign = "center";
								context.textBaseline = "top";
								context.fillText(timeText, i * time_scale + chartX_indent + time_text_indent, height_max * height_scale + chartY_indent + 2);
							}
						}
					} else if (duration_day == 'weekend') {
						if (i % 24 == 0) {
							context.moveTo(Math.round(i * time_scale) + chartX_indent, chartY_indent);
							context.lineTo(Math.round(i * time_scale) + chartX_indent, height_max * height_scale + chartY_indent);
							context.stroke();

							if (i != 24 * 3) {
								timeText = data[i].day;
								context.font = "11px Arial";
								context.textAlign = "left";
								context.textBaseline = "top";
								context.fillText(timeText, i * time_scale + chartX_indent + time_text_indent, height_max * height_scale + chartY_indent + 2);
							}
						}
					}
				}

				// CHART FILL

				// Top

				context.beginPath();

				context.moveTo(chartX_indent, (height_max - data[0].size_high) * height_scale + chartY_indent);

				for (var i = iterator_step; i <= time_max - iterator_step; i += iterator_step) {
					var x = i * time_scale + chartX_indent;
					var y = (height_max - data[i].size_high) * height_scale + chartY_indent;

					var xPlusOne = (i + iterator_step) * time_scale + chartX_indent;
					var yPlusOne = (height_max - data[i + iterator_step].size_high) * height_scale + chartY_indent;

					var xc = (x + xPlusOne) / 2;
					var yc = (y + yPlusOne) / 2;

					context.quadraticCurveTo(x, y, xc, yc);
				}

				context.lineTo(time_max * time_scale + chartX_indent, (height_max - data[time_max].size_high) * height_scale + chartY_indent);

				// Bottom

				context.lineTo(time_max * time_scale + chartX_indent, height_max * height_scale + chartY_indent);
				context.lineTo(chartX_indent, height_max * height_scale + chartY_indent);

				// Fill

				var grd = context.createLinearGradient(0, 0, time_max * time_scale, 0);

				grd.addColorStop(0, getFillColor(data[0].shape));
				grd.addColorStop(0 + (1 / time_max) / 2, getFillColor(data[0].shape));

				for (var i = 1; i < time_max; i++) {
					grd.addColorStop(i / time_max - (1 / time_max) / 2, getFillColor(data[i].shape));
					grd.addColorStop(i / time_max + (1 / time_max) / 2, getFillColor(data[i].shape));
				}

				grd.addColorStop(1 - (1 / time_max) / 2, getFillColor(data[time_max].shape));
				grd.addColorStop(1, getFillColor(data[time_max].shape));

				context.fillStyle = grd;

				context.fill();

				// CHART LINE

				context.beginPath();
				context.strokeStyle = "rgba(0, 0, 0, 1)";
				context.lineWidth = 2;
				context.lineJoin = 'round';
				context.lineCap = 'butt';

				// High Curve

				context.beginPath();
				context.moveTo(chartX_indent, (height_max - data[0].size_high) * height_scale + chartY_indent);

				for (var i = iterator_step; i <= time_max - iterator_step; i += iterator_step) {

					var x = i * time_scale + chartX_indent;
					var y = (height_max - data[i].size_high) * height_scale + chartY_indent;

					var xPlusOne = (i + iterator_step) * time_scale + chartX_indent;
					var yPlusOne = (height_max - data[i + iterator_step].size_high) * height_scale + chartY_indent;

					var xc = (x + xPlusOne) / 2;
					var yc = (y + yPlusOne) / 2;

					context.quadraticCurveTo(x, y, xc, yc);

				}

				context.lineTo(time_max * time_scale + chartX_indent, (height_max - data[time_max].size_high) * height_scale + chartY_indent);
				context.stroke();

				// Low Curve

				context.beginPath();
				context.moveTo(chartX_indent, (height_max - data[0].size_low) * height_scale + chartY_indent);

				for (var i = iterator_step; i <= time_max - iterator_step; i += iterator_step) {

					var x = i * time_scale + chartX_indent;
					var y = (height_max - data[i].size_low) * height_scale + chartY_indent;

					var xPlusOne = (i + iterator_step) * time_scale + chartX_indent;
					var yPlusOne = (height_max - data[i + iterator_step].size_low) * height_scale + chartY_indent;

					var xc = (x + xPlusOne) / 2;
					var yc = (y + yPlusOne) / 2;

					context.quadraticCurveTo(x, y, xc, yc);

				}
				context.strokeStyle = "rgba(81,81,81,1)";

				context.lineTo(time_max * time_scale + chartX_indent, (height_max - data[time_max].size_low) * height_scale + chartY_indent);
				context.stroke();

			});
		} else {
			// Load Forecast

			$.getJSON('http://www.spitcast.com/api/spot/forecast/' + $(this).attr('data-location') + '/?dcat=' + duration_week + '&dval=' + $(this).attr('data-date') + '&format=json', function(data) {

				// CHART SIZE

				var sizeMin = data[0].size;
				var sizeMax = data[0].size;

				for (var i = 0; i < time_max + 1; i++) {
					data[i].size_high = data[i].size_ft + data[i].size_ft / 6;
					data[i].size_low = data[i].size_ft - data[i].size_ft / 6;

					// Find min and max.
					if (data[i].size_low < sizeMin) {
						sizeMin = data[i].size_low;

					}
					if (data[i].size_high > sizeMax) {
						if (i == 91) {

						} else {
							sizeMax = data[i].size_high;
						}

					}
				}

				while (sizeMax > height_max) {
					height_max += 3;
				}

				if (sizeMax > 6) {
					if (Math.ceil(sizeMax) < 12) {

						switch(Math.ceil(sizeMax)) {
						case 7:
							height_scale = 8;
							break;
						case 8:
							height_scale = 8;
							break;
						case 9:
							height_scale = 7;
							break;
						case 10:
							height_scale = 6;
							break;
						case 11:
							height_scale = 6;
							break;
						}
					} else {
						if (sizeMax < 15) {
							height_scale = 5;
						} else {
							height_scale = 3;
						}
					}

				}

				$("canvas#spot_" + data[0].spot_id).attr('height', height_max * height_scale + 22);

				// FORECAST SUMMARY

				var summaryText = (Math.round(sizeMin) == Math.round(sizeMax)) ? Math.round(sizeMin) + " ft" : Math.round(sizeMin) + "-" + Math.round(sizeMax) + " ft";

				$("div#forecast_summary_spot_" + data[0].spot_id).html(summaryText);

				// GRID: Height Bars

				for (var i = 0; i < (height_max + 1); i++) {
					if (i % 3 == 0) {
						context.moveTo(chartX_indent, height_max * height_scale - i * height_scale + chartY_indent);
						context.strokeStyle = "rgba(204,204,204,1)";
						context.lineTo(time_max * time_scale + chartX_indent, height_max * height_scale - i * height_scale + chartY_indent);
						context.stroke();
						if (i != 0) {
							context.font = "11px Arial";
							context.textAlign = "left";
							context.textBaseline = "middle";
							context.fillText(i + "ft", time_max * time_scale + chartX_indent + 1, height_max * height_scale - i * height_scale + chartY_indent);
						}

					}
				}

				// GRID: Time Bars
				for (var i = 0; i < (time_max + 1); i++) {
					if (duration_week == 'day') {
						if (i % 6 == 0) {
							context.moveTo(i * time_scale + chartX_indent, chartY_indent);
							context.lineTo(i * time_scale + chartX_indent, height_max * height_scale + chartY_indent);
							context.stroke();

							if (i != 0 && i != 24) {
								switch(i) {
								case 6:
									timeText = "6am";
									break;
								case 12:
									timeText = "Noon";
									break;
								case 18:
									timeText = "6pm";
									break;
								}

								context.font = "11px Arial";
								context.textAlign = "center";
								context.textBaseline = "top";
								context.fillText(timeText, i * time_scale + chartX_indent + time_text_indent, height_max * height_scale + chartY_indent + 2);
							}
						}
					} else if (duration_week == 'week') {
						if (i % 24 == 0) {
							context.moveTo(Math.round(i * time_scale) + chartX_indent, chartY_indent);
							context.lineTo(Math.round(i * time_scale) + chartX_indent, height_max * height_scale + chartY_indent);
							context.stroke();

							if (i != 24 * 7) {
								to_noon = 12;
								timeText = data[i + to_noon].day;
								context.font = "11px Arial";
								context.textAlign = "center";
								context.textBaseline = "top";
								context.fillText(timeText, i * time_scale + chartX_indent + time_text_indent, height_max * height_scale + chartY_indent + 2);
							}
						}
					} else if (duration_week == 'weekend') {
						if (i % 24 == 0) {
							context.moveTo(Math.round(i * time_scale) + chartX_indent, chartY_indent);
							context.lineTo(Math.round(i * time_scale) + chartX_indent, height_max * height_scale + chartY_indent);
							context.stroke();

							if (i != 24 * 3) {
								timeText = data[i].day;
								context.font = "11px Arial";
								context.textAlign = "left";
								context.textBaseline = "top";
								context.fillText(timeText, i * time_scale + chartX_indent + time_text_indent, height_max * height_scale + chartY_indent + 2);
							}
						}
					}
				}

				// CHART FILL

				// Top

				context.beginPath();

				context.moveTo(chartX_indent, (height_max - data[0].size_high) * height_scale + chartY_indent);

				for (var i = iterator_step; i <= time_max - iterator_step; i += iterator_step) {
					var x = i * time_scale + chartX_indent;
					var y = (height_max - data[i].size_high) * height_scale + chartY_indent;

					var xPlusOne = (i + iterator_step) * time_scale + chartX_indent;
					var yPlusOne = (height_max - data[i + iterator_step].size_high) * height_scale + chartY_indent;

					var xc = (x + xPlusOne) / 2;
					var yc = (y + yPlusOne) / 2;

					context.quadraticCurveTo(x, y, xc, yc);
				}

				context.lineTo(time_max * time_scale + chartX_indent, (height_max - data[time_max].size_high) * height_scale + chartY_indent);

				// Bottom

				context.lineTo(time_max * time_scale + chartX_indent, height_max * height_scale + chartY_indent);
				context.lineTo(chartX_indent, height_max * height_scale + chartY_indent);

				// Fill

				var grd = context.createLinearGradient(0, 0, time_max * time_scale, 0);

				grd.addColorStop(0, getFillColor(data[0].shape));
				grd.addColorStop(0 + (1 / time_max) / 2, getFillColor(data[0].shape));

				for (var i = 1; i < time_max; i++) {
					grd.addColorStop(i / time_max - (1 / time_max) / 2, getFillColor(data[i].shape));
					grd.addColorStop(i / time_max + (1 / time_max) / 2, getFillColor(data[i].shape));
				}

				grd.addColorStop(1 - (1 / time_max) / 2, getFillColor(data[time_max].shape));
				grd.addColorStop(1, getFillColor(data[time_max].shape));

				context.fillStyle = grd;

				context.fill();

				// CHART LINE

				context.beginPath();
				context.strokeStyle = "rgba(0, 0, 0, 1)";
				context.lineWidth = 2;
				context.lineJoin = 'round';
				context.lineCap = 'butt';

				// High Curve

				context.beginPath();
				context.moveTo(chartX_indent, (height_max - data[0].size_high) * height_scale + chartY_indent);

				for (var i = iterator_step; i <= time_max - iterator_step; i += iterator_step) {

					var x = i * time_scale + chartX_indent;
					var y = (height_max - data[i].size_high) * height_scale + chartY_indent;

					var xPlusOne = (i + iterator_step) * time_scale + chartX_indent;
					var yPlusOne = (height_max - data[i + iterator_step].size_high) * height_scale + chartY_indent;

					var xc = (x + xPlusOne) / 2;
					var yc = (y + yPlusOne) / 2;

					context.quadraticCurveTo(x, y, xc, yc);

				}

				context.lineTo(time_max * time_scale + chartX_indent, (height_max - data[time_max].size_high) * height_scale + chartY_indent);
				context.stroke();

				// Low Curve

				context.beginPath();
				context.moveTo(chartX_indent, (height_max - data[0].size_low) * height_scale + chartY_indent);

				for (var i = iterator_step; i <= time_max - iterator_step; i += iterator_step) {

					var x = i * time_scale + chartX_indent;
					var y = (height_max - data[i].size_low) * height_scale + chartY_indent;

					var xPlusOne = (i + iterator_step) * time_scale + chartX_indent;
					var yPlusOne = (height_max - data[i + iterator_step].size_low) * height_scale + chartY_indent;

					var xc = (x + xPlusOne) / 2;
					var yc = (y + yPlusOne) / 2;

					context.quadraticCurveTo(x, y, xc, yc);

				}
				context.strokeStyle = "rgba(81,81,81,1)";

				context.lineTo(time_max * time_scale + chartX_indent, (height_max - data[time_max].size_low) * height_scale + chartY_indent);
				context.stroke();

			});

		}
	});

};

function getFillColor(shape) {
	var theColor = "rgba(255, 255, 255, 0.45)";
	//white

	if (shape == 'p') {
		theColor = "rgba(203,36,36, 0.5)";
		//red
	} else if (shape == 'pf') {
		theColor = "rgba(223,123,123, .5)";
		//orange
	} else if (shape == 'f') {
		theColor = "rgba(185,194,153, 0.5)";
		//yellow
	} else if (shape == 'fg') {
		theColor = "rgba(115,134,52, 0.5)";
		//green
	} else if (shape == 'g') {
		theColor = "rgba(171,182,133, 0.5)";
		//"lightgreen
	}

	return theColor;

}


$(document).ready(ready);
$(document).on('page:load', ready);

