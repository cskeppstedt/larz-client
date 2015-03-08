var Reflux = require('reflux'),
    postsUpdate = require('../action/posts_update'),
    postsStore = Reflux.createStore({
      init: function() {
        this.listenTo(postsUpdate, this.output);
      },

      output: function(posts) {
          this.trigger(posts);
      }
  });


module.exports = postsStore;
