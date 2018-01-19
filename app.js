/**
* Variables
*/
var express = require('express')

    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , debug = require('debug')
    , logger = require('morgan')
    //    , favicon = require('serve-favicon')
    , bodyParser = require("body-parser")
    , path = require('path')
    , session = require('express-session')
    , app = express();

// ------------------------------- MYSQL -------------------------------

var mysql      = require('mysql');
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'test'
            });
 
connection.connect();
 
global.db = connection;

// --------------------------------------------------------------------
// all environments

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
// Gestion code serveur en console :
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only
 
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile',user.profile);//to render users profile
//Middleware
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.pug', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.pug', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

