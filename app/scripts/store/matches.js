var Reflux = require('reflux'),
    matchesUpdate = require('../action/matches_update'),
    matchesStore = Reflux.createStore({
      init: function() {
        this.listenTo(matchesUpdate, this.output);
      },

      output: function(matches) {
          this.trigger(matches);
      }
  });


module.exports = matchesStore;
