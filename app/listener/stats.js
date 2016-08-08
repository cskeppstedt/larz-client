var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.stats',
    firebasePath: 'stats/',
    updateCallback:  require('../action/stats_update'),
    limitToLast: 14 // 14 days
});
