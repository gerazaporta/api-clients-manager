// First import all dependencies
var express = require('express');

// Errors handler
var createError = require('http-errors');
 

// Map request into javascript objects
const bodyParser = require('body-parser');
// Cross 
const cors = require('cors');
// Helmet
const helmet = require('helmet');

var path = require('path');
// Cookie parser
var cookieParser = require('cookie-parser');

// Logger
var logger = require('morgan');

// Route files
var apiRoutes = require('./routes/api');

const jwt = require('./_helpers/jwt');

var app = express();

// Logger
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());


app.use('/api', apiRoutes);

module.exports = app;
