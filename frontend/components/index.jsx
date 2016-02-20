var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/apiUtil');

var Index = React.createClass({

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    ApiUtil.fetchBenches();
    this.token = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    var benchList = this.state.benches.map (function (el) {
      return <li>{el.description + " "
                  + "latitude: " + el.latitude + " "
                  + "longitude: " + el.longitude}</li>;
    });

    return (
      <ul>
        {benchList}
      </ul>
    );
  }


});

module.exports = Index;
