"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));
