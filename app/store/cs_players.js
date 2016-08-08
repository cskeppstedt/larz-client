var Reflux = require('reflux'),
    playersUpdate = require('../action/cs_players_update'),
    playersStore = Reflux.createStore({
      init: function() {
        this.listenTo(playersUpdate, this.output);
      },

      output: function(players) {
          this.trigger(players);
      }
  });


module.exports = playersStore;
