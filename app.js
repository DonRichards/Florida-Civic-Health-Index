'use strict';
/**
 * Designed: Don Richards
 */
let compression = require('compression');
let express     = require('express');
let routes      = require('./routes');
let user        = require('./routes/user');
let http        = require('http');
let async       = require('async');
let helmet      = require('helmet');
let path        = require('path');
let logger      = require('morgan');
let bodyParser  = require('body-parser');
let serveStatic = require('serve-static');
let app         = express();

http.globalAgent.maxSockets = 10000;
let oneDay = 86400000;

/**
 *  Security NOT INCLUDED ON GITHUB REPOSITORY
 */

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

function parallel(middlewares) {
  return function(req, res, next) {
    async.each(middlewares, function(mw, cb) {
      mw(req, res, cb);
    }, next);
  };
}

app.use(parallel([
  compression(),
  logger('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  express.static('public'),
  helmet(),
]));

app.enable('verbose errors');

if (app.settings.env === 'production') {
  app.disable('verbose errors');
}

/**
 * ROUTES
 */
app.get('/', routes.index);
app.get('/terms-and-conditions', routes.termsandconditions);
app.get('/privacy-policy', routes.privacypolicy);
app.get('/Trends', routes.trends);
app.get('/Trends/Civic_Engagement', routes.trendsCivic);
app.get('/Trends/Boycotted', routes.trendsBoycotted);
app.get('/Trends/Group', routes.trendsGroup);
app.get('/Trends/VoterTurnout', routes.trendsvoterTurnOut);
app.get('/Trends/VoterRegistration', routes.trendsvoterRegistration);
app.get('/Trends/AttendMeetings', routes.trendsAttendMeetings);
app.get('/Trends/Volunteering', routes.trendsVolunteering);
app.get('/Trends/Donated', routes.trendsDonated);
app.get('/Trends/Neighborhood', routes.trendsNeighborhood);
app.get('/CompareFlorida', routes.statetostate);
app.get('/Snapshot', routes.snapshot);
app.get('/Reports', routes.reports);
app.get('/Alabama', routes.AL);
app.get('/Alaska', routes.AK);
app.get('/Arizona', routes.AZ);
app.get('/Arkansas', routes.AR);
app.get('/California', routes.CA);
app.get('/Colorado', routes.CO);
app.get('/Connecticut', routes.CT);
app.get('/Delaware', routes.DE);
app.get('/Florida', routes.FL);
app.get('/Cape', routes.cape);
app.get('/Daytona', routes.daytona);
app.get('/Jacksonville', routes.jacksonville);
app.get('/Lakeland', routes.lakeland);
app.get('/Miami', routes.miami);
app.get('/Orlando', routes.orlando);
app.get('/Titusville', routes.titusville);
app.get('/Pensacola', routes.pensacola);
app.get('/Sarasota', routes.sarasota);
app.get('/Tampa', routes.tampa);
app.get('/Georgia', routes.GA);
app.get('/Hawaii', routes.HI);
app.get('/Idaho', routes.ID);
app.get('/Illinois', routes.IL);
app.get('/Indiana', routes.IN);
app.get('/Iowa', routes.IA);
app.get('/Kansas', routes.KS);
app.get('/Kentucky', routes.KY);
app.get('/Louisiana', routes.LA);
app.get('/Maine', routes.ME);
app.get('/Maryland', routes.MD);
app.get('/Massachusetts', routes.MA);
app.get('/Michigan', routes.MI);
app.get('/Minnesota', routes.MN);
app.get('/Mississippi', routes.MS);
app.get('/Missouri', routes.MO);
app.get('/Montana', routes.MT);
app.get('/Nebraska', routes.NE);
app.get('/Nevada', routes.NV);
app.get('/New%20Hampshire', routes.NH);
app.get('/New%20Jersey', routes.NJ);
app.get('/New%20Mexico', routes.NM);
app.get('/New%20York', routes.NY);
app.get('/North%20Carolina', routes.NC);
app.get('/North%20Dakota', routes.ND);
app.get('/Ohio', routes.OH);
app.get('/Oklahoma', routes.OK);
app.get('/Oregon', routes.OR);
app.get('/Pennsylvania', routes.PA);
app.get('/Rhode%20Island', routes.RI);
app.get('/South%20Carolina', routes.SC);
app.get('/South%20Dakota', routes.SD);
app.get('/Tennessee', routes.TN);
app.get('/Texas', routes.TX);
app.get('/Utah', routes.UT);
app.get('/Vermont', routes.VT);
app.get('/Virginia', routes.VA);
app.get('/Washington', routes.WA);
app.get('/West%20Virginia', routes.WV);
app.get('/Wisconsin', routes.WI);
app.get('/Wyoming', routes.WY);
app.get('/DC', routes.DC);

/**
 * 404 & 500 Error pages
 */
app.get('/404', function(req, res, next) {
  next();
});

app.get('/403', function(req, res, next) {
  let err = new Error('not allowed!');
  err.status = 403;
  next(err);
});

app.get('/500', function(req, res, next) {
  next(new Error('keyboard crabs 500 error!'));
});

app.use(function(req, res, next) {
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('500', { error: err });
});

/**
 * END of 404 & 500 Routes
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
