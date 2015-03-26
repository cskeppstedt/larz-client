var Firebase = require('firebase'),
    matchesUpdate = require('../action/matches_update'),
    matchesLoading = require('../action/matches_loading'),
    firebaseRef = undefined,
    CACHE_KEY = 'larz-client.matches',

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

      localStorage.setItem(CACHE_KEY, JSON.stringify(matches));
      matchesLoading(false);
      matchesUpdate(matches);
    },

    start = () => {
      var cached = localStorage.getItem(CACHE_KEY),
          matches;

      matchesLoading(true);

      if (cached) {
        matches = JSON.parse(cached);
        matchesUpdate(matches);
      }

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
