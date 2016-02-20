var React = require('react');
var ReactDOM = require('react-dom');

window.ApiUtil = require('./util/apiUtil');
window.BenchStore = require('./stores/bench');
window.ApiActions = require('./actions/apiActions');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<div />, document.getElementById('content'));
});
