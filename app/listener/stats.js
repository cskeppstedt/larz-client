var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.stats',
    firebaseUri: 'https://larz-statsen.firebaseio.com/stats/',
    updateCallback:  require('../action/stats_update'),
    limitToLast: 14 // 14 days
});
