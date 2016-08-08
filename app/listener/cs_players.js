var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.cs_players',
    firebasePath: 'csgo/latest/',
    loadingCallback: require('../action/cs_players_loading'),
    updateCallback:  require('../action/cs_players_update')
});
