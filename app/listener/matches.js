var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.matches',
    firebasePath: 'matches/',
    loadingCallback: require('../action/matches_loading'),
    updateCallback:  require('../action/matches_update'),
    limitToLast: 20
});
