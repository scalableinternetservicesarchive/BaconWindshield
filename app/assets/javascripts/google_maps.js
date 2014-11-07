var MY_MAPTYPE_ID = 'custom_style';

function initialize() {
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

	var locations = [["Del Norte", 41.869383569541917, -124.21444724840021, 652, "Smith River Kellog Road"], ["Del Norte", 41.786844846578227, -124.25521494045159, 653, "Point St George"], ["Del Norte", 41.76951799906643, -124.23922049300231, 654, "Garths Reef"], ["Del Norte", 41.740161410941631, -124.1816271141612, 655, "Whaler Island"], ["Del Norte", 41.737888961614509, -124.168107730491, 656, "South Beach"], ["Del Norte", 41.708637529953478, -124.1455957740673, 657, "Enderts Beach"], ["Del Norte", 41.60409233409618, -124.10230189239419, 658, "Wilson Creek"], ["Del Norte", 41.54703458341988, -124.0857421824345, 659, "Klamath Rivermouth"], ["Humboldt", 41.383903561731039, -124.0727754950131, 660, "Gold Bluffs Beach"], ["Humboldt", 41.271494812805869, -124.0968267672407, 661, "Freshwater Lagoon"], ["Humboldt", 41.13248951472039, -124.1623052534996, 662, "Patricks Point"], ["Humboldt", 41.059905550287652, -124.1494131650617, 663, "Trinidad State Beach"], ["Humboldt", 41.047927367619323, -124.1263838291088, 664, "Camel Rock"], ["Humboldt", 41.040417847257139, -124.1212780701598, 665, "Moonstone"], ["Humboldt", 41.029002951747778, -124.1170768809114, 666, "Little River State Beach"], ["Humboldt", 40.965433361099542, -124.1282835019915, 667, "Mad River Beach"], ["Humboldt", 40.799917542801651, -124.2085307445489, 668, "Samoa Peninsula"], ["Humboldt", 40.773131567667328, -124.225849337131, 669, "Bunkers"], ["Humboldt", 40.769135830200383, -124.23712250918381, 670, "North Jetty"], ["Humboldt", 40.769063606061451, -124.24145480139541, 671, "Harbor Entrance"], ["Humboldt", 40.764741274116084, -124.2457464202994, 672, "South Jetty"], ["Humboldt", 40.600934539028657, -124.337076848425, 673, "Centerville Beach"], ["Humboldt", 40.353331698111582, -124.36303982254771, 674, "Cape Mendocino"], ["Humboldt", 40.024699034097907, -124.07575471643121, 675, "Deadmans"], ["Humboldt", 40.02116732237296, -124.0720505571327, 676, "Third Reef"], ["Humboldt", 40.021367730250077, -124.06628712314129, 677, "No Pass"], ["Mendocino", 39.659122945040963, -123.78574189907459, 678, "DeHaven Creek"], ["Mendocino", 39.610105444727303, -123.78465512153549, 679, "Chadbourne Gulch Blues Beach"], ["Mendocino", 39.563482875368798, -123.77066821591499, 680, "Seaside Creek Beach"], ["Mendocino", 39.49916844341007, -123.79137898085349, 681, "Ward Avenue"], ["Mendocino", 39.472382421920109, -123.8064186546377, 682, "Virgin Creek"], ["Mendocino", 39.361220244458742, -123.8175781480662, 683, "Caspar Creek"], ["Mendocino", 39.301581560466019, -123.7979824378202, 684, "Big Rivermouth"], ["Mendocino", 39.191108787550547, -123.7629601336068, 685, "Navarro Rivermouth"], ["Mendocino", 39.004642924502292, -123.6967097723784, 686, "Manchester State Beach Alder Creek"], ["Mendocino", 38.914514744926429, -123.7136648463088, 687, "Point Arena"], ["Mendocino", 38.866308645376058, -123.6557633035471, 688, "Schooner Gulch Moat Creek"], ["Mendocino", 38.768521836813278, -123.53389713441371, 689, "Gualala Rivermouth"], ["Sonoma", 38.683140380050851, -123.4343167105767, 105, "Black Point Beach"], ["Sonoma", 38.611796005797601, -123.3665369591898, 690, "Secrets"], ["Sonoma", 38.532494143658752, -123.27462223517369, 691, "Timber Cove"], ["Sonoma", 38.511325091448839, -123.2471903525999, 692, "The Fort"], ["Sonoma", 38.510803349044131, -123.2445259424552, 693, "Mystos"], ["Sonoma", 38.450860583363102, -123.1320928893431, 106, "Russian Rivermouth"], ["Sonoma", 38.439593003199683, -123.1264469919029, 694, "Goat Rock"], ["Sonoma", 38.351613979664528, -123.0701937939567, 107, "Salmon Creek"], ["Sonoma", 38.310969847856839, -123.0428294861607, 108, "Doran Beach"], ["Marin", 38.251736717249742, -122.97220607457641, 109, "Dillon Beach"], ["Marin", 38.04876345362046, -122.98915492222579, 695, "Point Reyes Beach"], ["Marin", 38.029200776639293, -122.94001528051361, 696, "Drakes Estero"], ["Marin", 37.901189197748032, -122.68965344322839, 592, "The Patch"], ["Marin", 37.903464512428833, -122.6815204402253, 110, "Bolinas"], ["Marin", 37.893586518215649, -122.63914278799869, 111, "Stinson Beach"], ["Marin", 37.831304879996942, -122.5397845322041, 112, "Fort Cronkhite"], ["San Francisco", 37.811280863494602, -122.4762562938768, 113, "Fort Point"], ["San Francisco", 37.78773976851884, -122.4928411936139, 649, "Eagles Point"], ["San Francisco", 37.788031359486503, -122.49442903431751, 648, "Deadmans"], ["San Francisco", 37.777486331151223, -122.51582571053331, 697, "Kellys Cove"], ["San Francisco", 37.768256511796238, -122.51347658831379, 114, "North Ocean Beach"], ["San Francisco", 37.754622592301743, -122.5111052256233, 117, "South Ocean Beach"], ["San Mateo", 37.632472217207813, -122.4944959843629, 619, "Sharp Park"], ["San Mateo", 37.609975328463896, -122.4986424829372, 119, "Rockaway Beach"], ["San Mateo", 37.599078592064181, -122.5030853194715, 120, "Linda Mar"], ["San Mateo", 37.594928606801332, -122.5203291514914, 698, "Pedro Point"], ["San Mateo", 37.551609260139692, -122.51463970856121, 121, "Montara"], ["San Mateo", 37.491656365488851, -122.5022524228539, 122, "Mavericks"], ["San Mateo", 37.500694272357279, -122.4716653656277, 123, "Princeton Jetty"], ["San Mateo", 37.480733872041142, -122.4530953542053, 124, "Half Moon Bay Beach"], ["San Mateo", 37.322271167217153, -122.40691471407089, 699, "San Gregorio State Beach"], ["San Mateo", 37.299344926694353, -122.41011858846799, 126, "Pomponio State Beach"], ["San Mateo", 37.271525294531543, -122.4114038882407, 127, "Pescadero State Beach"], ["San Mateo", 37.258566573071221, -122.4142561181521, 700, "Pescadero Cove"], ["San Mateo", 37.16302509342735, -122.36313080017339, 701, "Gazos Creek"], ["San Mateo", 37.151969802575991, -122.36170330391499, 622, "Franklin Point"], ["San Mateo", 37.117632563782671, -122.3144829358251, 118, "Ano Nuevo"], ["Santa Cruz", 37.104375785824722, -122.28963099839569, 593, "County Line"], ["Santa Cruz", 37.096622267321628, -122.2808743245171, 129, "Waddell Creek"], ["Santa Cruz", 37.088357131800763, -122.27658575731741, 600, "Waddell Reefs"], ["Santa Cruz", 37.041670594978036, -122.2336727663274, 128, "Scotts Creek"], ["Santa Cruz", 37.028606411993842, -122.2255121067336, 621, "Rims Reef"], ["Santa Cruz", 37.021350150842792, -122.216233598759, 133, "Davenport Landing"], ["Santa Cruz", 36.980805449453257, -122.1553115289464, 132, "Laguna Creek"], ["Santa Cruz", 36.9631290582128, -122.12687891195959, 131, "Four Mile"], ["Santa Cruz", 36.961113618131151, -122.1185289127844, 130, "Three Mile"], ["Santa Cruz", 36.948803992794531, -122.0610985303145, 6, "Natural Bridges"], ["Santa Cruz", 36.948887053230102, -122.05100139931081, 146, "Stockton Avenue"], ["Santa Cruz", 36.949018942693577, -122.04764407412939, 145, "Swift Street"], ["Santa Cruz", 36.949715317410572, -122.04545520950489, 10, "Getchell"], ["Santa Cruz", 36.951489416605668, -122.04201384838009, 144, "Mitchells Cove"], ["Santa Cruz", 36.951092291956222, -122.02596109602921, 2, "Steamer Lane"], ["Santa Cruz", 36.958080811438322, -122.024563155438, 3, "Cowells"], ["Santa Cruz", 36.962653438309943, -122.01255524480131, 143, "The Rivermouth"], ["Santa Cruz", 36.96046244886972, -122.0016539066977, 142, "Santa Cruz Harbor"], ["Santa Cruz", 36.961680863576589, -122.00096385538831, 141, "Murph Bar"], ["Santa Cruz", 36.958677105425167, -121.9933217873383, 9, "Blacks"], ["Santa Cruz", 36.959561356399419, -121.9900357372874, 140, "Sunny Cove"], ["Santa Cruz", 36.959611886691043, -121.9888602809464, 8, "Santa Marias"], ["Santa Cruz", 36.956752467719276, -121.981436679289, 7, "26th Avenue"], ["Santa Cruz", 36.953639733773912, -121.9771177941946, 138, "Little Windansea"], ["Santa Cruz", 36.953755036918857, -121.97476703156769, 137, "Rockview"], ["Santa Cruz", 36.953224926158377, -121.9728250343757, 5, "Sewer Peak"], ["Santa Cruz", 36.954087622045307, -121.9716900628907, 1, "Pleasure Point"], ["Santa Cruz", 36.957393750256152, -121.9690033240836, 4, "38th Avenue"], ["Santa Cruz", 36.959111120639548, -121.96521161820959, 147, "The Hook"], ["Santa Cruz", 36.960773208239367, -121.9625490088431, 148, "Sharks Cove"], ["Santa Cruz", 36.971234705732812, -121.9491667605599, 149, "Capitola Jetties"], ["Santa Cruz", 36.931200193212533, -121.86414993502009, 150, "Manresa"], ["Santa Cruz", 36.895671033997743, -121.8404648962798, 136, "Sunset Beach"], ["Monterey", 36.835723114747182, -121.8034703105583, 702, "Zmudowski State Beach"], ["Monterey", 36.809992064524373, -121.79079836167659, 161, "Moss Landing State Beach"], ["Monterey", 36.776167657177453, -121.7983225119755, 703, "Salinas River State Beach"], ["Monterey", 36.689972328404977, -121.8141846065641, 160, "Marina State Beach"], ["Monterey", 36.607335986742832, -121.86904016115849, 159, "Del Monte Beach"], ["Monterey", 36.626053898528653, -121.9148594651332, 158, "Lovers Point"], ["Monterey", 36.620050059537668, -121.943455356667, 156, "Asilomar State Beach"], ["Monterey", 36.548561553112371, -121.9298336429776, 154, "Carmel Beach"], ["Monterey", 36.279279291978213, -121.8591275249395, 153, "Andrew Molera"], ["Monterey", 35.923526450984802, -121.4699661759945, 152, "Sand Dollar"], ["Monterey", 35.909633910950603, -121.4680190664497, 151, "Willow Creek"], ["San Luis Obispo", 35.765674137535832, -121.32606704534, 167, "San Carpoforo Creek"], ["San Luis Obispo", 35.672300697395407, -121.28583201981451, 704, "Lighthouse"], ["San Luis Obispo", 35.650678096392923, -121.2196910142155, 705, "Arroyo Laguna"], ["San Luis Obispo", 35.615571499825244, -121.1507812975773, 642, "Pico Creek"], ["San Luis Obispo", 35.597464545767053, -121.1300263321841, 166, "San Simeon Creek"], ["San Luis Obispo", 35.581517239681453, -121.1207944426381, 706, "Exotics"], ["San Luis Obispo", 35.572934450004198, -121.1137941613911, 707, "Leffingwell Landing"], ["San Luis Obispo", 35.567576848111322, -121.111257786495, 165, "Moonstone"], ["San Luis Obispo", 35.447570836501349, -120.90655052180379, 164, "Cayucos Pier"], ["San Luis Obispo", 35.425430657599541, -120.8823626922527, 599, "Studio Drive"], ["San Luis Obispo", 35.373385291420519, -120.86711423755411, 163, "Morro Rock"], ["San Luis Obispo", 35.289212478361087, -120.8838719410017, 708, "Hazard Canyon"], ["San Luis Obispo", 35.275083536146063, -120.8897331242529, 709, "Spooners Cove"], ["San Luis Obispo", 35.174637966272059, -120.7157583455736, 710, "Saint Annes"], ["San Luis Obispo", 35.138186284704403, -120.6449984438748, 162, "Pismo Beach Pier"], ["Santa Barbara", 34.971624742799548, -120.6513811469147, 711, "Santa Maria Rivermouth"], ["Santa Barbara", 34.682913990211837, -120.6064779656859, 712, "Surf Beach"], ["Santa Barbara", 34.510184254989632, -120.50290531720481, 185, "Jalama"], ["Santa Barbara", 34.463609035485, -120.10097747039001, 713, "Tajiguas"], ["Santa Barbara", 34.460727859027109, -120.07331365850411, 620, "Refugio"], ["Santa Barbara", 34.461211965906138, -120.0549701700031, 714, "Beavers"], ["Santa Barbara", 34.456573520251069, -120.02120703731789, 183, "El Capitan"], ["Santa Barbara", 34.409079140926913, -119.8821432693011, 182, "Sands"], ["Santa Barbara", 34.4060390017938, -119.8777636727983, 181, "Devereux"], ["Santa Barbara", 34.408924676872353, -119.8587366027393, 715, "Pescaderos"], ["Santa Barbara", 34.404504693802032, -119.84573888459521, 180, "Depressions"], ["Santa Barbara", 34.40487888923785, -119.8425963704844, 179, "Campus Point"], ["Santa Barbara", 34.406860199420578, -119.841586187545, 178, "Poles"], ["Santa Barbara", 34.402321628741241, -119.74410228721349, 641, "The Pit"], ["Santa Barbara", 34.397968880785839, -119.7020898699724, 177, "Leadbetter"], ["Santa Barbara", 34.406077738542002, -119.6881734281268, 176, "Sandspit"], ["Santa Barbara", 34.415425257457379, -119.6372312179363, 174, "Hammonds"], ["Santa Barbara", 34.417933492445883, -119.6319848243787, 173, "Miramar"], ["Santa Barbara", 34.408484506574162, -119.55260262820261, 171, "Santa Claus Lane"], ["Santa Barbara", 34.393125120162942, -119.5255324487533, 169, "Carpinteria Beach"], ["Santa Barbara", 34.387182436140222, -119.5142470711864, 168, "Tar Pits"], ["Santa Barbara", 34.37256542974805, -119.4779929046033, 198, "Rincon"], ["Ventura", 34.373105769106772, -119.4599428547951, 197, "La Conchita"], ["Ventura", 34.355125178290763, -119.4424173124075, 196, "Little Rincon"], ["Ventura", 34.337084405699727, -119.4117541976936, 195, "Hobsons"], ["Ventura", 34.328730025973243, -119.39949463872949, 194, "Faria"], ["Ventura", 34.317764934488778, -119.3898560875502, 640, "Pitas"], ["Ventura", 34.319176709938617, -119.3773753582565, 193, "Mondos"], ["Ventura", 34.309297751638887, -119.3601154315883, 192, "Solimar"], ["Ventura", 34.292337487494912, -119.3398784210307, 191, "Emma Wood"], ["Ventura", 34.290704318554482, -119.3391521452549, 639, "Ventura Overhead"], ["Ventura", 34.273069869304877, -119.3001508388765, 190, "C Street"], ["Ventura", 34.267356477725677, -119.2797171405323, 716, "San Buenaventura State Beach"], ["Ventura", 34.244061088369179, -119.2691704464693, 189, "South Jetty"], ["Ventura", 34.229515776878749, -119.2663057962956, 188, "Santa Clara Rivermouth"], ["Ventura", 34.212368850400047, -119.257734704306, 187, "McGrath State Beach"], ["Ventura", 34.155573518159223, -119.2242236779785, 717, "Silver Strand"], ["Ventura", 34.141570447971461, -119.1966011225911, 718, "Port Hueneme Beach Park"], ["Ventura", 34.135666385258922, -119.1852079616088, 719, "Ormand Beach"], ["Ventura", 34.095154777987787, -119.1072715825548, 186, "Point Mugu"], ["Los Angeles", 34.052060672477893, -118.96402550031939, 207, "County Line"], ["Los Angeles", 34.04349045348215, -118.9343235963207, 638, "Leo Carrillo"], ["Los Angeles", 34.042851105515069, -118.9168999329918, 720, "Zero"], ["Los Angeles", 34.034331744103383, -118.8611824726196, 721, "Trancas Point"], ["Los Angeles", 34.019025974554282, -118.8303773801784, 206, "Zuma Beach"], ["Los Angeles", 34.001113360439248, -118.8083780106363, 637, "Point Dume"], ["Los Angeles", 34.025944333658138, -118.7555735304975, 636, "Latigo Canyon"], ["Los Angeles", 34.033021829795622, -118.6778152767141, 205, "Malibu"], ["Los Angeles", 34.036286783271777, -118.6087015348736, 722, "Big Rock"], ["Los Angeles", 34.037219387423988, -118.58321372756581, 388, "Topanga"], ["Los Angeles", 34.039364129388517, -118.5756079633999, 635, "Chart House"], ["Los Angeles", 34.037094714688358, -118.5551262771518, 387, "Sunset"], ["Los Angeles", 34.038467111166078, -118.5464991955614, 723, "Santa Monica Jetties"], ["Los Angeles", 34.007649710401743, -118.49865223867501, 724, "Santa Monica Municipal Pier"], ["Los Angeles", 34.004071587141219, -118.4940809896584, 725, "Bay Street"], ["Los Angeles", 33.993205543051353, -118.4834347611491, 726, "Rose Avenue"], ["Los Angeles", 33.983161270783711, -118.4742634651619, 204, "Venice"], ["Los Angeles", 33.96038710258032, -118.4562189432081, 727, "Toes Overs"], ["Los Angeles", 33.959915627216759, -118.455056395013, 728, "Ballona Creek"], ["Los Angeles", 33.940100797751739, -118.4434464988428, 729, "D and W"], ["Los Angeles", 33.916274762491447, -118.43049885734889, 730, "New Jetty"], ["Los Angeles", 33.899742704342621, -118.4220839567824, 402, "El Porto"], ["Los Angeles", 33.883866437432573, -118.4138307775285, 203, "Manhattan Beach"], ["Los Angeles", 33.861606529115143, -118.4034127774129, 202, "Hermosa"], ["Los Angeles", 33.849178914537568, -118.4019851018966, 201, "Redondo Breakwater"], ["Los Angeles", 33.835486261162451, -118.3910878485312, 731, "Sapphire Street"], ["Los Angeles", 33.832008736896341, -118.3919152431706, 732, "Topaz Street"], ["Los Angeles", 33.811112395435423, -118.39290949975, 200, "Torrance Beach"], ["Los Angeles", 33.803073124722196, -118.3970201453732, 733, "Rat Shit"], ["Los Angeles", 33.800977730032443, -118.4034431936948, 396, "Haggertys"], ["Los Angeles", 33.7928292845627, -118.40782214075951, 633, "Palos Verdes Cove"], ["Los Angeles", 33.78405444195085, -118.4220548564988, 734, "Indicator"], ["Los Angeles", 33.772001578067403, -118.42741088230279, 199, "Lunada Bay"], ["Los Angeles", 33.737696492142867, -118.3768878104818, 735, "Abalone Cove Beach"], ["Los Angeles", 33.719741000356969, -118.3278500000078, 736, "Royal Palms State Beach"], ["Los Angeles", 33.708011828972992, -118.2839499848816, 632, "Cabrillo Beach"], ["Los Angeles", 33.746916080101968, -118.12248409036179, 737, "64th Place"], ["Los Angeles", 33.744300073418728, -118.11815529853089, 738, "72nd Place"], ["Orange County", 33.739561600188857, -118.1157733298928, 739, "San Gabriel Rivermouth"], ["Orange County", 33.738954950764047, -118.1106520764267, 740, "7th Street"], ["Orange County", 33.737719028593382, -118.1078747535007, 222, "Seal Beach Pier"], ["Orange County", 33.736828338244777, -118.1033218199791, 601, "13th Street"], ["Orange County", 33.736022551349038, -118.1015971818255, 741, "Dolphin Avenue"], ["Orange County", 33.728485804642823, -118.0908085660303, 602, "Surfside Jetty"], ["Orange County", 33.72315771853458, -118.0802261736895, 603, "Anderson St"], ["Orange County", 33.685392159304449, -118.0403658241339, 604, "Bolsa Chica"], ["Orange County", 33.666156205815213, -118.01901000164, 220, "Goldenwest"], ["Orange County", 33.663945281265853, -118.0140490339561, 605, "17th Street"], ["Orange County", 33.655213981592752, -118.0050433408805, 221, "Huntington Pier"], ["Orange County", 33.648516554087408, -117.9932214212635, 643, "Huntington Beach"], ["Orange County", 33.628066527641927, -117.9591291105893, 606, "Santa Ana River Jetties"], ["Orange County", 33.62290558073348, -117.9487673760861, 219, "56th Street"], ["Orange County", 33.617227592487389, -117.93881142211259, 607, "40th Street"], ["Orange County", 33.615319034584573, -117.9369576533262, 608, "36th Street"], ["Orange County", 33.610958311825421, -117.933626701894, 651, "Blackies"], ["Orange County", 33.606646920042472, -117.9307384511544, 609, "Newport Pier"], ["Orange County", 33.604626708882137, -117.9253477173645, 218, "Newport Point"], ["Orange County", 33.593389938669887, -117.88234297040751, 217, "The Wedge"], ["Orange County", 33.592072633019903, -117.8770239986105, 216, "Corona Del Mar"], ["Orange County", 33.55930284211604, -117.82170837923189, 742, "Morro Beach"], ["Orange County", 33.542021998614132, -117.7915999692588, 610, "Rockpile"], ["Orange County", 33.535266300181462, -117.77989898682, 611, "Thalia"], ["Orange County", 33.532323337961067, -117.7779907890295, 215, "Brooks Street"], ["Orange County", 33.528023341803227, -117.77251028236979, 743, "Agate"], ["Orange County", 33.474665045147823, -117.7233023880989, 214, "Salt Creek"], ["Orange County", 33.460330858205381, -117.6886485710755, 213, "Doheny"], ["Orange County", 33.452059703795612, -117.6644023745431, 744, "Poche"], ["Orange County", 33.42713486226824, -117.6289762885628, 745, "204s"], ["Orange County", 33.419731942886493, -117.6212676741133, 212, "San Clemente Pier"], ["Orange County", 33.415965582403473, -117.618142936175, 211, "T Street"], ["Orange County", 33.41064330626746, -117.6130013911603, 391, "Lasuen"], ["Orange County", 33.406983705725018, -117.6096503058218, 644, "Riviera"], ["Orange County", 33.40480836264544, -117.6073102678367, 645, "Calafia"], ["Orange County", 33.402979968143072, -117.6061996160215, 392, "State Park"], ["Orange County", 33.395975349097611, -117.6008792819534, 210, "North Gate"], ["Orange County", 33.390612992576763, -117.5987721491924, 209, "Cottons Point"], ["Orange County", 33.384476301377603, -117.59445112402619, 623, "Upper Trestles"], ["Orange County", 33.382116955073258, -117.5888397460814, 208, "Lower Trestles"], ["Orange County", 33.380114554751792, -117.5790343398904, 625, "Church"], ["Orange County", 33.373605466203927, -117.56912919937839, 239, "San Onofre"], ["Orange County", 33.361706508624472, -117.54497755140871, 614, "Trails"], ["San Diego", 33.204228527589997, -117.3959770213895, 238, "Oceanside Harbor"], ["San Diego", 33.193387046160893, -117.3871878580306, 594, "Oceanside Pier"], ["San Diego", 33.185604979845287, -117.37826775153999, 628, "Wisconsin"], ["San Diego", 33.172714179709601, -117.3666572301789, 629, "Cassidy"], ["San Diego", 33.147320395176962, -117.3467966641187, 237, "Tamarack"], ["San Diego", 33.144007137983102, -117.34458492328601, 596, "Warm Water Jetty"], ["San Diego", 33.128762503805198, -117.3361948822189, 597, "Terra Mar"], ["San Diego", 33.100777258565493, -117.31998606173561, 630, "Campground"], ["San Diego", 33.087034665281351, -117.314238172042, 236, "Ponto"], ["San Diego", 33.075484467395668, -117.310721142163, 400, "Grandview"], ["San Diego", 33.063570212034683, -117.30555007900939, 235, "Beacons"], ["San Diego", 33.055793796931212, -117.3021096501646, 746, "Stone Steps"], ["San Diego", 33.047723148825199, -117.29924606780349, 747, "Moonlight Beach"], ["San Diego", 33.045442274103927, -117.2982038691907, 401, "D Street"], ["San Diego", 33.034422931013466, -117.2957502535422, 234, "Swamis"], ["San Diego", 33.025606777146429, -117.28801695845659, 233, "Pipes"], ["San Diego", 33.01541991675105, -117.283273919829, 232, "Cardiff Reef"], ["San Diego", 33.010943016398627, -117.28066578827971, 748, "Sandbox"], ["San Diego", 33.006033281377711, -117.2793974249951, 749, "Georges"], ["San Diego", 33.000337029888158, -117.27964200741241, 231, "Seaside Reef"], ["San Diego", 32.991099047381603, -117.2755301434951, 750, "Pillbox"], ["San Diego", 32.974798048741476, -117.2721052291127, 751, "Del Mar Rivermouth"], ["San Diego", 32.966781159346787, -117.2699920318156, 752, "Del Mar Beach"], ["San Diego", 32.958662325867159, -117.2691753574579, 230, "15th Street - Del Mar"], ["San Diego", 32.948736697496393, -117.2654975329353, 753, "South Del Mar"], ["San Diego", 32.93310208353217, -117.2617407404518, 754, "Torrey Pines State Beach"], ["San Diego", 32.888727761985209, -117.25747793279859, 229, "Blacks Beach"], ["San Diego", 32.866598509332697, -117.2562736520856, 228, "Scripps Pier"], ["San Diego", 32.851467518056133, -117.2730818429806, 755, "La Jolla Cove"], ["San Diego", 32.838792921912457, -117.2825528890551, 756, "Horseshoe"], ["San Diego", 32.834006692827117, -117.2824956602703, 757, "Little Point"], ["San Diego", 32.83218522519806, -117.2827774679985, 758, "Simmons Reef"], ["San Diego", 32.829665321372083, -117.28204353957889, 227, "Windansea"], ["San Diego", 32.823905600387683, -117.2810405686735, 759, "Big Rock"], ["San Diego", 32.813424049908512, -117.2738442945035, 398, "Bird Rock"], ["San Diego", 32.811747036661792, -117.27045519086261, 760, "Rockpile"], ["San Diego", 32.806945917515272, -117.2659989723968, 399, "Tourmaline"], ["San Diego", 32.797029505435518, -117.25960295034579, 226, "Pacific Beach"], ["San Diego", 32.777929007486037, -117.2543264821912, 397, "Mission Beach"], ["San Diego", 32.759603143300758, -117.2552831042027, 761, "Dog Beach"], ["San Diego", 32.755322204792151, -117.2556990676614, 762, "Ocean Beach Jetty"], ["San Diego", 32.749151851964093, -117.25534188491091, 225, "Ocean Beach Pier"], ["San Diego", 32.718998904718177, -117.2571632713268, 224, "Sunset Cliffs"], ["San Diego", 32.682462400293787, -117.1855218469544, 598, "Coronado"], ["San Diego", 32.577928810608, -117.1346007967761, 223, "Imperial Beach"]];

	var marker, i;
	var markers = [];
	var markers2 = [];


	var targetImage = new google.maps.MarkerImage('http://icons.iconarchive.com/icons/pixelkit/gentle-edges/32/Location-Map-icon.png', new google.maps.Size(32, 32), new google.maps.Point(0, 0), new google.maps.Point(16, 16));
	var waveImage1 = new google.maps.MarkerImage('http://cdn.flaticon.com/png/64/48043.png', new google.maps.Size(64, 64), new google.maps.Point(0, 0), new google.maps.Point(32, 32));
	var waveImage2 = new google.maps.MarkerImage('http://cdn.flaticon.com/png/16/48043.png', new google.maps.Size(16, 16), new google.maps.Point(0, 0), new google.maps.Point(8, 8));


	//Check zoomlevel of browser
	google.maps.event.addListener(map, 'zoom_changed', function() {
		var zoomLevel = map.getZoom();
	
		if(zoomLevel < 14){
			markers2[0].setVisible(false);
		}else{
			markers2[0].setVisible(true);
		}
	
		for ( i = 0; i < locations.length; i++) {
			if (zoomLevel < 14) {
				markers[i].setIcon(markers[i].waveImage2);
			} else {
				markers[i].setIcon(markers[i].waveImage1);
				

			}
		}
	});

	for ( i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position : new google.maps.LatLng(locations[i][1], locations[i][2]),
			map : map,
			title : locations[i][4],
			icon : waveImage1
		});

		marker.waveImage1 = waveImage1;
		marker.waveImage2 = waveImage2;
		markers.push(marker);

		var locationURL = function(j) {
			return function() {
				window.location.href = "/locations/" + locations[j][3];
			};
		};
		google.maps.event.addListener(marker, 'click', locationURL(i));
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