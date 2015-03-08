var Firebase = require('firebase'),
    postsUpdate = require('../action/posts_update'),
    firebaseRef = undefined,

    callback = (snapshot) => {
      var val = snapshot.val(),
          posts = [],
          key;

      for (key in val) {
          if (Object.hasOwnProperty.call(val, key)) {
              posts.push(val[key]);
          }
      }
      
      // posts will be sorted ascending on key
      // - we want descending order.
      posts.reverse();

      console.log('[posts]', posts);
      postsUpdate(posts);
    },

    start = () => {
      if (firebaseRef !== undefined) {
        return;
      }

      firebaseRef = new Firebase('https://larz-statsen.firebaseio.com/');
      firebaseRef.child('/posts/').on('value', callback);
    },

    stop = () => {
      firebaseRef.child('/posts/').off('value', callback);
      firebaseRef = undefined;
    };


module.exports = {
  start: start,
  stop: stop
};
