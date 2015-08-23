var $ = jQuery = require('jquery');
var angular = require('angular');
//load bootstrap js
require('bootstrap');
require('bootstrap-toggle/js/bootstrap-toggle');

var app = angular.module('myExpress', []); 

app.controller('GpioCtrl', require('./controllers/gpio'));