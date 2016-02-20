var ApiActions = require('../actions/apiActions');

var ApiUtil = {
  fetchBenches: function(){
    $.get( "api/benches", function (data) {
      ApiActions.receiveAll(data);
    });
  }
};

module.exports = ApiUtil;
