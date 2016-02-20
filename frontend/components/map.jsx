/* global google */

var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/apiUtil');

var Map = React.createClass({

  componentDidMount: function () {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.token = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    return (
      <div className="map" ref="map">{this.map}</div>
    );
  }

});

module.exports = Map;
