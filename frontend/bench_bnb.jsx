var React = require('react');
var ReactDOM = require('react-dom');

var ApiUtil = require('./util/apiUtil');
var BenchStore = require('./stores/bench');
var Index = require('./components/index');
var Search = require('./components/search');
var Map = require('./components/map');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Search />, document.getElementById('content'));
});
