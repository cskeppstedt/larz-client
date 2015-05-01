var Listener = require('./listener');

module.exports = new Listener({
    cacheKey:    'larz-client.posts',
    firebaseUri: 'https://larz-statsen.firebaseio.com/posts/',
    updateCallback:  require('../action/posts_update')
});
