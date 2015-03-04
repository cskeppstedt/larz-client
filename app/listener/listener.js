var Firebase = require('firebase'),
    matchesUpdate = require('../action/matches_update'),
    firebaseRef = undefined,

    callback = (snapshot) => {
      var val = snapshot.val(),
          matches = [],
          key;

      for (key in val) {
          if (Object.hasOwnProperty.call(val, key)) {
              matches.push(val[key]);
          }
      }
      
      // matches will be sorted ascending on key
      // - we want descending order.
      matches.reverse();

      console.log(matches);
      matchesUpdate(matches);
    },

    start = () => {
      if (firebaseRef !== undefined) {
        return;
      }

      firebaseRef = new Firebase('https://larz-statsen.firebaseio.com/');
      firebaseRef.child('/matches/').on('value', callback);
    },

    stop = () => {
      firebaseRef.child('/matches/').off('value', callback);
      firebaseRef = undefined;
    };


module.exports = {
  start: start,
  stop: stop
};
