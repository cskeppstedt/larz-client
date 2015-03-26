var Reflux = require('reflux'),
    matchesLoading = require('../action/matches_loading'),
    loadingStore = Reflux.createStore({
      init: function() {
        this.listenTo(matchesLoading, this.onMatchesLoading);
      },

      onMatchesLoading: function(isLoading) {
          this.matchesLoading = isLoading;
          this.output();
      },

      output: function(matches) {
          this.trigger({
              matchesLoading: !!this.matchesLoading
          });
      }
  });


module.exports = loadingStore;
