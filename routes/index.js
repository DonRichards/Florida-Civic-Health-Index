/*
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index', { title: 'Civic Engagement Statistics' });
	};

exports.privacypolicy = function(req, res) {
  res.render('permanent/privacy-policy', { title: 'Privacy Policy' });
	};

exports.termsandconditions = function(req, res) {
  res.render('permanent/terms-and-conditions', { title: 'Terms and Conditions' });
	};

exports.trends = function(req, res) {
  res.render('index', { title: '' });
	};

exports.trendsCivic = function(req, res) {
  res.render('permanent/civicengagement', { title: 'Civic Engagement' });
	};

		exports.trendsBoycotted = function(req, res) {
  res.render('permanent/boycott', { title: 'Voters Bought Boycotted Products' });
			};

		exports.trendsGroup = function(req, res) {
  res.render('permanent/group', { title: 'Group Membership' });
			};

		exports.trendsvoterTurnOut = function(req, res) {
  res.render('permanent/voterTurnOut', { title: 'Voter Turnout' });
			};

		exports.trendsvoterRegistration = function(req, res) {
  res.render('permanent/voterRegistration', { title: 'Voter Registration' });
			};

		exports.trendsAttendMeetings = function(req, res) {
  res.render('permanent/AttendMeetings', { title: 'Attended Meetings' });
			};

		exports.trendsVolunteering = function(req, res) {
  res.render('permanent/Volunteering', { title: 'Volunteering' });
			};

		exports.trendsDonated = function(req, res) {
  res.render('permanent/Donated', { title: 'Donated' });
			};

		exports.trendsNeighborhood = function(req, res) {
  res.render('permanent/Neighborhood', { title: 'Worked with Neighborhood' });
			};

exports.statetostate = function(req, res) {
  res.render('state-to-state', { title: 'Geographically Compare Civic Engagement' });
	};

exports.snapshot = function(req, res) {
  res.render('snapshot', { title: 'Florida Snapshot' });
	};

exports.reports = function(req, res) {
  res.render('permanent/reports', { title: 'Reports' });
	};

// States
	exports.AL = function(req, res) {
  res.render('states/AL', { title: 'Alabama' });
	};

	exports.AK = function(req, res) {
  res.render('states/AK', { title: 'Alaska' });
	};

	exports.AZ = function(req, res) {
  res.render('states/AZ', { title: 'Arizona' });
	};

	exports.AR = function(req, res) {
  res.render('states/AR', { title: 'Arkansas' });
	};

	exports.CA = function(req, res) {
  res.render('states/CA', { title: 'California' });
	};

	exports.CO = function(req, res) {
  res.render('states/CO', { title: 'Colorado' });
	};

	exports.CT = function(req, res) {
  res.render('states/CT', { title: 'Connecticut' });
	};

	exports.DE = function(req, res) {
  res.render('states/DE', { title: 'Delaware' });
	};

	exports.FL = function(req, res) {
  res.render('states/FL', { title: 'Florida Cities'  });
	};
			/* Cities in Florida */
			exports.cape  = function(req, res) {
  res.render('cities/cape', { title: 'Cape Coral, Fort Myers' });
			};

			exports.daytona  = function(req, res) {
  res.render('cities/daytona', { title: 'Deltona, Daytona Beach, Ormond Beach' });
			};

			exports.jacksonville  = function(req, res) {
  res.render('cities/jacksonville', { title: 'Jacksonville' });
			};

			exports.lakeland  = function(req, res) {
  res.render('cities/lakeland', { title: 'Lakeland, Winter Haven' });
			};

			exports.miami  = function(req, res) {
  res.render('cities/miami', { title: 'Miami, Fort Lauderdale, Miami Beach' });
			};

			exports.orlando  = function(req, res) {
  res.render('cities/orlando', { title: 'Orlando' });
			};

			exports.titusville  = function(req, res) {
  res.render('cities/titusville', { title: 'Palm Bay, Melbourne, Titusville' });
			};

			exports.pensacola  = function(req, res) {
  res.render('cities/pensacola', { title: 'Pensacola, Ferry Pass, Brent' });
			};

			exports.sarasota  = function(req, res) {
  res.render('cities/sarasota', { title: 'Sarasota, Bradenton, Venice' });
			};

			exports.tampa  = function(req, res) {
  res.render('cities/tampa', { title: 'Tampa, St. Petersburg, Clearwater' });
			};

	exports.GA = function(req, res) {
  res.render('states/GA', { title: 'Georgia' });
	};

	exports.HI = function(req, res) {
  res.render('states/HI', { title: 'Hawaii' });
	};

	exports.ID = function(req, res) {
  res.render('states/ID', { title: 'Idaho' });
	};

	exports.IL = function(req, res) {
  res.render('states/IL', { title: 'Illinois' });
	};

	exports.IN = function(req, res) {
  res.render('states/IN', { title: 'Indiana' });
	};

	exports.IA = function(req, res) {
  res.render('states/IA', { title: 'Iowa' });
	};

	exports.KS = function(req, res) {
  res.render('states/KS', { title: 'Kansas' });
	};

	exports.KY = function(req, res) {
  res.render('states/KY', { title: 'Kentucky' });
	};

	exports.LA = function(req, res) {
  res.render('states/LA', { title: 'Louisiana' });
	};

	exports.ME = function(req, res) {
  res.render('states/ME', { title: 'Maine' });
	};

	exports.MD = function(req, res) {
  res.render('states/MD', { title: 'Maryland' });
	};

	exports.MA = function(req, res) {
  res.render('states/MA', { title: 'Massachusetts' });
	};

	exports.MI = function(req, res) {
  res.render('states/MI', { title: 'Michigan' });
	};

	exports.MN = function(req, res) {
  res.render('states/MN', { title: 'Minnesota' });
	};

	exports.MS = function(req, res) {
  res.render('states/MS', { title: 'Mississippi' });
	};

	exports.MO = function(req, res) {
  res.render('states/MO', { title: 'Missouri' });
	};

	exports.MT = function(req, res) {
  res.render('states/MT', { title: 'Montana' });
	};

	exports.NE = function(req, res) {
  res.render('states/NE', { title: 'Nebraska' });
	};

	exports.NV = function(req, res) {
  res.render('states/NV', { title: 'Nevada' });
	};

	exports.NH = function(req, res) {
  res.render('states/NH', { title: 'New Hampshire' });
	};

	exports.NJ = function(req, res) {
  res.render('states/NJ', { title: 'New Jersey' });
	};

	exports.NM = function(req, res) {
  res.render('states/NM', { title: 'New Mexico' });
	};

	exports.NY = function(req, res) {
  res.render('states/NY', { title: 'New York' });
	};

	exports.NC = function(req, res) {
  res.render('states/NC', { title: 'North Carolina' });
	};

	exports.ND = function(req, res) {
  res.render('states/ND', { title: 'North Dakota' });
	};

	exports.OH = function(req, res) {
  res.render('states/OH', { title: 'Ohio' });
	};

	exports.OK = function(req, res) {
  res.render('states/OK', { title: 'Oklahoma' });
	};

	exports.OR = function(req, res) {
  res.render('states/OR', { title: 'Oregon' });
	};

	exports.PA = function(req, res) {
  res.render('states/PA', { title: 'Pennsylvania' });
	};

	exports.RI = function(req, res) {
  res.render('states/RI', { title: 'Rhode Island' });
	};

	exports.SC = function(req, res) {
  res.render('states/SC', { title: 'South Carolina' });
	};

	exports.SD = function(req, res) {
  res.render('states/SD', { title: 'South Dakota' });
	};

	exports.TN = function(req, res) {
  res.render('states/TN', { title: 'Tennessee' });
	};

	exports.TX = function(req, res) {
  res.render('states/TX', { title: 'Texas' });
	};

	exports.UT = function(req, res) {
  res.render('states/UT', { title: 'Utah' });
	};

	exports.VT = function(req, res) {
  res.render('states/VT', { title: 'Vermont' });
	};

	exports.VA = function(req, res) {
  res.render('states/VA', { title: 'Virginia' });
	};

	exports.WA = function(req, res) {
  res.render('states/WA', { title: 'Washington' });
	};

	exports.WV = function(req, res) {
  res.render('states/WV', { title: 'West Virginia' });
	};

	exports.WI = function(req, res) {
  res.render('states/WI', { title: 'Wisconsin' });
	};

	exports.WY = function(req, res) {
  res.render('states/WY', { title: 'Wyoming' });
	};

	exports.DC = function(req, res) {
  res.render('states/DC', { title: 'Washington DC' });
	};
