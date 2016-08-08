var Reflux = require('reflux'),
    playersUpdate = require('../action/cs_players_update'),
    playerNames = require('../config/config').players,
    playerSorter = function (a, b) {
      var nameA = playerNames[a.steamid].toLowerCase();
      var nameB = playerNames[b.steamid].toLowerCase();

      if (nameA === nameB) {
        return 0;
      } else if (nameA <= nameB) {
        return -1;
      } else {
        return 1;
      }
    },
    playersStore = Reflux.createStore({
      init: function() {
        this.listenTo(playersUpdate, this.output);
      },

      output: function(players) {
          const sortedPlayers = players.splice(0);
          sortedPlayers.sort(playerSorter);

          this.trigger(sortedPlayers);
      }
  });


module.exports = playersStore;
