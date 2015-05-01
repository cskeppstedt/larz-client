var Firebase = require('firebase');


module.exports = function(options) {
    var firebaseRef,
        isLoading = false,
        loadingCallback = options.loadingCallback || function() {},
        updateCallback  = options.updateCallback  || function() {},

        updateFromCache = (cachedString) => {
            try {
                updateCallback(JSON.parse(cachedString));
            } catch(e) {
                console.error(e);
            }
        },

        firebaseCallback = (snapshot) => {
          var val = snapshot.val(),
              items = [],
              key;

          for (key in val) {
              if (Object.hasOwnProperty.call(val, key)) {
                  items.push(val[key]);
              }
          }

          // items will be sorted ascending on key
          // - we want descending order.
          items.reverse();

          localStorage.setItem(options.cacheKey, JSON.stringify(items));
          loadingCallback(false);
          updateCallback(items);
        },

        start = () => {
            var cachedString = localStorage.getItem(options.cacheKey);

            if (cachedString) {
                updateFromCache(cachedString);
            }

            if (firebaseRef !== undefined) {
                console.warn('This listener for ' + options.firebaseUri + ' is already started, will not start a new one.');
                return;
            }

            loadingCallback(true);
            isLoading = true;

            firebaseRef = new Firebase(options.firebaseUri);
            firebaseRef.on('value', firebaseCallback);
        },

        stop = () => {
            firebaseRef.off('value', firebaseCallback);
            firebaseRef = undefined;

            if (isLoading) {
                loadingCallback(false);
                isLoading = false;
            }
        };


    return {
        start: start,
        stop: stop
    };
};
