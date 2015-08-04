var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var user = require('./routes/user');
var timeline = require('./routes/timeline');
var match = require('./routes/match');
var friend = require('./routes/friend');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/timeline', timeline);
app.use('/friend', friend);
app.use('/user', user);
app.use('/match', match);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', { message: err.message, error: err });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: {} });
});

module.exports = app;
