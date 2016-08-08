var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.posts',
    firebasePath: 'posts/',
    updateCallback:  require('../action/posts_update'),
    limitToLast: 1
});
