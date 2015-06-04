var Firebase = require('firebase'),
    offlineMode = false;


module.exports = function(options) {
    'use strict';

    var firebaseRef,
        isLoading = false,
        loadingCallback = options.loadingCallback || function() {},
        updateCallback  = options.updateCallback  || function() {},

        logger = (msg, ...rest) => {
          var args = [`[listener] [${options.firebaseUri}] ${msg}`].concat(rest);
          console.log.apply(console, args);
        },

        updateFromCache = (cachedString) => {
            try {
                var data = JSON.parse(cachedString);
                updateCallback(data);
                logger('updated from cache', data);
            } catch(e) {
                console.error(e);
            }
        },

        firebaseCallback = (snapshot) => {
          var val   = snapshot.val(),
              items = Object.keys(val).map(k => val[k]);

          // items will be sorted ascending on key
          // - we want descending order.
          items.reverse();

          localStorage.setItem(options.cacheKey, JSON.stringify(items));
          loadingCallback(false);

          logger('new data', items);
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

            if (offlineMode !== true) {
                loadingCallback(true);
                isLoading = true;

                firebaseRef = new Firebase(options.firebaseUri);

                if (options.limitToLast) {
                    firebaseRef.limitToLast(options.limitToLast).on('value', firebaseCallback);
                    logger(`started (limit to last ${options.limitToLast})`);
                } else {
                    firebaseRef.on('value', firebaseCallback);
                    logger('started');
                }
            } else {
                logger('offline mode enabled, no listener started');
            }
        },

        stop = () => {
            firebaseRef.off('value', firebaseCallback);
            firebaseRef = undefined;

            if (isLoading) {
                loadingCallback(false);
                isLoading = false;
            }

            logger('stopped');
        };


    return {
        start: start,
        stop: stop
    };
};
