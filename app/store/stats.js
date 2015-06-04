var Reflux = require('reflux'),
    statsUpdate = require('../action/stats_update'),
    statsStore = Reflux.createStore({
      init: function() {
        this.listenTo(statsUpdate, this.output);
      },

      output: function(stats) {
          this.trigger(stats);
      }
  });


module.exports = statsStore;
