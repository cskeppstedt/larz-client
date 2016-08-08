var Reflux = require('reflux'),
    playersLoading = require('../action/cs_players_loading'),
    loadingStore = Reflux.createStore({
      init: function() {
        this.listenTo(playersLoading, this.onPlayersLoading);
      },

      onPlayersLoading: function(isLoading) {
          this.playersLoading = isLoading;
          this.output();
      },

      output: function(matches) {
          this.trigger({
              playersLoading: !!this.playersLoading
          });
      }
  });


module.exports = loadingStore;
