var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.matches',
    firebaseUri: 'https://larz-statsen.firebaseio.com/matches/',
    loadingCallback: require('../action/matches_loading'),
    updateCallback:  require('../action/matches_update'),
    limitToLast: 20
});
