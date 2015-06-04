webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(6),
	    ViewController   = __webpack_require__(7),
	    posts_listener   = __webpack_require__(8),
	    stats_listener   = __webpack_require__(9),
	    matches_listener = __webpack_require__(10),
	    node = document.body;

	__webpack_require__(13);
	__webpack_require__(15);

	React.render(React.createElement(ViewController, null), node);

	matches_listener.start();
	posts_listener.start();
	stats_listener.start();


/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(6),
	    Logo = __webpack_require__(19),
	    MatchList = __webpack_require__(20),
	    Stats = __webpack_require__(21),
	    VideoBlog  = __webpack_require__(22);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        return (
	            React.createElement("div", null, 
	                React.createElement(Logo, null), 
	                React.createElement(VideoBlog, null), 
	                React.createElement(Stats, null), 
	                React.createElement(MatchList, null)
	            )
	        );
	    }
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Listener = __webpack_require__(23);

	module.exports = new Listener({
	    cacheKey:    'larz-client.posts',
	    firebaseUri: 'https://larz-statsen.firebaseio.com/posts/',
	    updateCallback:  __webpack_require__(24),
	    limitToLast: 1
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Listener = __webpack_require__(23);

	module.exports = new Listener({
	    cacheKey:    'larz-client.stats',
	    firebaseUri: 'https://larz-statsen.firebaseio.com/stats/',
	    updateCallback:  __webpack_require__(25),
	    limitToLast: 14 // 14 days
	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Listener = __webpack_require__(23);

	module.exports = new Listener({
	    cacheKey:    'larz-client.matches',
	    firebaseUri: 'https://larz-statsen.firebaseio.com/matches/',
	    loadingCallback: __webpack_require__(26),
	    updateCallback:  __webpack_require__(27),
	    limitToLast: 20
	});


/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/reset.css", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/reset.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, "html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, em,\nimg, small, strong, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label,\nlegend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside,\ncanvas, details,  figure, figcaption, footer, header, hgroup, menu, nav,\noutput, section, summary, time, mark, {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol, ul {\n    list-style: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n", ""]);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/main.css", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Oswald:400,300);", ""]);
	exports.push([module.id, "\n\nbody {\n    background-color: #ddd;\n    font-family: 'Oswald', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    padding: 0;\n    margin: 0;\n}\n\nh1,h2,h3,h4 {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n}\n\ndl, dd, dt {\n  margin: 0;\n  padding: 0;\n}\n", ""]);

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactWithAddons
	 */

	/**
	 * This module exists purely in the open source project, and is meant as a way
	 * to create a separate standalone build of React. This build has "addons", or
	 * functionality we've built and think might be useful but doesn't have a good
	 * place to live inside React core.
	 */

	"use strict";

	var LinkedStateMixin = __webpack_require__(58);
	var React = __webpack_require__(12);
	var ReactComponentWithPureRenderMixin =
	  __webpack_require__(59);
	var ReactCSSTransitionGroup = __webpack_require__(60);
	var ReactTransitionGroup = __webpack_require__(61);
	var ReactUpdates = __webpack_require__(62);

	var cx = __webpack_require__(63);
	var cloneWithProps = __webpack_require__(64);
	var update = __webpack_require__(65);

	React.addons = {
	  CSSTransitionGroup: ReactCSSTransitionGroup,
	  LinkedStateMixin: LinkedStateMixin,
	  PureRenderMixin: ReactComponentWithPureRenderMixin,
	  TransitionGroup: ReactTransitionGroup,

	  batchedUpdates: ReactUpdates.batchedUpdates,
	  classSet: cx,
	  cloneWithProps: cloneWithProps,
	  update: update
	};

	if ("production" !== process.env.NODE_ENV) {
	  React.addons.Perf = __webpack_require__(66);
	  React.addons.TestUtils = __webpack_require__(67);
	}

	module.exports = React;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(6);

	__webpack_require__(56);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        return (
	            React.createElement("div", {className: "logo"})
	        );
	    }
	});


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var DateHeader   = __webpack_require__(68),
	    Loader       = __webpack_require__(69),
	    loadingStore = __webpack_require__(71),
	    Match        = __webpack_require__(70),
	    matchesStore = __webpack_require__(72),
	    React        = __webpack_require__(6),
	    Reflux       = __webpack_require__(4);


	__webpack_require__(73);


	module.exports = React.createClass({displayName: "exports",
	    mixins: [
	        Reflux.connect(matchesStore, 'matches'),
	        Reflux.connect(loadingStore, 'loading')
	    ],

	    getInitialState: function() {
	        return {
	            matches: [],
	            loading: {
	                matchesLoading: false
	            }
	        };
	    },

	    render: function() {
	        var subviews = [],
	            lastDate,
	            classes = React.addons.classSet({
	                'matchlist': true,
	                'is-loading': this.state.loading.matchesLoading
	            });


	        this.state.matches.forEach(function(match)  {
	            if (match.date !== lastDate) {
	                lastDate = match.date;
	                subviews.push(React.createElement(DateHeader, {date: match.date}));
	            }

	            subviews.push(React.createElement(Match, {key: match.match_id, match: match}));
	        });

	        return (
	            React.createElement("div", {className: classes}, 
	                React.createElement(Loader, {isVisible: this.state.loading.matchesLoading}), 
	                React.createElement("ul", {className: "matchlist__list"}, 
	                    subviews
	                )
	            )
	        );
	    }
	});


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4),
	    React  = __webpack_require__(6),
	    statsStore = __webpack_require__(78),
	    StatsLegend = __webpack_require__(79),
	    StatsChart = __webpack_require__(80);

	__webpack_require__(138);


	module.exports = React.createClass({displayName: "exports",
	    mixins: [
	        Reflux.connect(statsStore, 'stats')
	    ],

	    getInitialState: function() {
	        return {
	            stats: []
	        };
	    },

	    render: function() {
	        return (
	            React.createElement("div", {className: "stats"}, 
	                React.createElement("h1", {className: "stats__title"}, "MMR last 14 days"), 
	                React.createElement("div", {className: "stats__chart"}, 
	                    React.createElement(StatsChart, {stats: this.state.stats})
	                ), 
	                React.createElement("div", {className: "stats__legend"}, 
	                    React.createElement(StatsLegend, {stats: this.state.stats})
	                )
	            )
	        );
	    }
	});


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4),
	    React  = __webpack_require__(6),
	    postsStore = __webpack_require__(75);

	__webpack_require__(76);


	module.exports = React.createClass({displayName: "exports",
	    mixins: [
	        Reflux.connect(postsStore, 'posts')
	    ],

	    getInitialState: function() {
	        return {
	            posts: []
	        };
	    },

	    render: function() {
	        return (
	            React.createElement("div", {className: "videoblog"}, 
	                React.createElement("h1", {className: "videoblog__title"}, "HoNt i veckan"), 
	                this.state.posts.map(function(post) {
	                    return React.createElement("iframe", {
	                        className: "videoblog__post", 
	                        src: post.embed_url, 
	                        frameBorder: "0", 
	                        allowFullScreen: true});
	                })
	            )
	        );
	    }
	});


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Firebase = __webpack_require__(5),
	    offlineMode = false;


	module.exports = function(options) {
	    'use strict';

	    var firebaseRef,
	        isLoading = false,
	        loadingCallback = options.loadingCallback || function() {},
	        updateCallback  = options.updateCallback  || function() {},

	        logger = function(msg)   {for (var rest=[],$__0=1,$__1=arguments.length;$__0<$__1;$__0++) rest.push(arguments[$__0]);
	          var args = [("[listener] [" + options.firebaseUri + "] " + msg)].concat(rest);
	          console.log.apply(console, args);
	        },

	        updateFromCache = function(cachedString)  {
	            try {
	                var data = JSON.parse(cachedString);
	                updateCallback(data);
	                logger('updated from cache', data);
	            } catch(e) {
	                console.error(e);
	            }
	        },

	        firebaseCallback = function(snapshot)  {
	          var val   = snapshot.val(),
	              items = Object.keys(val).map(function(k)  {return val[k];});

	          // items will be sorted ascending on key
	          // - we want descending order.
	          items.reverse();

	          localStorage.setItem(options.cacheKey, JSON.stringify(items));
	          loadingCallback(false);

	          logger('new data', items);
	          updateCallback(items);
	        },

	        start = function()  {
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
	                    logger(("started (limit to last " + options.limitToLast + ")"));
	                } else {
	                    firebaseRef.on('value', firebaseCallback);
	                    logger('started');
	                }
	            } else {
	                logger('offline mode enabled, no listener started');
	            }
	        },

	        stop = function()  {
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


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4);

	// This action represents that the matches have been updated
	module.exports = Reflux.createAction();


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4);

	// This action represents that the stats have been updated
	module.exports = Reflux.createAction();


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4);

	// This action represents that the matches started/stopped loading
	module.exports = Reflux.createAction();


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4);

	// This action represents that the matches have been updated
	module.exports = Reflux.createAction();


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/logo/logo.css", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/logo/logo.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".logo {\n    background-image: url("+__webpack_require__(200)+");\n    background-position: left top;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 320px;\n    height: 317px;\n    margin: 0 auto;\n}\n\n@media screen and (min-width: 700px) {\n    .logo {\n        width: 700px;\n        height: 694px;\n        margin: 0 auto;\n    }\n}\n", ""]);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */

	"use strict";

	var ReactLink = __webpack_require__(141);
	var ReactStateSetters = __webpack_require__(142);

	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function(key) {
	    return new ReactLink(
	      this.state[key],
	      ReactStateSetters.createStateKeySetter(this, key)
	    );
	  }
	};

	module.exports = LinkedStateMixin;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/

	"use strict";

	var shallowEqual = __webpack_require__(140);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */

	"use strict";

	var React = __webpack_require__(12);

	var assign = __webpack_require__(50);

	var ReactTransitionGroup = React.createFactory(
	  __webpack_require__(61)
	);
	var ReactCSSTransitionGroupChild = React.createFactory(
	  __webpack_require__(143)
	);

	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: React.PropTypes.string.isRequired,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool
	  },

	  getDefaultProps: function() {
	    return {
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function(child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return ReactCSSTransitionGroupChild(
	      {
	        name: this.props.transitionName,
	        enter: this.props.transitionEnter,
	        leave: this.props.transitionLeave
	      },
	      child
	    );
	  },

	  render: function() {
	    return (
	      ReactTransitionGroup(
	        assign({}, this.props, {childFactory: this._wrapChild})
	      )
	    );
	  }
	});

	module.exports = ReactCSSTransitionGroup;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	"use strict";

	var React = __webpack_require__(12);
	var ReactTransitionChildMapping = __webpack_require__(146);

	var assign = __webpack_require__(50);
	var cloneWithProps = __webpack_require__(64);
	var emptyFunction = __webpack_require__(136);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function() {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function() {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillReceiveProps: function(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(
	      nextProps.children
	    );
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(
	        prevChildMapping,
	        nextChildMapping
	      )
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentWillMount: function() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidUpdate: function() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performEnter: function(key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(
	        this._handleDoneEntering.bind(this, key)
	      );
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function(key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function(key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function(key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      var newChildren = assign({}, this.state.children);
	      delete newChildren[key];
	      this.setState({children: newChildren});
	    }
	  },

	  render: function() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = {};
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender[key] = cloneWithProps(
	          this.props.childFactory(child),
	          {ref: key}
	        );
	      }
	    }
	    return React.createElement(
	      this.props.component,
	      this.props,
	      childrenToRender
	    );
	  }
	});

	module.exports = ReactTransitionGroup;


/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}

	module.exports = cx;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule cloneWithProps
	 */

	"use strict";

	var ReactElement = __webpack_require__(37);
	var ReactPropTransferer = __webpack_require__(93);

	var keyOf = __webpack_require__(97);
	var warning = __webpack_require__(83);

	var CHILDREN_PROP = keyOf({children: null});

	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {object} child child component you'd like to clone
	 * @param {object} props props you'd like to modify. They will be merged
	 * as if you used `transferPropsTo()`.
	 * @return {object} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      !child.ref,
	      'You are calling cloneWithProps() on a child with a ref. This is ' +
	      'dangerous because you\'re creating a new child which will not be ' +
	      'added as a ref to its parent.'
	    ) : null);
	  }

	  var newProps = ReactPropTransferer.mergeProps(props, child.props);

	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	      child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }

	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return ReactElement.createElement(child.type, newProps);
	}

	module.exports = cloneWithProps;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	"use strict";

	var assign = __webpack_require__(50);
	var keyOf = __webpack_require__(97);
	var invariant = __webpack_require__(88);

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({$push: null});
	var COMMAND_UNSHIFT = keyOf({$unshift: null});
	var COMMAND_SPLICE = keyOf({$splice: null});
	var COMMAND_SET = keyOf({$set: null});
	var COMMAND_MERGE = keyOf({$merge: null});
	var COMMAND_APPLY = keyOf({$apply: null});

	var ALL_COMMANDS_LIST = [
	  COMMAND_PUSH,
	  COMMAND_UNSHIFT,
	  COMMAND_SPLICE,
	  COMMAND_SET,
	  COMMAND_MERGE,
	  COMMAND_APPLY
	];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function(command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  ) : invariant(Array.isArray(value)));
	  var specValue = spec[command];
	  ("production" !== process.env.NODE_ENV ? invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  ) : invariant(Array.isArray(specValue)));
	}

	function update(value, spec) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof spec === 'object',
	    'update(): You provided a key path to update() that did not contain one ' +
	    'of %s. Did you forget to include {%s: ...}?',
	    ALL_COMMANDS_LIST.join(', '),
	    COMMAND_SET
	  ) : invariant(typeof spec === 'object'));

	  if (spec.hasOwnProperty(COMMAND_SET)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Object.keys(spec).length === 1,
	      'Cannot have more than one key in an object with %s',
	      COMMAND_SET
	    ) : invariant(Object.keys(spec).length === 1));

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (spec.hasOwnProperty(COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    ("production" !== process.env.NODE_ENV ? invariant(
	      mergeObj && typeof mergeObj === 'object',
	      'update(): %s expects a spec of type \'object\'; got %s',
	      COMMAND_MERGE,
	      mergeObj
	    ) : invariant(mergeObj && typeof mergeObj === 'object'));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      nextValue && typeof nextValue === 'object',
	      'update(): %s expects a target of type \'object\'; got %s',
	      COMMAND_MERGE,
	      nextValue
	    ) : invariant(nextValue && typeof nextValue === 'object'));
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (spec.hasOwnProperty(COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function(item) {
	      nextValue.push(item);
	    });
	  }

	  if (spec.hasOwnProperty(COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function(item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (spec.hasOwnProperty(COMMAND_SPLICE)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(value),
	      'Expected %s target to be an array; got %s',
	      COMMAND_SPLICE,
	      value
	    ) : invariant(Array.isArray(value)));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(spec[COMMAND_SPLICE]),
	      'update(): expected spec of %s to be an array of arrays; got %s. ' +
	      'Did you forget to wrap your parameters in an array?',
	      COMMAND_SPLICE,
	      spec[COMMAND_SPLICE]
	    ) : invariant(Array.isArray(spec[COMMAND_SPLICE])));
	    spec[COMMAND_SPLICE].forEach(function(args) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        Array.isArray(args),
	        'update(): expected spec of %s to be an array of arrays; got %s. ' +
	        'Did you forget to wrap your parameters in an array?',
	        COMMAND_SPLICE,
	        spec[COMMAND_SPLICE]
	      ) : invariant(Array.isArray(args)));
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (spec.hasOwnProperty(COMMAND_APPLY)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof spec[COMMAND_APPLY] === 'function',
	      'update(): expected spec of %s to be a function; got %s.',
	      COMMAND_APPLY,
	      spec[COMMAND_APPLY]
	    ) : invariant(typeof spec[COMMAND_APPLY] === 'function'));
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTestUtils
	 */

	"use strict";

	var EventConstants = __webpack_require__(87);
	var EventPluginHub = __webpack_require__(149);
	var EventPropagators = __webpack_require__(150);
	var React = __webpack_require__(12);
	var ReactElement = __webpack_require__(37);
	var ReactBrowserEventEmitter = __webpack_require__(103);
	var ReactMount = __webpack_require__(44);
	var ReactTextComponent = __webpack_require__(49);
	var ReactUpdates = __webpack_require__(62);
	var SyntheticEvent = __webpack_require__(151);

	var assign = __webpack_require__(50);

	var topLevelTypes = EventConstants.topLevelTypes;

	function Event(suffix) {}

	/**
	 * @class ReactTestUtils
	 */

	/**
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function(instance) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return React.render(instance, div);
	  },

	  isElement: function(element) {
	    return ReactElement.isValidElement(element);
	  },

	  isElementOfType: function(inst, convenienceConstructor) {
	    return (
	      ReactElement.isValidElement(inst) &&
	      inst.type === convenienceConstructor.type
	    );
	  },

	  isDOMComponent: function(inst) {
	    return !!(inst && inst.mountComponent && inst.tagName);
	  },

	  isDOMComponentElement: function(inst) {
	    return !!(inst &&
	              ReactElement.isValidElement(inst) &&
	              !!inst.tagName);
	  },

	  isCompositeComponent: function(inst) {
	    return typeof inst.render === 'function' &&
	           typeof inst.setState === 'function';
	  },

	  isCompositeComponentWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponent(inst) &&
	             (inst.constructor === type.type));
	  },

	  isCompositeComponentElement: function(inst) {
	    if (!ReactElement.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return (
	      typeof prototype.render === 'function' &&
	      typeof prototype.setState === 'function'
	    );
	  },

	  isCompositeComponentElementWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) &&
	             (inst.constructor === type));
	  },

	  isTextComponent: function(inst) {
	    return inst instanceof ReactTextComponent.type;
	  },

	  findAllInRenderedTree: function(inst, test) {
	    if (!inst) {
	      return [];
	    }
	    var ret = test(inst) ? [inst] : [];
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      var renderedChildren = inst._renderedChildren;
	      var key;
	      for (key in renderedChildren) {
	        if (!renderedChildren.hasOwnProperty(key)) {
	          continue;
	        }
	        ret = ret.concat(
	          ReactTestUtils.findAllInRenderedTree(renderedChildren[key], test)
	        );
	      }
	    } else if (ReactTestUtils.isCompositeComponent(inst)) {
	      ret = ret.concat(
	        ReactTestUtils.findAllInRenderedTree(inst._renderedComponent, test)
	      );
	    }
	    return ret;
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function(root, className) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      var instClassName = inst.props.className;
	      return ReactTestUtils.isDOMComponent(inst) && (
	        instClassName &&
	        (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1
	      );
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function(root, className) {
	    var all =
	      ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for class:' + className);
	    }
	    return all[0];
	  },


	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function(root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isDOMComponent(inst) &&
	            inst.tagName === tagName.toUpperCase();
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function(root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for tag:' + tagName);
	    }
	    return all[0];
	  },


	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function(root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isCompositeComponentWithType(
	        inst,
	        componentType
	      );
	    });
	  },

	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function(root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(
	      root,
	      componentType
	    );
	    if (all.length !== 1) {
	      throw new Error(
	        'Did not find exactly one match for componentType:' + componentType
	      );
	    }
	    return all[0];
	  },

	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function(module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || "div";

	    var ConvenienceConstructor = React.createClass({displayName: "ConvenienceConstructor",
	      render: function() {
	        return React.createElement(
	          mockTagName,
	          null,
	          this.props.children
	        );
	      }
	    });

	    module.mockImplementation(ConvenienceConstructor);

	    module.type = ConvenienceConstructor.type;
	    module.isReactLegacyFactory = true;

	    return this;
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on an `Element` node.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function(topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(
	      topLevelType,
	      fakeNativeEvent
	    );
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on the `ReactDOMComponent` `comp`.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`.
	   * @param comp {!ReactDOMComponent}
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function(
	      topLevelType,
	      comp,
	      fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(
	      topLevelType,
	      comp.getDOMNode(),
	      fakeNativeEvent
	    );
	  },

	  nativeTouchData: function(x, y) {
	    return {
	      touches: [
	        {pageX: x, pageY: y}
	      ]
	    };
	  },

	  Simulate: null,
	  SimulateNative: {}
	};

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function(domComponentOrNode, eventData) {
	    var node;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = domComponentOrNode.getDOMNode();
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }

	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(
	      ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType],
	      ReactMount.getID(node),
	      fakeNativeEvent
	    );
	    assign(event, eventData);
	    EventPropagators.accumulateTwoPhaseDispatches(event);

	    ReactUpdates.batchedUpdates(function() {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue();
	    });
	  };
	}

	function buildSimulators() {
	  ReactTestUtils.Simulate = {};

	  var eventType;
	  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element || ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}

	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function() {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function() {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};

	buildSimulators();

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */

	function makeNativeSimulator(eventType) {
	  return function(domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    } else if (!!domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    }
	  };
	}

	var eventType;
	for (eventType in topLevelTypes) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ?
	    eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element || ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] =
	    makeNativeSimulator(eventType);
	}

	module.exports = ReactTestUtils;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6),
	    dateUtil = __webpack_require__(152);

	__webpack_require__(153);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        return (
	            React.createElement("li", {className: "date-header"}, 
	                dateUtil.toFriendlyDate(this.props.date)
	            )
	        );
	    }
	});


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6),
	    Team  = __webpack_require__(155);

	__webpack_require__(156);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {

	        var classes = React.addons.classSet({
	            'loader': true,
	            'is-visible': this.props.isVisible,
	            'is-hidden': !this.props.isVisible
	        });

	        return (React.createElement("div", {className: classes}, "Loading"));
	    }
	});


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6),
	    Team  = __webpack_require__(155);

	__webpack_require__(158);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        return (
	            React.createElement("li", {className: "match"}, 
	                React.createElement("h2", {className: "match__title"}, 
	                    React.createElement("span", {className: "match__title__id"}, this.props.match.match_id)
	                ), 
	                React.createElement(Team, {players: this.props.match.team1, name: "Team 1", winning: this.props.match.winning_team === '1'}), 
	                React.createElement(Team, {players: this.props.match.team2, name: "Team 2", winning: this.props.match.winning_team === '2'})
	            )
	        );
	    }
	});


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4),
	    matchesLoading = __webpack_require__(26),
	    loadingStore = Reflux.createStore({
	      init: function() {
	        this.listenTo(matchesLoading, this.onMatchesLoading);
	      },

	      onMatchesLoading: function(isLoading) {
	          this.matchesLoading = isLoading;
	          this.output();
	      },

	      output: function(matches) {
	          this.trigger({
	              matchesLoading: !!this.matchesLoading
	          });
	      }
	  });


	module.exports = loadingStore;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4),
	    matchesUpdate = __webpack_require__(27),
	    matchesStore = Reflux.createStore({
	      init: function() {
	        this.listenTo(matchesUpdate, this.output);
	      },

	      output: function(matches) {
	          this.trigger(matches);
	      }
	  });


	module.exports = matchesStore;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/matchlist/matchlist.css", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/matchlist/matchlist.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".matchlist {\n    position: relative;\n}\n\n.matchlist.is-loading .matchlist__list {\n    opacity: 0.3;\n}\n\n.matchlist__list {\n    list-style: none;\n    display: block;\n    padding: 0;\n    margin: 0;\n}\n", ""]);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4),
	    postsUpdate = __webpack_require__(24),
	    postsStore = Reflux.createStore({
	      init: function() {
	        this.listenTo(postsUpdate, this.output);
	      },

	      output: function(posts) {
	          this.trigger(posts);
	      }
	  });


	module.exports = postsStore;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/videoblog/videoblog.css", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/videoblog/videoblog.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".videoblog__title {\n    padding: 40px 0 20px 0;\n    text-align: center;\n}\n\n.videoblog__post {\n    display: block;\n    height: 155px;\n    margin: 20px 0;\n    width: 100%;\n}\n\n@media screen and (min-width: 700px) {\n    .videoblog__post {\n        height: 315px;\n        margin: 20px auto;\n        width: 700px;\n    }\n}\n", ""]);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(4),
	    statsUpdate = __webpack_require__(25),
	    statsStore = Reflux.createStore({
	      init: function() {
	        this.listenTo(statsUpdate, this.output);
	      },

	      output: function(stats) {
	          this.trigger(stats);
	      }
	  });


	module.exports = statsStore;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(6),
	    transform = __webpack_require__(160);

	__webpack_require__(138);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        var data = transform.toLegend(this.props.stats);

	        return (
	            React.createElement("ul", {className: "legend"}, 
	                data.map(function(d)  {
	                    var style = {
	                        backgroundColor: d.color
	                    };
	                    return React.createElement("li", {className: "legend__item", key: d.label}, 
	                      React.createElement("span", {className: "legend__item__color", style: style}), 
	                      React.createElement("span", {className: "legend__item__label"}, d.label)
	                    )
	                })
	            )
	        );
	    }
	});


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(6),
	    LineChart = __webpack_require__(162).Line,
	    transform = __webpack_require__(160);

	__webpack_require__(138);


	var chartOptions = {
	        scaleShowGridLines: false,
	        pointDotRadius: 3,
	        scaleIntegersOnly: false,
	        multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",
	        datasetFill: false,
	        responsive: true
	    };

	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        //var chartData = transform.toChart(this.props.stats);
	        chartData = transform.toChart(this.props.stats);
	        console.log('chartData', chartData);
	        if (!chartData || !chartData.datasets) {
	            return React.createElement("div", null);
	        }

	        return React.createElement(LineChart, {data: chartData, options: chartOptions, width: "600", height: "250"});
	    }
	});


/***/ },
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(139);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/stats/stats.styl", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/stats/stats.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".stats {\n  margin: 20px 0;\n  padding: 10px;\n}\n.stats__title {\n  padding: 40px 0 20px 0;\n  text-align: center;\n}\n.legend {\n  list-style: none;\n  padding: 0;\n  margin: 1em 0;\n  font-size: 0.9rem;\n}\n.legend__item {\n  float: left;\n  padding: 0;\n  margin: 0 0.5em 0.3em 0;\n}\n.legend__item__color {\n  display: inline-block;\n  width: 0.5em;\n  height: 1em;\n  margin-right: 0.5em;\n}\n@media screen and (min-width: 700px) {\n  .stats {\n    margin: 20px auto;\n    width: 700px;\n    padding: 0;\n  }\n}\n", ""]);

/***/ },
/* 140 */,
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   this._handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */

	var React = __webpack_require__(12);

	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}

	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: typeof linkType === 'undefined' ?
	      React.PropTypes.any.isRequired :
	      linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}

	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};

	module.exports = ReactLink;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactStateSetters
	 */

	"use strict";

	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(component, funcReturningState) {
	    return function(a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};

	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}

	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};

	module.exports = ReactStateSetters;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	"use strict";

	var React = __webpack_require__(12);

	var CSSCore = __webpack_require__(201);
	var ReactTransitionEvents = __webpack_require__(202);

	var onlyChild = __webpack_require__(52);

	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	var NO_EVENT_TIMEOUT = 5000;

	var noEventListener = null;


	if ("production" !== process.env.NODE_ENV) {
	  noEventListener = function() {
	    console.warn(
	      'transition(): tried to perform an animation without ' +
	      'an animationend or transitionend event after timeout (' +
	      NO_EVENT_TIMEOUT + 'ms). You should either disable this ' +
	      'transition in JS or add a CSS animation/transition.'
	    );
	  };
	}

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  transition: function(animationType, finishCallback) {
	    var node = this.getDOMNode();
	    var className = this.props.name + '-' + animationType;
	    var activeClassName = className + '-active';
	    var noEventTimeout = null;

	    var endListener = function(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        clearTimeout(noEventTimeout);
	      }

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      finishCallback && finishCallback();
	    };

	    ReactTransitionEvents.addEndEventListener(node, endListener);

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);

	    if ("production" !== process.env.NODE_ENV) {
	      noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
	    }
	  },

	  queueClass: function(className) {
	    this.classNameQueue.push(className);

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },

	  flushClassNameQueue: function() {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(
	        CSSCore.addClass.bind(CSSCore, this.getDOMNode())
	      );
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function() {
	    this.classNameQueue = [];
	  },

	  componentWillUnmount: function() {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },

	  componentWillEnter: function(done) {
	    if (this.props.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function(done) {
	    if (this.props.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },

	  render: function() {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ },
/* 144 */,
/* 145 */,
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	"use strict";

	var ReactChildren = __webpack_require__(32);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around ReactChildren.map().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function(children) {
	    return ReactChildren.map(children, function(child) {
	      return child;
	    });
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function(prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
	            pendingNextKey
	          );
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;


/***/ },
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var DATE_EXPRESSION = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,

	    MONTHS = [
	        "January",
	        "February",
	        "March",
	        "April",
	        "May",
	        "June",
	        "July",
	        "August",
	        "September",
	        "October",
	        "November",
	        "December"
	    ]

	    toFriendlyDate = function(yyyy_mm_dd)  {
	        var yyyy, mm, dd;

	        var $__0=     yyyy_mm_dd.match(DATE_EXPRESSION);_=$__0[0],yyyy=$__0[1],mm=$__0[2],dd=$__0[3];
	        mm = parseInt(mm, 10);
	        dd = parseInt(dd, 10);

	        return (MONTHS[mm-1] + " " + dd + ", " + yyyy);
	    };


	module.exports = {
	    toFriendlyDate:toFriendlyDate
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/date_header/date_header.styl", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/date_header/date_header.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".date-header {\n  border-bottom: 1px solid rgba(219,142,56,0.5);\n  color: #db8e37;\n  display: block;\n  font-size: 24px;\n  font-weight: 300;\n  margin: 40px auto 20px auto;\n  padding: 30px 10px;\n}\n@media screen and (min-width: 700px) {\n  .date-header {\n    width: 700px;\n    padding: 30px 0;\n  }\n  .date-header:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n  }\n}\n", ""]);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(6),
	    Player = __webpack_require__(206),
	    $__0=    __webpack_require__(207),team=$__0.team;

	__webpack_require__(208);


	module.exports = React.createClass({displayName: "exports",
	    render: function() {
	        var winningElem;

	        if (this.props.winning === true) {
	            winningElem = React.createElement("span", {className: "team__name__winning"}, "(winners)");
	        }

	        var teamClasses = React.addons.classSet({
	            'team': true,
	            'team--winning': this.props.winning
	        });

	        return (
	            React.createElement("div", {className: teamClasses}, 
	                React.createElement("h2", {className: "team__name"}, 
	                    this.props.name, 
	                    winningElem
	                ), 
	                React.createElement("ul", {className: "team__players"}, 
	                    this.props.players.map(function(player) {
	                        return React.createElement(Player, {
	                          key: player.nickname, 
	                          player: player, 
	                          isInTeam: team.indexOf(player.nickname) >= 0}
	                        );
	                    })
	                )
	            )
	        );
	    }
	});
	/*
	apm: "122"
	deaths: "5"
	delta_mmr: "4.940"
	denies: "6"
	gpm: "349"
	hero_id: "14"
	heroassists: "10"
	herokills: "8"
	lasthits: "133"
	level: "19"
	nickname: "kha_alim"
	wards: "0"
	xpm: "517"
	*/


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/loader/loader.styl", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/loader/loader.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".loader {\n  border-bottom: 3px solid rgba(219,142,56,0.2);\n  border-left: 3px solid rgba(219,142,56,0.5);\n  border-right: 3px solid rgba(219,142,56,0.2);\n  border-top: 3px solid rgba(219,142,56,0.2);\n  font-size: 10px;\n  left: 50%;\n  margin-left: -10px;\n  position: absolute;\n  text-indent: -9999em;\n  -webkit-animation: spin 1.1s infinite linear;\n  animation: spin 1.1s infinite linear;\n}\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n.loader.is-visible {\n  display: block;\n}\n.loader.is-hidden {\n  display: none;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", ""]);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(159);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/match/match.styl", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/match/match.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".match {\n  display: block;\n  margin: 10px auto;\n  padding: 20px 10px 10px 10px;\n  border-top: 1px solid #ccc;\n}\n.date-header + .match {\n  border-top: none;\n  padding-top: 10px;\n}\n@media screen and (min-width: 700px) {\n  .match {\n    width: 700px;\n  }\n  .match:after {\n    clear: both;\n    content: \" \";\n    display: block;\n    font-size: 0;\n    height: 0;\n    visibility: hidden;\n  }\n  .match .team {\n    box-sizing: border-box;\n    float: left;\n    width: 350px;\n  }\n}\n.match__title {\n  display: block;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.match__title__id {\n  color: #888;\n  display: none;\n  font-size: 14px;\n}\n", ""]);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var color = function(key)  {
	    var defaultColor = '#000000';
	    var map = {
	        'skepparn_': '#F4B350',
	        'Schln': '#87D37C',
	        'zwex': '#52B3D9',
	        'Pacoloco': '#D35400',
	        'Adelsmansman': '#6C7A89'
	    };

	    return map[key] || defaultColor;
	};

	var toLegend = function(stats)  {
	    if (!stats || !stats.length) {
	        return [];
	    }

	    var sample = stats[stats.length-1];

	    return Object.keys(sample.data).map( function(key)  {
	        return {
	            label: key,
	            color: color(key)
	        };
	    });
	};

	var mapData = function(stats, player)  {
	    var dataPoints = [],
	        lastPoint  = null,
	        propName   = 'mmr';

	    stats.forEach( function(s)  {
	        var value = lastPoint;
	        if (s.data[player] && s.data[player][propName] !== undefined)
	            lastPoint = value = parseInt(s.data[player][propName], 10);
	        dataPoints.push(value);
	    });

	    return dataPoints;
	};

	var toChart = function(stats)  {
	    stats = stats.reverse();

	    if (!stats || !stats.length) {
	        return {};
	    }

	    var sample  = stats[stats.length-1];
	    var players = Object.keys(sample.data);

	    var labels = stats.map( function(s)  {return '';} );

	    var datasets = players.map( function(player)  { return {
	            label: player,
	            strokeColor: color(player),
	            pointColor: color(player),
	            pointStrokeColor: color(player),
	            pointHighlightFill: '#fff',
	            pointHighlightStroke: color(player),
	            data: mapData(stats, player)
	        };
	    });


	    return {
	        labels:labels,
	        datasets:datasets
	    };
	};

	module.exports = {
	    toLegend:toLegend,
	    toChart:toChart
	};


/***/ },
/* 161 */,
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  Bar: __webpack_require__(218),
	  Doughnut: __webpack_require__(219),
	  Line: __webpack_require__(220),
	  Pie: __webpack_require__(221),
	  PolarArea: __webpack_require__(222),
	  Radar: __webpack_require__(223),
	  createClass: __webpack_require__(224).createClass
	};


/***/ },
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "93599fa95f8713a2175ea8ff4501f804.jpg"

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */

	var invariant = __webpack_require__(88);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSSCore.addClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSSCore.removeClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className
	          .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
	          .replace(/\s+/g, ' ') // multiple spaces to one
	          .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSS.hasClass takes only a single class name.'
	    ) : invariant(!/\s/.test(className)));
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }

	};

	module.exports = CSSCore;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	"use strict";

	var ExecutionEnvironment = __webpack_require__(53);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;


/***/ },
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);

	__webpack_require__(225);


	module.exports = React.createClass({displayName: "exports",
	    getInitialState: function() {
	        return {
	            showStats: false
	        };
	    },

	    onClick: function() {
	        this.setState({
	            showStats: !this.state.showStats
	        });
	    },

	    render: function() {
	        var player = this.props.player,
	            heroClassName = 'player__hero-icon--' + player.hero_id,
	            classes = React.addons.classSet({
	                'player': true,
	                'is-expanded': this.state.showStats
	            }),
	            playerNameClasses = React.addons.classSet({
	                'player__name': !this.props.isisInTeam,
	                'player__name--in-team': this.props.isInTeam
	            }),
	            statsContent;

	        if (this.state.showStats) {
	            statsContent = (
	              React.createElement("dl", {className: "player__stats"}, 
	                React.createElement("dt", {className: "player__stats__label"}, "LVL"), 
	                React.createElement("dd", {className: "player__stats__value"}, player.level), 
	                React.createElement("dt", {className: "player__stats__label"}, "APM"), 
	                React.createElement("dd", {className: "player__stats__value"}, player.apm), 
	                React.createElement("dt", {className: "player__stats__label"}, "GPM"), 
	                React.createElement("dd", {className: "player__stats__value"}, player.gpm), 
	                React.createElement("dt", {className: "player__stats__label"}, "XPM"), 
	                React.createElement("dd", {className: "player__stats__value"}, player.xpm)
	              )
	            );
	        } else {
	            statsContent = (
	              React.createElement("dl", {className: "player__stats is-hidden"})
	            );
	        }

	        return (
	          React.createElement("li", {className: classes, onClick: this.onClick}, 
	              React.createElement("div", {className: "player__wrapper--left"}, 
	                React.createElement("span", {className: heroClassName}), 
	                React.createElement("span", {className: playerNameClasses}, 
	                  player.nickname
	                ), 
	                statsContent
	              ), 
	              React.createElement("div", {className: "player__wrapper--right"}, 
	                React.createElement("span", {className: "player__kills"}, player.herokills), 
	                React.createElement("span", {className: "player__deaths"}, player.deaths), 
	                React.createElement("span", {className: "player__assists"}, player.heroassists)
	              )
	          )
	        );
	    }
	});
	/*
	apm: "122"
	deaths: "5"
	delta_mmr: "4.940"
	denies: "6"
	gpm: "349"
	hero_id: "14"
	heroassists: "10"
	herokills: "8"
	lasthits: "133"
	level: "19"
	nickname: "kha_alim"
	wards: "0"
	xpm: "517"
	*/



/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    team: [
	        'Adelsmansman',
	        'Pacoloco',
	        'Schln',
	        'skepparn_',
	        'zwex'
	    ]
	};


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/team/team.styl", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/team/team.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".team:nth-of-type(2) {\n  margin-top: 20px;\n}\n@media screen and (min-width: 700px) {\n  .team:nth-of-type(2) {\n    margin-top: 0px;\n  }\n}\n.team--winning .team__name {\n  color: #27ae60;\n}\n.team__name {\n  font-weight: 300;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px;\n}\n.team__name__winning {\n  padding-left: 10px;\n}\n.team__players {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  line-height: 1.4em;\n}\n", ""]);

/***/ },
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(224);

	module.exports = vars.createClass('Bar', ['getBarsAtEvent']);


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(224);

	module.exports = vars.createClass('Doughnut', ['getSegmentsAtEvent']);


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(224);

	module.exports = vars.createClass('Line', ['getPointsAtEvent']);


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(224);

	module.exports = vars.createClass('Pie', ['getSegmentsAtEvent']);


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(224);

	module.exports = vars.createClass('PolarArea', ['getSegmentsAtEvent']);


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(224);

	module.exports = vars.createClass('Radar', ['getPointsAtEvent']);


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  createClass: function(chartType, methodNames, dataKey) {
	    var classData = {
	      displayName: chartType + 'Chart',
	      getInitialState: function() { return {}; },
	      render: function() {
	        var _props = {
	          ref: 'canvass'
	        };
	        for (var name in this.props) {
	          if (this.props.hasOwnProperty(name)) {
	            if (name !== 'data' && name !== 'options') {
	              _props[name] = this.props[name];
	            }
	          }
	        }
	        return React.createElement('canvas', _props);
	      }
	    };

	    var extras = ['clear', 'stop', 'resize', 'toBase64Image', 'generateLegend', 'update', 'addData', 'removeData'];
	    function extra(type) {
	      classData[type] = function() {
	        this.state.chart[name].apply(this.state.chart, arguments);
	      };
	    }

	    classData.componentDidMount = function() {
	      this.initializeChart(this.props);
	    };

	    classData.componentWillUnmount = function() {
	      var chart = this.state.chart;
	      chart.destroy();
	    };

	    classData.componentWillReceiveProps = function(nextProps) {
	      var chart = this.state.chart;
	      if (this.props.redraw) {
	        chart.destroy();
	        this.initializeChart(nextProps);
	      } else {
	        dataKey = dataKey || dataKeys[chart.name];
	        updatePoints(nextProps, chart, dataKey);
	        chart.update();
	      }
	    };

	    classData.initializeChart = function(nextProps) {
	      var Chart = __webpack_require__(231);
	      var el = this.getDOMNode();
	      var ctx = el.getContext("2d");
	      var chart = new Chart(ctx)[chartType](nextProps.data, nextProps.options || {});
	      this.state.chart = chart;
	    };

	    // return the chartjs instance
	    classData.getChart = function() {
	      return this.state.chart;
	    };

	    // return the canvass element that contains the chart
	    classData.getCanvass = function() {
	      return this.refs.canvass.getDOMNode();
	    };

	    var i;
	    for (i=0; i<extras.length; i++) {
	      extra(extras[i]);
	    }
	    for (i=0; i<methodNames.length; i++) {
	      extra(methodNames[i]);
	    }

	    var React = __webpack_require__(3);
	    return React.createClass(classData);
	  }
	};

	var dataKeys = {
	  'Line': 'points',
	  'Radar': 'points',
	  'Bar': 'bars'
	};

	var updatePoints = function(nextProps, chart, dataKey) {
	  var name = chart.name;

	  if (name === 'PolarArea' || name === 'Pie' || name === 'Doughnut') {
	    nextProps.data.forEach(function(segment, segmentIndex) {
	      chart.segments[segmentIndex].value = segment.value;
	    });
	  } else {
	    nextProps.data.datasets.forEach(function(set, setIndex) {
	      set.data.forEach(function(val, pointIndex) {
	        chart.datasets[setIndex][dataKey][pointIndex].value = val;
	      });
	    });
	  }
	};






/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/player/player.styl", function() {
			var newContent = require("!!/Users/chris.skeppstedt/code/larz-client/node_modules/css-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/postcss-loader/index.js!/Users/chris.skeppstedt/code/larz-client/node_modules/stylus-loader/index.js!/Users/chris.skeppstedt/code/larz-client/app/component/player/player.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	exports.push([module.id, ".digit-border,\n.player__deaths,\n.player__assists {\n  border-left: 1px solid #aaa;\n}\n.player {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  color: #aaa;\n  -webkit-transition: all 0.3s ease;\n          transition: all 0.3s ease;\n  background-color: #ddd;\n  cursor: pointer;\n}\n.player:hover {\n  background-color: rgba(253,227,167,0.4);\n}\n.player.is-expanded {\n  background-color: #fde3a7;\n}\n.player__wrapper--left {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n}\n.player__wrapper--right {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.player__name,\n.player__name--in-team {\n  line-height: 24px;\n  height: 24px;\n  display: inline-block;\n  color: #aaa;\n  font-weight: 200;\n  vertical-align: middle;\n  margin-left: 5px;\n}\n.player__name--in-team {\n  color: #000;\n}\n.player__kills {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  line-height: 24px;\n  height: 24px;\n  color: #27ae60;\n}\n.player__deaths {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  line-height: 24px;\n  height: 24px;\n  color: #c0392b;\n}\n.player__assists {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  line-height: 24px;\n  height: 24px;\n  color: #7f8c8d;\n}\n.player__stats {\n  font-size: 80%;\n  padding-top: 5px;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n  -webkit-transition: all 0.15s ease;\n          transition: all 0.15s ease;\n}\n.player__stats.is-hidden {\n  padding-top: 0;\n  visibility: hidden;\n  -webkit-transform: translate3d(-10%, 0, 0);\n          transform: translate3d(-10%, 0, 0);\n  opacity: 0.5;\n}\n.player__stats__label {\n  float: left;\n  font-weight: 400;\n  color: #333;\n  margin: 0;\n  margin-left: 29px;\n  padding-bottom: 5px;\n  width: 30px;\n}\n.player__stats__label:nth-of-type(2n+1) {\n  clear: left;\n}\n.player__stats__value {\n  float: left;\n  color: #333;\n  padding-bottom: 5px;\n  width: 40px;\n}\n.player__hero-icon,\n.player__hero-icon--10,\n.player__hero-icon--102,\n.player__hero-icon--103,\n.player__hero-icon--104,\n.player__hero-icon--105,\n.player__hero-icon--106,\n.player__hero-icon--108,\n.player__hero-icon--109,\n.player__hero-icon--110,\n.player__hero-icon--114,\n.player__hero-icon--115,\n.player__hero-icon--116,\n.player__hero-icon--117,\n.player__hero-icon--12,\n.player__hero-icon--120,\n.player__hero-icon--121,\n.player__hero-icon--122,\n.player__hero-icon--123,\n.player__hero-icon--124,\n.player__hero-icon--125,\n.player__hero-icon--126,\n.player__hero-icon--127,\n.player__hero-icon--128,\n.player__hero-icon--13,\n.player__hero-icon--14,\n.player__hero-icon--15,\n.player__hero-icon--16,\n.player__hero-icon--160,\n.player__hero-icon--161,\n.player__hero-icon--162,\n.player__hero-icon--163,\n.player__hero-icon--164,\n.player__hero-icon--165,\n.player__hero-icon--166,\n.player__hero-icon--167,\n.player__hero-icon--168,\n.player__hero-icon--169,\n.player__hero-icon--17,\n.player__hero-icon--170,\n.player__hero-icon--18,\n.player__hero-icon--185,\n.player__hero-icon--187,\n.player__hero-icon--188,\n.player__hero-icon--192,\n.player__hero-icon--194,\n.player__hero-icon--195,\n.player__hero-icon--196,\n.player__hero-icon--197,\n.player__hero-icon--2,\n.player__hero-icon--20,\n.player__hero-icon--201,\n.player__hero-icon--202,\n.player__hero-icon--203,\n.player__hero-icon--204,\n.player__hero-icon--205,\n.player__hero-icon--206,\n.player__hero-icon--207,\n.player__hero-icon--208,\n.player__hero-icon--209,\n.player__hero-icon--21,\n.player__hero-icon--210,\n.player__hero-icon--211,\n.player__hero-icon--212,\n.player__hero-icon--213,\n.player__hero-icon--214,\n.player__hero-icon--215,\n.player__hero-icon--216,\n.player__hero-icon--217,\n.player__hero-icon--218,\n.player__hero-icon--219,\n.player__hero-icon--22,\n.player__hero-icon--220,\n.player__hero-icon--221,\n.player__hero-icon--222,\n.player__hero-icon--223,\n.player__hero-icon--224,\n.player__hero-icon--225,\n.player__hero-icon--226,\n.player__hero-icon--227,\n.player__hero-icon--228,\n.player__hero-icon--229,\n.player__hero-icon--230,\n.player__hero-icon--232,\n.player__hero-icon--233,\n.player__hero-icon--234,\n.player__hero-icon--235,\n.player__hero-icon--236,\n.player__hero-icon--237,\n.player__hero-icon--238,\n.player__hero-icon--24,\n.player__hero-icon--240,\n.player__hero-icon--241,\n.player__hero-icon--242,\n.player__hero-icon--243,\n.player__hero-icon--25,\n.player__hero-icon--26,\n.player__hero-icon--27,\n.player__hero-icon--29,\n.player__hero-icon--3,\n.player__hero-icon--30,\n.player__hero-icon--31,\n.player__hero-icon--34,\n.player__hero-icon--35,\n.player__hero-icon--36,\n.player__hero-icon--37,\n.player__hero-icon--38,\n.player__hero-icon--39,\n.player__hero-icon--4,\n.player__hero-icon--40,\n.player__hero-icon--41,\n.player__hero-icon--42,\n.player__hero-icon--43,\n.player__hero-icon--44,\n.player__hero-icon--5,\n.player__hero-icon--6,\n.player__hero-icon--7,\n.player__hero-icon--8,\n.player__hero-icon--89,\n.player__hero-icon--9,\n.player__hero-icon--90,\n.player__hero-icon--91,\n.player__hero-icon--92,\n.player__hero-icon--93,\n.player__hero-icon--94,\n.player__hero-icon--95,\n.player__hero-icon--96,\n.player__hero-icon--239 {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  vertical-align: middle;\n}\n.player__hero-icon--10 {\n  background-image: url("+__webpack_require__(232)+");\n}\n.player__hero-icon--102 {\n  background-image: url("+__webpack_require__(233)+");\n}\n.player__hero-icon--103 {\n  background-image: url("+__webpack_require__(234)+");\n}\n.player__hero-icon--104 {\n  background-image: url("+__webpack_require__(235)+");\n}\n.player__hero-icon--105 {\n  background-image: url("+__webpack_require__(236)+");\n}\n.player__hero-icon--106 {\n  background-image: url("+__webpack_require__(237)+");\n}\n.player__hero-icon--108 {\n  background-image: url("+__webpack_require__(238)+");\n}\n.player__hero-icon--109 {\n  background-image: url("+__webpack_require__(239)+");\n}\n.player__hero-icon--110 {\n  background-image: url("+__webpack_require__(240)+");\n}\n.player__hero-icon--114 {\n  background-image: url("+__webpack_require__(241)+");\n}\n.player__hero-icon--115 {\n  background-image: url("+__webpack_require__(242)+");\n}\n.player__hero-icon--116 {\n  background-image: url("+__webpack_require__(243)+");\n}\n.player__hero-icon--117 {\n  background-image: url("+__webpack_require__(245)+");\n}\n.player__hero-icon--12 {\n  background-image: url("+__webpack_require__(244)+");\n}\n.player__hero-icon--120 {\n  background-image: url("+__webpack_require__(246)+");\n}\n.player__hero-icon--121 {\n  background-image: url("+__webpack_require__(248)+");\n}\n.player__hero-icon--122 {\n  background-image: url("+__webpack_require__(247)+");\n}\n.player__hero-icon--123 {\n  background-image: url("+__webpack_require__(249)+");\n}\n.player__hero-icon--124 {\n  background-image: url("+__webpack_require__(250)+");\n}\n.player__hero-icon--125 {\n  background-image: url("+__webpack_require__(251)+");\n}\n.player__hero-icon--126 {\n  background-image: url("+__webpack_require__(252)+");\n}\n.player__hero-icon--127 {\n  background-image: url("+__webpack_require__(253)+");\n}\n.player__hero-icon--128 {\n  background-image: url("+__webpack_require__(254)+");\n}\n.player__hero-icon--13 {\n  background-image: url("+__webpack_require__(255)+");\n}\n.player__hero-icon--14 {\n  background-image: url("+__webpack_require__(256)+");\n}\n.player__hero-icon--15 {\n  background-image: url("+__webpack_require__(257)+");\n}\n.player__hero-icon--16 {\n  background-image: url("+__webpack_require__(258)+");\n}\n.player__hero-icon--160 {\n  background-image: url("+__webpack_require__(259)+");\n}\n.player__hero-icon--161 {\n  background-image: url("+__webpack_require__(260)+");\n}\n.player__hero-icon--162 {\n  background-image: url("+__webpack_require__(261)+");\n}\n.player__hero-icon--163 {\n  background-image: url("+__webpack_require__(262)+");\n}\n.player__hero-icon--164 {\n  background-image: url("+__webpack_require__(263)+");\n}\n.player__hero-icon--165 {\n  background-image: url("+__webpack_require__(264)+");\n}\n.player__hero-icon--166 {\n  background-image: url("+__webpack_require__(265)+");\n}\n.player__hero-icon--167 {\n  background-image: url("+__webpack_require__(266)+");\n}\n.player__hero-icon--168 {\n  background-image: url("+__webpack_require__(267)+");\n}\n.player__hero-icon--169 {\n  background-image: url("+__webpack_require__(268)+");\n}\n.player__hero-icon--17 {\n  background-image: url("+__webpack_require__(269)+");\n}\n.player__hero-icon--170 {\n  background-image: url("+__webpack_require__(270)+");\n}\n.player__hero-icon--18 {\n  background-image: url("+__webpack_require__(271)+");\n}\n.player__hero-icon--185 {\n  background-image: url("+__webpack_require__(272)+");\n}\n.player__hero-icon--187 {\n  background-image: url("+__webpack_require__(273)+");\n}\n.player__hero-icon--188 {\n  background-image: url("+__webpack_require__(274)+");\n}\n.player__hero-icon--192 {\n  background-image: url("+__webpack_require__(275)+");\n}\n.player__hero-icon--194 {\n  background-image: url("+__webpack_require__(276)+");\n}\n.player__hero-icon--195 {\n  background-image: url("+__webpack_require__(277)+");\n}\n.player__hero-icon--196 {\n  background-image: url("+__webpack_require__(278)+");\n}\n.player__hero-icon--197 {\n  background-image: url("+__webpack_require__(279)+");\n}\n.player__hero-icon--2 {\n  background-image: url("+__webpack_require__(280)+");\n}\n.player__hero-icon--20 {\n  background-image: url("+__webpack_require__(281)+");\n}\n.player__hero-icon--201 {\n  background-image: url("+__webpack_require__(282)+");\n}\n.player__hero-icon--202 {\n  background-image: url("+__webpack_require__(283)+");\n}\n.player__hero-icon--203 {\n  background-image: url("+__webpack_require__(284)+");\n}\n.player__hero-icon--204 {\n  background-image: url("+__webpack_require__(285)+");\n}\n.player__hero-icon--205 {\n  background-image: url("+__webpack_require__(286)+");\n}\n.player__hero-icon--206 {\n  background-image: url("+__webpack_require__(287)+");\n}\n.player__hero-icon--207 {\n  background-image: url("+__webpack_require__(288)+");\n}\n.player__hero-icon--208 {\n  background-image: url("+__webpack_require__(289)+");\n}\n.player__hero-icon--209 {\n  background-image: url("+__webpack_require__(290)+");\n}\n.player__hero-icon--21 {\n  background-image: url("+__webpack_require__(291)+");\n}\n.player__hero-icon--210 {\n  background-image: url("+__webpack_require__(292)+");\n}\n.player__hero-icon--211 {\n  background-image: url("+__webpack_require__(293)+");\n}\n.player__hero-icon--212 {\n  background-image: url("+__webpack_require__(294)+");\n}\n.player__hero-icon--213 {\n  background-image: url("+__webpack_require__(295)+");\n}\n.player__hero-icon--214 {\n  background-image: url("+__webpack_require__(296)+");\n}\n.player__hero-icon--215 {\n  background-image: url("+__webpack_require__(297)+");\n}\n.player__hero-icon--216 {\n  background-image: url("+__webpack_require__(298)+");\n}\n.player__hero-icon--217 {\n  background-image: url("+__webpack_require__(299)+");\n}\n.player__hero-icon--218 {\n  background-image: url("+__webpack_require__(300)+");\n}\n.player__hero-icon--219 {\n  background-image: url("+__webpack_require__(301)+");\n}\n.player__hero-icon--22 {\n  background-image: url("+__webpack_require__(302)+");\n}\n.player__hero-icon--220 {\n  background-image: url("+__webpack_require__(303)+");\n}\n.player__hero-icon--221 {\n  background-image: url("+__webpack_require__(304)+");\n}\n.player__hero-icon--222 {\n  background-image: url("+__webpack_require__(305)+");\n}\n.player__hero-icon--223 {\n  background-image: url("+__webpack_require__(306)+");\n}\n.player__hero-icon--224 {\n  background-image: url("+__webpack_require__(307)+");\n}\n.player__hero-icon--225 {\n  background-image: url("+__webpack_require__(308)+");\n}\n.player__hero-icon--226 {\n  background-image: url("+__webpack_require__(309)+");\n}\n.player__hero-icon--227 {\n  background-image: url("+__webpack_require__(310)+");\n}\n.player__hero-icon--228 {\n  background-image: url("+__webpack_require__(311)+");\n}\n.player__hero-icon--229 {\n  background-image: url("+__webpack_require__(312)+");\n}\n.player__hero-icon--230 {\n  background-image: url("+__webpack_require__(313)+");\n}\n.player__hero-icon--232 {\n  background-image: url("+__webpack_require__(314)+");\n}\n.player__hero-icon--233 {\n  background-image: url("+__webpack_require__(315)+");\n}\n.player__hero-icon--234 {\n  background-image: url("+__webpack_require__(316)+");\n}\n.player__hero-icon--235 {\n  background-image: url("+__webpack_require__(317)+");\n}\n.player__hero-icon--236 {\n  background-image: url("+__webpack_require__(318)+");\n}\n.player__hero-icon--237 {\n  background-image: url("+__webpack_require__(319)+");\n}\n.player__hero-icon--238 {\n  background-image: url("+__webpack_require__(320)+");\n}\n.player__hero-icon--24 {\n  background-image: url("+__webpack_require__(321)+");\n}\n.player__hero-icon--240 {\n  background-image: url("+__webpack_require__(322)+");\n}\n.player__hero-icon--241 {\n  background-image: url("+__webpack_require__(323)+");\n}\n.player__hero-icon--242 {\n  background-image: url("+__webpack_require__(324)+");\n}\n.player__hero-icon--243 {\n  background-image: url("+__webpack_require__(325)+");\n}\n.player__hero-icon--25 {\n  background-image: url("+__webpack_require__(326)+");\n}\n.player__hero-icon--26 {\n  background-image: url("+__webpack_require__(327)+");\n}\n.player__hero-icon--27 {\n  background-image: url("+__webpack_require__(328)+");\n}\n.player__hero-icon--29 {\n  background-image: url("+__webpack_require__(329)+");\n}\n.player__hero-icon--3 {\n  background-image: url("+__webpack_require__(330)+");\n}\n.player__hero-icon--30 {\n  background-image: url("+__webpack_require__(331)+");\n}\n.player__hero-icon--31 {\n  background-image: url("+__webpack_require__(332)+");\n}\n.player__hero-icon--34 {\n  background-image: url("+__webpack_require__(333)+");\n}\n.player__hero-icon--35 {\n  background-image: url("+__webpack_require__(334)+");\n}\n.player__hero-icon--36 {\n  background-image: url("+__webpack_require__(335)+");\n}\n.player__hero-icon--37 {\n  background-image: url("+__webpack_require__(337)+");\n}\n.player__hero-icon--38 {\n  background-image: url("+__webpack_require__(336)+");\n}\n.player__hero-icon--39 {\n  background-image: url("+__webpack_require__(338)+");\n}\n.player__hero-icon--4 {\n  background-image: url("+__webpack_require__(339)+");\n}\n.player__hero-icon--40 {\n  background-image: url("+__webpack_require__(340)+");\n}\n.player__hero-icon--41 {\n  background-image: url("+__webpack_require__(341)+");\n}\n.player__hero-icon--42 {\n  background-image: url("+__webpack_require__(342)+");\n}\n.player__hero-icon--43 {\n  background-image: url("+__webpack_require__(343)+");\n}\n.player__hero-icon--44 {\n  background-image: url("+__webpack_require__(344)+");\n}\n.player__hero-icon--5 {\n  background-image: url("+__webpack_require__(345)+");\n}\n.player__hero-icon--6 {\n  background-image: url("+__webpack_require__(346)+");\n}\n.player__hero-icon--7 {\n  background-image: url("+__webpack_require__(347)+");\n}\n.player__hero-icon--8 {\n  background-image: url("+__webpack_require__(348)+");\n}\n.player__hero-icon--89 {\n  background-image: url("+__webpack_require__(349)+");\n}\n.player__hero-icon--9 {\n  background-image: url("+__webpack_require__(350)+");\n}\n.player__hero-icon--90 {\n  background-image: url("+__webpack_require__(351)+");\n}\n.player__hero-icon--91 {\n  background-image: url("+__webpack_require__(352)+");\n}\n.player__hero-icon--92 {\n  background-image: url("+__webpack_require__(353)+");\n}\n.player__hero-icon--93 {\n  background-image: url("+__webpack_require__(354)+");\n}\n.player__hero-icon--94 {\n  background-image: url("+__webpack_require__(355)+");\n}\n.player__hero-icon--95 {\n  background-image: url("+__webpack_require__(356)+");\n}\n.player__hero-icon--96 {\n  background-image: url("+__webpack_require__(357)+");\n}\n.player__hero-icon--239 {\n  background-image: url("+__webpack_require__(358)+");\n}\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n", ""]);

/***/ },
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Chart.js
	 * http://chartjs.org/
	 * Version: 1.0.2
	 *
	 * Copyright 2015 Nick Downie
	 * Released under the MIT license
	 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
	 */


	(function(){

		"use strict";

		//Declare root variable - window in the browser, global on the server
		var root = this,
			previous = root.Chart;

		//Occupy the global variable of Chart, and create a simple base class
		var Chart = function(context){
			var chart = this;
			this.canvas = context.canvas;

			this.ctx = context;

			//Variables global to the chart
			var computeDimension = function(element,dimension)
			{
				if (element['offset'+dimension])
				{
					return element['offset'+dimension];
				}
				else
				{
					return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
				}
			}

			var width = this.width = computeDimension(context.canvas,'Width');
			var height = this.height = computeDimension(context.canvas,'Height');

			// Firefox requires this to work correctly
			context.canvas.width  = width;
			context.canvas.height = height;

			var width = this.width = context.canvas.width;
			var height = this.height = context.canvas.height;
			this.aspectRatio = this.width / this.height;
			//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
			helpers.retinaScale(this);

			return this;
		};
		//Globally expose the defaults to allow for user updating/changing
		Chart.defaults = {
			global: {
				// Boolean - Whether to animate the chart
				animation: true,

				// Number - Number of animation steps
				animationSteps: 60,

				// String - Animation easing effect
				animationEasing: "easeOutQuart",

				// Boolean - If we should show the scale at all
				showScale: true,

				// Boolean - If we want to override with a hard coded scale
				scaleOverride: false,

				// ** Required if scaleOverride is true **
				// Number - The number of steps in a hard coded scale
				scaleSteps: null,
				// Number - The value jump in the hard coded scale
				scaleStepWidth: null,
				// Number - The scale starting value
				scaleStartValue: null,

				// String - Colour of the scale line
				scaleLineColor: "rgba(0,0,0,.1)",

				// Number - Pixel width of the scale line
				scaleLineWidth: 1,

				// Boolean - Whether to show labels on the scale
				scaleShowLabels: true,

				// Interpolated JS string - can access value
				scaleLabel: "<%=value%>",

				// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
				scaleIntegersOnly: true,

				// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
				scaleBeginAtZero: false,

				// String - Scale label font declaration for the scale label
				scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Scale label font size in pixels
				scaleFontSize: 12,

				// String - Scale label font weight style
				scaleFontStyle: "normal",

				// String - Scale label font colour
				scaleFontColor: "#666",

				// Boolean - whether or not the chart should be responsive and resize when the browser does.
				responsive: false,

				// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
				maintainAspectRatio: true,

				// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
				showTooltips: true,

				// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
				customTooltips: false,

				// Array - Array of string names to attach tooltip events
				tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

				// String - Tooltip background colour
				tooltipFillColor: "rgba(0,0,0,0.8)",

				// String - Tooltip label font declaration for the scale label
				tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Tooltip label font size in pixels
				tooltipFontSize: 14,

				// String - Tooltip font weight style
				tooltipFontStyle: "normal",

				// String - Tooltip label font colour
				tooltipFontColor: "#fff",

				// String - Tooltip title font declaration for the scale label
				tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Tooltip title font size in pixels
				tooltipTitleFontSize: 14,

				// String - Tooltip title font weight style
				tooltipTitleFontStyle: "bold",

				// String - Tooltip title font colour
				tooltipTitleFontColor: "#fff",

				// Number - pixel width of padding around tooltip text
				tooltipYPadding: 6,

				// Number - pixel width of padding around tooltip text
				tooltipXPadding: 6,

				// Number - Size of the caret on the tooltip
				tooltipCaretSize: 8,

				// Number - Pixel radius of the tooltip border
				tooltipCornerRadius: 6,

				// Number - Pixel offset from point x to tooltip edge
				tooltipXOffset: 10,

				// String - Template string for single tooltips
				tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

				// String - Template string for single tooltips
				multiTooltipTemplate: "<%= value %>",

				// String - Colour behind the legend colour block
				multiTooltipKeyBackground: '#fff',

				// Function - Will fire on animation progression.
				onAnimationProgress: function(){},

				// Function - Will fire on animation completion.
				onAnimationComplete: function(){}

			}
		};

		//Create a dictionary of chart types, to allow for extension of existing types
		Chart.types = {};

		//Global Chart helpers object for utility methods and classes
		var helpers = Chart.helpers = {};

			//-- Basic js utility methods
		var each = helpers.each = function(loopable,callback,self){
				var additionalArgs = Array.prototype.slice.call(arguments, 3);
				// Check to see if null or undefined firstly.
				if (loopable){
					if (loopable.length === +loopable.length){
						var i;
						for (i=0; i<loopable.length; i++){
							callback.apply(self,[loopable[i], i].concat(additionalArgs));
						}
					}
					else{
						for (var item in loopable){
							callback.apply(self,[loopable[item],item].concat(additionalArgs));
						}
					}
				}
			},
			clone = helpers.clone = function(obj){
				var objClone = {};
				each(obj,function(value,key){
					if (obj.hasOwnProperty(key)) objClone[key] = value;
				});
				return objClone;
			},
			extend = helpers.extend = function(base){
				each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
					each(extensionObject,function(value,key){
						if (extensionObject.hasOwnProperty(key)) base[key] = value;
					});
				});
				return base;
			},
			merge = helpers.merge = function(base,master){
				//Merge properties in left object over to a shallow clone of object right.
				var args = Array.prototype.slice.call(arguments,0);
				args.unshift({});
				return extend.apply(null, args);
			},
			indexOf = helpers.indexOf = function(arrayToSearch, item){
				if (Array.prototype.indexOf) {
					return arrayToSearch.indexOf(item);
				}
				else{
					for (var i = 0; i < arrayToSearch.length; i++) {
						if (arrayToSearch[i] === item) return i;
					}
					return -1;
				}
			},
			where = helpers.where = function(collection, filterCallback){
				var filtered = [];

				helpers.each(collection, function(item){
					if (filterCallback(item)){
						filtered.push(item);
					}
				});

				return filtered;
			},
			findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
				// Default to start of the array
				if (!startIndex){
					startIndex = -1;
				}
				for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
					var currentItem = arrayToSearch[i];
					if (filterCallback(currentItem)){
						return currentItem;
					}
				}
			},
			findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
				// Default to end of the array
				if (!startIndex){
					startIndex = arrayToSearch.length;
				}
				for (var i = startIndex - 1; i >= 0; i--) {
					var currentItem = arrayToSearch[i];
					if (filterCallback(currentItem)){
						return currentItem;
					}
				}
			},
			inherits = helpers.inherits = function(extensions){
				//Basic javascript inheritance based on the model created in Backbone.js
				var parent = this;
				var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

				var Surrogate = function(){ this.constructor = ChartElement;};
				Surrogate.prototype = parent.prototype;
				ChartElement.prototype = new Surrogate();

				ChartElement.extend = inherits;

				if (extensions) extend(ChartElement.prototype, extensions);

				ChartElement.__super__ = parent.prototype;

				return ChartElement;
			},
			noop = helpers.noop = function(){},
			uid = helpers.uid = (function(){
				var id=0;
				return function(){
					return "chart-" + id++;
				};
			})(),
			warn = helpers.warn = function(str){
				//Method for warning of errors
				if (window.console && typeof window.console.warn == "function") console.warn(str);
			},
			amd = helpers.amd = ("function" == 'function' && __webpack_require__(360)),
			//-- Math methods
			isNumber = helpers.isNumber = function(n){
				return !isNaN(parseFloat(n)) && isFinite(n);
			},
			max = helpers.max = function(array){
				return Math.max.apply( Math, array );
			},
			min = helpers.min = function(array){
				return Math.min.apply( Math, array );
			},
			cap = helpers.cap = function(valueToCap,maxValue,minValue){
				if(isNumber(maxValue)) {
					if( valueToCap > maxValue ) {
						return maxValue;
					}
				}
				else if(isNumber(minValue)){
					if ( valueToCap < minValue ){
						return minValue;
					}
				}
				return valueToCap;
			},
			getDecimalPlaces = helpers.getDecimalPlaces = function(num){
				if (num%1!==0 && isNumber(num)){
					return num.toString().split(".")[1].length;
				}
				else {
					return 0;
				}
			},
			toRadians = helpers.radians = function(degrees){
				return degrees * (Math.PI/180);
			},
			// Gets the angle from vertical upright to the point about a centre.
			getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
				var distanceFromXCenter = anglePoint.x - centrePoint.x,
					distanceFromYCenter = anglePoint.y - centrePoint.y,
					radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


				var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

				//If the segment is in the top left quadrant, we need to add another rotation to the angle
				if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
					angle += Math.PI*2;
				}

				return {
					angle: angle,
					distance: radialDistanceFromCenter
				};
			},
			aliasPixel = helpers.aliasPixel = function(pixelWidth){
				return (pixelWidth % 2 === 0) ? 0 : 0.5;
			},
			splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
				//Props to Rob Spencer at scaled innovation for his post on splining between points
				//http://scaledinnovation.com/analytics/splines/aboutSplines.html
				var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
					d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
					fa=t*d01/(d01+d12),// scaling factor for triangle Ta
					fb=t*d12/(d01+d12);
				return {
					inner : {
						x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
						y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
					},
					outer : {
						x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
						y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
					}
				};
			},
			calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
				return Math.floor(Math.log(val) / Math.LN10);
			},
			calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

				//Set a minimum step of two - a point at the top of the graph, and a point at the base
				var minSteps = 2,
					maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
					skipFitting = (minSteps >= maxSteps);

				var maxValue = max(valuesArray),
					minValue = min(valuesArray);

				// We need some degree of seperation here to calculate the scales if all the values are the same
				// Adding/minusing 0.5 will give us a range of 1.
				if (maxValue === minValue){
					maxValue += 0.5;
					// So we don't end up with a graph with a negative start value if we've said always start from zero
					if (minValue >= 0.5 && !startFromZero){
						minValue -= 0.5;
					}
					else{
						// Make up a whole number above the values
						maxValue += 0.5;
					}
				}

				var	valueRange = Math.abs(maxValue - minValue),
					rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
					graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
					graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
					graphRange = graphMax - graphMin,
					stepValue = Math.pow(10, rangeOrderOfMagnitude),
					numberOfSteps = Math.round(graphRange / stepValue);

				//If we have more space on the graph we'll use it to give more definition to the data
				while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
					if(numberOfSteps > maxSteps){
						stepValue *=2;
						numberOfSteps = Math.round(graphRange/stepValue);
						// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
						if (numberOfSteps % 1 !== 0){
							skipFitting = true;
						}
					}
					//We can fit in double the amount of scale points on the scale
					else{
						//If user has declared ints only, and the step value isn't a decimal
						if (integersOnly && rangeOrderOfMagnitude >= 0){
							//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
							if(stepValue/2 % 1 === 0){
								stepValue /=2;
								numberOfSteps = Math.round(graphRange/stepValue);
							}
							//If it would make it a float break out of the loop
							else{
								break;
							}
						}
						//If the scale doesn't have to be an int, make the scale more granular anyway.
						else{
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}

					}
				}

				if (skipFitting){
					numberOfSteps = minSteps;
					stepValue = graphRange / numberOfSteps;
				}

				return {
					steps : numberOfSteps,
					stepValue : stepValue,
					min : graphMin,
					max	: graphMin + (numberOfSteps * stepValue)
				};

			},
			/* jshint ignore:start */
			// Blows up jshint errors based on the new Function constructor
			//Templating methods
			//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
			template = helpers.template = function(templateString, valuesObject){

				// If templateString is function rather than string-template - call the function for valuesObject

				if(templateString instanceof Function){
				 	return templateString(valuesObject);
			 	}

				var cache = {};
				function tmpl(str, data){
					// Figure out if we're getting a template, or if we need to
					// load the template - and be sure to cache the result.
					var fn = !/\W/.test(str) ?
					cache[str] = cache[str] :

					// Generate a reusable function that will serve as a template
					// generator (and which will be cached).
					new Function("obj",
						"var p=[],print=function(){p.push.apply(p,arguments);};" +

						// Introduce the data as local variables using with(){}
						"with(obj){p.push('" +

						// Convert the template into pure JavaScript
						str
							.replace(/[\r\t\n]/g, " ")
							.split("<%").join("\t")
							.replace(/((^|%>)[^\t]*)'/g, "$1\r")
							.replace(/\t=(.*?)%>/g, "',$1,'")
							.split("\t").join("');")
							.split("%>").join("p.push('")
							.split("\r").join("\\'") +
						"');}return p.join('');"
					);

					// Provide some basic currying to the user
					return data ? fn( data ) : fn;
				}
				return tmpl(templateString,valuesObject);
			},
			/* jshint ignore:end */
			generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
				var labelsArray = new Array(numberOfSteps);
				if (labelTemplateString){
					each(labelsArray,function(val,index){
						labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
					});
				}
				return labelsArray;
			},
			//--Animation methods
			//Easing functions adapted from Robert Penner's easing equations
			//http://www.robertpenner.com/easing/
			easingEffects = helpers.easingEffects = {
				linear: function (t) {
					return t;
				},
				easeInQuad: function (t) {
					return t * t;
				},
				easeOutQuad: function (t) {
					return -1 * t * (t - 2);
				},
				easeInOutQuad: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
					return -1 / 2 * ((--t) * (t - 2) - 1);
				},
				easeInCubic: function (t) {
					return t * t * t;
				},
				easeOutCubic: function (t) {
					return 1 * ((t = t / 1 - 1) * t * t + 1);
				},
				easeInOutCubic: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
					return 1 / 2 * ((t -= 2) * t * t + 2);
				},
				easeInQuart: function (t) {
					return t * t * t * t;
				},
				easeOutQuart: function (t) {
					return -1 * ((t = t / 1 - 1) * t * t * t - 1);
				},
				easeInOutQuart: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
					return -1 / 2 * ((t -= 2) * t * t * t - 2);
				},
				easeInQuint: function (t) {
					return 1 * (t /= 1) * t * t * t * t;
				},
				easeOutQuint: function (t) {
					return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
				},
				easeInOutQuint: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
					return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
				},
				easeInSine: function (t) {
					return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
				},
				easeOutSine: function (t) {
					return 1 * Math.sin(t / 1 * (Math.PI / 2));
				},
				easeInOutSine: function (t) {
					return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
				},
				easeInExpo: function (t) {
					return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
				},
				easeOutExpo: function (t) {
					return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
				},
				easeInOutExpo: function (t) {
					if (t === 0) return 0;
					if (t === 1) return 1;
					if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
					return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
				},
				easeInCirc: function (t) {
					if (t >= 1) return t;
					return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
				},
				easeOutCirc: function (t) {
					return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
				},
				easeInOutCirc: function (t) {
					if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
					return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
				},
				easeInElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1) == 1) return 1;
					if (!p) p = 1 * 0.3;
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				},
				easeOutElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1) == 1) return 1;
					if (!p) p = 1 * 0.3;
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
				},
				easeInOutElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1 / 2) == 2) return 1;
					if (!p) p = 1 * (0.3 * 1.5);
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
					return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
				},
				easeInBack: function (t) {
					var s = 1.70158;
					return 1 * (t /= 1) * t * ((s + 1) * t - s);
				},
				easeOutBack: function (t) {
					var s = 1.70158;
					return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
				},
				easeInOutBack: function (t) {
					var s = 1.70158;
					if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
					return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
				},
				easeInBounce: function (t) {
					return 1 - easingEffects.easeOutBounce(1 - t);
				},
				easeOutBounce: function (t) {
					if ((t /= 1) < (1 / 2.75)) {
						return 1 * (7.5625 * t * t);
					} else if (t < (2 / 2.75)) {
						return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
					} else if (t < (2.5 / 2.75)) {
						return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
					} else {
						return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
					}
				},
				easeInOutBounce: function (t) {
					if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
					return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
				}
			},
			//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
			requestAnimFrame = helpers.requestAnimFrame = (function(){
				return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(callback) {
						return window.setTimeout(callback, 1000 / 60);
					};
			})(),
			cancelAnimFrame = helpers.cancelAnimFrame = (function(){
				return window.cancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					window.oCancelAnimationFrame ||
					window.msCancelAnimationFrame ||
					function(callback) {
						return window.clearTimeout(callback, 1000 / 60);
					};
			})(),
			animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

				var currentStep = 0,
					easingFunction = easingEffects[easingString] || easingEffects.linear;

				var animationFrame = function(){
					currentStep++;
					var stepDecimal = currentStep/totalSteps;
					var easeDecimal = easingFunction(stepDecimal);

					callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
					onProgress.call(chartInstance,easeDecimal,stepDecimal);
					if (currentStep < totalSteps){
						chartInstance.animationFrame = requestAnimFrame(animationFrame);
					} else{
						onComplete.apply(chartInstance);
					}
				};
				requestAnimFrame(animationFrame);
			},
			//-- DOM methods
			getRelativePosition = helpers.getRelativePosition = function(evt){
				var mouseX, mouseY;
				var e = evt.originalEvent || evt,
					canvas = evt.currentTarget || evt.srcElement,
					boundingRect = canvas.getBoundingClientRect();

				if (e.touches){
					mouseX = e.touches[0].clientX - boundingRect.left;
					mouseY = e.touches[0].clientY - boundingRect.top;

				}
				else{
					mouseX = e.clientX - boundingRect.left;
					mouseY = e.clientY - boundingRect.top;
				}

				return {
					x : mouseX,
					y : mouseY
				};

			},
			addEvent = helpers.addEvent = function(node,eventType,method){
				if (node.addEventListener){
					node.addEventListener(eventType,method);
				} else if (node.attachEvent){
					node.attachEvent("on"+eventType, method);
				} else {
					node["on"+eventType] = method;
				}
			},
			removeEvent = helpers.removeEvent = function(node, eventType, handler){
				if (node.removeEventListener){
					node.removeEventListener(eventType, handler, false);
				} else if (node.detachEvent){
					node.detachEvent("on"+eventType,handler);
				} else{
					node["on" + eventType] = noop;
				}
			},
			bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
				// Create the events object if it's not already present
				if (!chartInstance.events) chartInstance.events = {};

				each(arrayOfEvents,function(eventName){
					chartInstance.events[eventName] = function(){
						handler.apply(chartInstance, arguments);
					};
					addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
				});
			},
			unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
				each(arrayOfEvents, function(handler,eventName){
					removeEvent(chartInstance.chart.canvas, eventName, handler);
				});
			},
			getMaximumWidth = helpers.getMaximumWidth = function(domNode){
				var container = domNode.parentNode;
				// TODO = check cross browser stuff with this.
				return container.clientWidth;
			},
			getMaximumHeight = helpers.getMaximumHeight = function(domNode){
				var container = domNode.parentNode;
				// TODO = check cross browser stuff with this.
				return container.clientHeight;
			},
			getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
			retinaScale = helpers.retinaScale = function(chart){
				var ctx = chart.ctx,
					width = chart.canvas.width,
					height = chart.canvas.height;

				if (window.devicePixelRatio) {
					ctx.canvas.style.width = width + "px";
					ctx.canvas.style.height = height + "px";
					ctx.canvas.height = height * window.devicePixelRatio;
					ctx.canvas.width = width * window.devicePixelRatio;
					ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
				}
			},
			//-- Canvas methods
			clear = helpers.clear = function(chart){
				chart.ctx.clearRect(0,0,chart.width,chart.height);
			},
			fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
				return fontStyle + " " + pixelSize+"px " + fontFamily;
			},
			longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
				ctx.font = font;
				var longest = 0;
				each(arrayOfStrings,function(string){
					var textWidth = ctx.measureText(string).width;
					longest = (textWidth > longest) ? textWidth : longest;
				});
				return longest;
			},
			drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
				ctx.beginPath();
				ctx.moveTo(x + radius, y);
				ctx.lineTo(x + width - radius, y);
				ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
				ctx.lineTo(x + width, y + height - radius);
				ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
				ctx.lineTo(x + radius, y + height);
				ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
				ctx.lineTo(x, y + radius);
				ctx.quadraticCurveTo(x, y, x + radius, y);
				ctx.closePath();
			};


		//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
		//Destroy method on the chart will remove the instance of the chart from this reference.
		Chart.instances = {};

		Chart.Type = function(data,options,chart){
			this.options = options;
			this.chart = chart;
			this.id = uid();
			//Add the chart instance to the global namespace
			Chart.instances[this.id] = this;

			// Initialize is always called when a chart type is created
			// By default it is a no op, but it should be extended
			if (options.responsive){
				this.resize();
			}
			this.initialize.call(this,data);
		};

		//Core methods that'll be a part of every chart type
		extend(Chart.Type.prototype,{
			initialize : function(){return this;},
			clear : function(){
				clear(this.chart);
				return this;
			},
			stop : function(){
				// Stops any current animation loop occuring
				cancelAnimFrame(this.animationFrame);
				return this;
			},
			resize : function(callback){
				this.stop();
				var canvas = this.chart.canvas,
					newWidth = getMaximumWidth(this.chart.canvas),
					newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

				canvas.width = this.chart.width = newWidth;
				canvas.height = this.chart.height = newHeight;

				retinaScale(this.chart);

				if (typeof callback === "function"){
					callback.apply(this, Array.prototype.slice.call(arguments, 1));
				}
				return this;
			},
			reflow : noop,
			render : function(reflow){
				if (reflow){
					this.reflow();
				}
				if (this.options.animation && !reflow){
					helpers.animationLoop(
						this.draw,
						this.options.animationSteps,
						this.options.animationEasing,
						this.options.onAnimationProgress,
						this.options.onAnimationComplete,
						this
					);
				}
				else{
					this.draw();
					this.options.onAnimationComplete.call(this);
				}
				return this;
			},
			generateLegend : function(){
				return template(this.options.legendTemplate,this);
			},
			destroy : function(){
				this.clear();
				unbindEvents(this, this.events);
				var canvas = this.chart.canvas;

				// Reset canvas height/width attributes starts a fresh with the canvas context
				canvas.width = this.chart.width;
				canvas.height = this.chart.height;

				// < IE9 doesn't support removeProperty
				if (canvas.style.removeProperty) {
					canvas.style.removeProperty('width');
					canvas.style.removeProperty('height');
				} else {
					canvas.style.removeAttribute('width');
					canvas.style.removeAttribute('height');
				}

				delete Chart.instances[this.id];
			},
			showTooltip : function(ChartElements, forceRedraw){
				// Only redraw the chart if we've actually changed what we're hovering on.
				if (typeof this.activeElements === 'undefined') this.activeElements = [];

				var isChanged = (function(Elements){
					var changed = false;

					if (Elements.length !== this.activeElements.length){
						changed = true;
						return changed;
					}

					each(Elements, function(element, index){
						if (element !== this.activeElements[index]){
							changed = true;
						}
					}, this);
					return changed;
				}).call(this, ChartElements);

				if (!isChanged && !forceRedraw){
					return;
				}
				else{
					this.activeElements = ChartElements;
				}
				this.draw();
				if(this.options.customTooltips){
					this.options.customTooltips(false);
				}
				if (ChartElements.length > 0){
					// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
					if (this.datasets && this.datasets.length > 1) {
						var dataArray,
							dataIndex;

						for (var i = this.datasets.length - 1; i >= 0; i--) {
							dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
							dataIndex = indexOf(dataArray, ChartElements[0]);
							if (dataIndex !== -1){
								break;
							}
						}
						var tooltipLabels = [],
							tooltipColors = [],
							medianPosition = (function(index) {

								// Get all the points at that particular index
								var Elements = [],
									dataCollection,
									xPositions = [],
									yPositions = [],
									xMax,
									yMax,
									xMin,
									yMin;
								helpers.each(this.datasets, function(dataset){
									dataCollection = dataset.points || dataset.bars || dataset.segments;
									if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
										Elements.push(dataCollection[dataIndex]);
									}
								});

								helpers.each(Elements, function(element) {
									xPositions.push(element.x);
									yPositions.push(element.y);


									//Include any colour information about the element
									tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
									tooltipColors.push({
										fill: element._saved.fillColor || element.fillColor,
										stroke: element._saved.strokeColor || element.strokeColor
									});

								}, this);

								yMin = min(yPositions);
								yMax = max(yPositions);

								xMin = min(xPositions);
								xMax = max(xPositions);

								return {
									x: (xMin > this.chart.width/2) ? xMin : xMax,
									y: (yMin + yMax)/2
								};
							}).call(this, dataIndex);

						new Chart.MultiTooltip({
							x: medianPosition.x,
							y: medianPosition.y,
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							xOffset: this.options.tooltipXOffset,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							titleTextColor: this.options.tooltipTitleFontColor,
							titleFontFamily: this.options.tooltipTitleFontFamily,
							titleFontStyle: this.options.tooltipTitleFontStyle,
							titleFontSize: this.options.tooltipTitleFontSize,
							cornerRadius: this.options.tooltipCornerRadius,
							labels: tooltipLabels,
							legendColors: tooltipColors,
							legendColorBackground : this.options.multiTooltipKeyBackground,
							title: ChartElements[0].label,
							chart: this.chart,
							ctx: this.chart.ctx,
							custom: this.options.customTooltips
						}).draw();

					} else {
						each(ChartElements, function(Element) {
							var tooltipPosition = Element.tooltipPosition();
							new Chart.Tooltip({
								x: Math.round(tooltipPosition.x),
								y: Math.round(tooltipPosition.y),
								xPadding: this.options.tooltipXPadding,
								yPadding: this.options.tooltipYPadding,
								fillColor: this.options.tooltipFillColor,
								textColor: this.options.tooltipFontColor,
								fontFamily: this.options.tooltipFontFamily,
								fontStyle: this.options.tooltipFontStyle,
								fontSize: this.options.tooltipFontSize,
								caretHeight: this.options.tooltipCaretSize,
								cornerRadius: this.options.tooltipCornerRadius,
								text: template(this.options.tooltipTemplate, Element),
								chart: this.chart,
								custom: this.options.customTooltips
							}).draw();
						}, this);
					}
				}
				return this;
			},
			toBase64Image : function(){
				return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
			}
		});

		Chart.Type.extend = function(extensions){

			var parent = this;

			var ChartType = function(){
				return parent.apply(this,arguments);
			};

			//Copy the prototype object of the this class
			ChartType.prototype = clone(parent.prototype);
			//Now overwrite some of the properties in the base class with the new extensions
			extend(ChartType.prototype, extensions);

			ChartType.extend = Chart.Type.extend;

			if (extensions.name || parent.prototype.name){

				var chartName = extensions.name || parent.prototype.name;
				//Assign any potential default values of the new chart type

				//If none are defined, we'll use a clone of the chart type this is being extended from.
				//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
				//doesn't define some defaults of their own.

				var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

				Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

				Chart.types[chartName] = ChartType;

				//Register this new chart type in the Chart prototype
				Chart.prototype[chartName] = function(data,options){
					var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
					return new ChartType(data,config,this);
				};
			} else{
				warn("Name not provided for this chart, so it hasn't been registered");
			}
			return parent;
		};

		Chart.Element = function(configuration){
			extend(this,configuration);
			this.initialize.apply(this,arguments);
			this.save();
		};
		extend(Chart.Element.prototype,{
			initialize : function(){},
			restore : function(props){
				if (!props){
					extend(this,this._saved);
				} else {
					each(props,function(key){
						this[key] = this._saved[key];
					},this);
				}
				return this;
			},
			save : function(){
				this._saved = clone(this);
				delete this._saved._saved;
				return this;
			},
			update : function(newProps){
				each(newProps,function(value,key){
					this._saved[key] = this[key];
					this[key] = value;
				},this);
				return this;
			},
			transition : function(props,ease){
				each(props,function(value,key){
					this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
				},this);
				return this;
			},
			tooltipPosition : function(){
				return {
					x : this.x,
					y : this.y
				};
			},
			hasValue: function(){
				return isNumber(this.value);
			}
		});

		Chart.Element.extend = inherits;


		Chart.Point = Chart.Element.extend({
			display: true,
			inRange: function(chartX,chartY){
				var hitDetectionRange = this.hitDetectionRadius + this.radius;
				return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
			},
			draw : function(){
				if (this.display){
					var ctx = this.ctx;
					ctx.beginPath();

					ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
					ctx.closePath();

					ctx.strokeStyle = this.strokeColor;
					ctx.lineWidth = this.strokeWidth;

					ctx.fillStyle = this.fillColor;

					ctx.fill();
					ctx.stroke();
				}


				//Quick debug for bezier curve splining
				//Highlights control points and the line between them.
				//Handy for dev - stripped in the min version.

				// ctx.save();
				// ctx.fillStyle = "black";
				// ctx.strokeStyle = "black"
				// ctx.beginPath();
				// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
				// ctx.fill();

				// ctx.beginPath();
				// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
				// ctx.fill();

				// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
				// ctx.lineTo(this.x, this.y);
				// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
				// ctx.stroke();

				// ctx.restore();



			}
		});

		Chart.Arc = Chart.Element.extend({
			inRange : function(chartX,chartY){

				var pointRelativePosition = helpers.getAngleFromPoint(this, {
					x: chartX,
					y: chartY
				});

				//Check if within the range of the open/close angle
				var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
					withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

				return (betweenAngles && withinRadius);
				//Ensure within the outside of the arc centre, but inside arc outer
			},
			tooltipPosition : function(){
				var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
					rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
				return {
					x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
					y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
				};
			},
			draw : function(animationPercent){

				var easingDecimal = animationPercent || 1;

				var ctx = this.ctx;

				ctx.beginPath();

				ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

				ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

				ctx.closePath();
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.lineJoin = 'bevel';

				if (this.showStroke){
					ctx.stroke();
				}
			}
		});

		Chart.Rectangle = Chart.Element.extend({
			draw : function(){
				var ctx = this.ctx,
					halfWidth = this.width/2,
					leftX = this.x - halfWidth,
					rightX = this.x + halfWidth,
					top = this.base - (this.base - this.y),
					halfStroke = this.strokeWidth / 2;

				// Canvas doesn't allow us to stroke inside the width so we can
				// adjust the sizes to fit if we're setting a stroke on the line
				if (this.showStroke){
					leftX += halfStroke;
					rightX -= halfStroke;
					top += halfStroke;
				}

				ctx.beginPath();

				ctx.fillStyle = this.fillColor;
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				// It'd be nice to keep this class totally generic to any rectangle
				// and simply specify which border to miss out.
				ctx.moveTo(leftX, this.base);
				ctx.lineTo(leftX, top);
				ctx.lineTo(rightX, top);
				ctx.lineTo(rightX, this.base);
				ctx.fill();
				if (this.showStroke){
					ctx.stroke();
				}
			},
			height : function(){
				return this.base - this.y;
			},
			inRange : function(chartX,chartY){
				return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
			}
		});

		Chart.Tooltip = Chart.Element.extend({
			draw : function(){

				var ctx = this.chart.ctx;

				ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

				this.xAlign = "center";
				this.yAlign = "above";

				//Distance between the actual element.y position and the start of the tooltip caret
				var caretPadding = this.caretPadding = 2;

				var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
					tooltipRectHeight = this.fontSize + 2*this.yPadding,
					tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

				if (this.x + tooltipWidth/2 >this.chart.width){
					this.xAlign = "left";
				} else if (this.x - tooltipWidth/2 < 0){
					this.xAlign = "right";
				}

				if (this.y - tooltipHeight < 0){
					this.yAlign = "below";
				}


				var tooltipX = this.x - tooltipWidth/2,
					tooltipY = this.y - tooltipHeight;

				ctx.fillStyle = this.fillColor;

				// Custom Tooltips
				if(this.custom){
					this.custom(this);
				}
				else{
					switch(this.yAlign)
					{
					case "above":
						//Draw a caret above the x/y
						ctx.beginPath();
						ctx.moveTo(this.x,this.y - caretPadding);
						ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
						ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
						ctx.closePath();
						ctx.fill();
						break;
					case "below":
						tooltipY = this.y + caretPadding + this.caretHeight;
						//Draw a caret below the x/y
						ctx.beginPath();
						ctx.moveTo(this.x, this.y + caretPadding);
						ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
						ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
						ctx.closePath();
						ctx.fill();
						break;
					}

					switch(this.xAlign)
					{
					case "left":
						tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
						break;
					case "right":
						tooltipX = this.x - (this.cornerRadius + this.caretHeight);
						break;
					}

					drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

					ctx.fill();

					ctx.fillStyle = this.textColor;
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
				}
			}
		});

		Chart.MultiTooltip = Chart.Element.extend({
			initialize : function(){
				this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

				this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

				this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

				this.ctx.font = this.titleFont;

				var titleWidth = this.ctx.measureText(this.title).width,
					//Label has a legend square as well so account for this.
					labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
					longestTextWidth = max([labelWidth,titleWidth]);

				this.width = longestTextWidth + (this.xPadding*2);


				var halfHeight = this.height/2;

				//Check to ensure the height will fit on the canvas
				if (this.y - halfHeight < 0 ){
					this.y = halfHeight;
				} else if (this.y + halfHeight > this.chart.height){
					this.y = this.chart.height - halfHeight;
				}

				//Decide whether to align left or right based on position on canvas
				if (this.x > this.chart.width/2){
					this.x -= this.xOffset + this.width;
				} else {
					this.x += this.xOffset;
				}


			},
			getLineHeight : function(index){
				var baseLineHeight = this.y - (this.height/2) + this.yPadding,
					afterTitleIndex = index-1;

				//If the index is zero, we're getting the title
				if (index === 0){
					return baseLineHeight + this.titleFontSize/2;
				} else{
					return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
				}

			},
			draw : function(){
				// Custom Tooltips
				if(this.custom){
					this.custom(this);
				}
				else{
					drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
					var ctx = this.ctx;
					ctx.fillStyle = this.fillColor;
					ctx.fill();
					ctx.closePath();

					ctx.textAlign = "left";
					ctx.textBaseline = "middle";
					ctx.fillStyle = this.titleTextColor;
					ctx.font = this.titleFont;

					ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

					ctx.font = this.font;
					helpers.each(this.labels,function(label,index){
						ctx.fillStyle = this.textColor;
						ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

						//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
						//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
						//Instead we'll make a white filled block to put the legendColour palette over.

						ctx.fillStyle = this.legendColorBackground;
						ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

						ctx.fillStyle = this.legendColors[index].fill;
						ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


					},this);
				}
			}
		});

		Chart.Scale = Chart.Element.extend({
			initialize : function(){
				this.fit();
			},
			buildYLabels : function(){
				this.yLabels = [];

				var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

				for (var i=0; i<=this.steps; i++){
					this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
				}
				this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
			},
			addXLabel : function(label){
				this.xLabels.push(label);
				this.valuesCount++;
				this.fit();
			},
			removeXLabel : function(){
				this.xLabels.shift();
				this.valuesCount--;
				this.fit();
			},
			// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
			fit: function(){
				// First we need the width of the yLabels, assuming the xLabels aren't rotated

				// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
				this.startPoint = (this.display) ? this.fontSize : 0;
				this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

				// Apply padding settings to the start and end point.
				this.startPoint += this.padding;
				this.endPoint -= this.padding;

				// Cache the starting height, so can determine if we need to recalculate the scale yAxis
				var cachedHeight = this.endPoint - this.startPoint,
					cachedYLabelWidth;

				// Build the current yLabels so we have an idea of what size they'll be to start
				/*
				 *	This sets what is returned from calculateScaleRange as static properties of this class:
				 *
					this.steps;
					this.stepValue;
					this.min;
					this.max;
				 *
				 */
				this.calculateYRange(cachedHeight);

				// With these properties set we can now build the array of yLabels
				// and also the width of the largest yLabel
				this.buildYLabels();

				this.calculateXLabelRotation();

				while((cachedHeight > this.endPoint - this.startPoint)){
					cachedHeight = this.endPoint - this.startPoint;
					cachedYLabelWidth = this.yLabelWidth;

					this.calculateYRange(cachedHeight);
					this.buildYLabels();

					// Only go through the xLabel loop again if the yLabel width has changed
					if (cachedYLabelWidth < this.yLabelWidth){
						this.calculateXLabelRotation();
					}
				}

			},
			calculateXLabelRotation : function(){
				//Get the width of each grid by calculating the difference
				//between x offsets between 0 and 1.

				this.ctx.font = this.font;

				var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
					lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
					firstRotated,
					lastRotated;


				this.xScalePaddingRight = lastWidth/2 + 3;
				this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

				this.xLabelRotation = 0;
				if (this.display){
					var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
						cosRotation,
						firstRotatedWidth;
					this.xLabelWidth = originalLabelWidth;
					//Allow 3 pixels x2 padding either side for label readability
					var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

					//Max label rotate should be 90 - also act as a loop counter
					while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
						cosRotation = Math.cos(toRadians(this.xLabelRotation));

						firstRotated = cosRotation * firstWidth;
						lastRotated = cosRotation * lastWidth;

						// We're right aligning the text now.
						if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
							this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
						}
						this.xScalePaddingRight = this.fontSize/2;


						this.xLabelRotation++;
						this.xLabelWidth = cosRotation * originalLabelWidth;

					}
					if (this.xLabelRotation > 0){
						this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
					}
				}
				else{
					this.xLabelWidth = 0;
					this.xScalePaddingRight = this.padding;
					this.xScalePaddingLeft = this.padding;
				}

			},
			// Needs to be overidden in each Chart type
			// Otherwise we need to pass all the data into the scale class
			calculateYRange: noop,
			drawingArea: function(){
				return this.startPoint - this.endPoint;
			},
			calculateY : function(value){
				var scalingFactor = this.drawingArea() / (this.min - this.max);
				return this.endPoint - (scalingFactor * (value - this.min));
			},
			calculateX : function(index){
				var isRotated = (this.xLabelRotation > 0),
					// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
					innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
					valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
					valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

				if (this.offsetGridLines){
					valueOffset += (valueWidth/2);
				}

				return Math.round(valueOffset);
			},
			update : function(newProps){
				helpers.extend(this, newProps);
				this.fit();
			},
			draw : function(){
				var ctx = this.ctx,
					yLabelGap = (this.endPoint - this.startPoint) / this.steps,
					xStart = Math.round(this.xScalePaddingLeft);
				if (this.display){
					ctx.fillStyle = this.textColor;
					ctx.font = this.font;
					each(this.yLabels,function(labelString,index){
						var yLabelCenter = this.endPoint - (yLabelGap * index),
							linePositionY = Math.round(yLabelCenter),
							drawHorizontalLine = this.showHorizontalLines;

						ctx.textAlign = "right";
						ctx.textBaseline = "middle";
						if (this.showLabels){
							ctx.fillText(labelString,xStart - 10,yLabelCenter);
						}

						// This is X axis, so draw it
						if (index === 0 && !drawHorizontalLine){
							drawHorizontalLine = true;
						}

						if (drawHorizontalLine){
							ctx.beginPath();
						}

						if (index > 0){
							// This is a grid line in the centre, so drop that
							ctx.lineWidth = this.gridLineWidth;
							ctx.strokeStyle = this.gridLineColor;
						} else {
							// This is the first line on the scale
							ctx.lineWidth = this.lineWidth;
							ctx.strokeStyle = this.lineColor;
						}

						linePositionY += helpers.aliasPixel(ctx.lineWidth);

						if(drawHorizontalLine){
							ctx.moveTo(xStart, linePositionY);
							ctx.lineTo(this.width, linePositionY);
							ctx.stroke();
							ctx.closePath();
						}

						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
						ctx.beginPath();
						ctx.moveTo(xStart - 5, linePositionY);
						ctx.lineTo(xStart, linePositionY);
						ctx.stroke();
						ctx.closePath();

					},this);

					each(this.xLabels,function(label,index){
						var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
							// Check to see if line/bar here and decide where to place the line
							linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
							isRotated = (this.xLabelRotation > 0),
							drawVerticalLine = this.showVerticalLines;

						// This is Y axis, so draw it
						if (index === 0 && !drawVerticalLine){
							drawVerticalLine = true;
						}

						if (drawVerticalLine){
							ctx.beginPath();
						}

						if (index > 0){
							// This is a grid line in the centre, so drop that
							ctx.lineWidth = this.gridLineWidth;
							ctx.strokeStyle = this.gridLineColor;
						} else {
							// This is the first line on the scale
							ctx.lineWidth = this.lineWidth;
							ctx.strokeStyle = this.lineColor;
						}

						if (drawVerticalLine){
							ctx.moveTo(linePos,this.endPoint);
							ctx.lineTo(linePos,this.startPoint - 3);
							ctx.stroke();
							ctx.closePath();
						}


						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;


						// Small lines at the bottom of the base grid line
						ctx.beginPath();
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.endPoint + 5);
						ctx.stroke();
						ctx.closePath();

						ctx.save();
						ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
						ctx.rotate(toRadians(this.xLabelRotation)*-1);
						ctx.font = this.font;
						ctx.textAlign = (isRotated) ? "right" : "center";
						ctx.textBaseline = (isRotated) ? "middle" : "top";
						ctx.fillText(label, 0, 0);
						ctx.restore();
					},this);

				}
			}

		});

		Chart.RadialScale = Chart.Element.extend({
			initialize: function(){
				this.size = min([this.height, this.width]);
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			},
			calculateCenterOffset: function(value){
				// Take into account half font size + the yPadding of the top value
				var scalingFactor = this.drawingArea / (this.max - this.min);

				return (value - this.min) * scalingFactor;
			},
			update : function(){
				if (!this.lineArc){
					this.setScaleSize();
				} else {
					this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
				}
				this.buildYLabels();
			},
			buildYLabels: function(){
				this.yLabels = [];

				var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

				for (var i=0; i<=this.steps; i++){
					this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
				}
			},
			getCircumference : function(){
				return ((Math.PI*2) / this.valuesCount);
			},
			setScaleSize: function(){
				/*
				 * Right, this is really confusing and there is a lot of maths going on here
				 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
				 *
				 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
				 *
				 * Solution:
				 *
				 * We assume the radius of the polygon is half the size of the canvas at first
				 * at each index we check if the text overlaps.
				 *
				 * Where it does, we store that angle and that index.
				 *
				 * After finding the largest index and angle we calculate how much we need to remove
				 * from the shape radius to move the point inwards by that x.
				 *
				 * We average the left and right distances to get the maximum shape radius that can fit in the box
				 * along with labels.
				 *
				 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
				 * on each side, removing that from the size, halving it and adding the left x protrusion width.
				 *
				 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
				 * and position it in the most space efficient manner
				 *
				 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
				 */


				// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
				// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
				var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
					pointPosition,
					i,
					textWidth,
					halfTextWidth,
					furthestRight = this.width,
					furthestRightIndex,
					furthestRightAngle,
					furthestLeft = 0,
					furthestLeftIndex,
					furthestLeftAngle,
					xProtrusionLeft,
					xProtrusionRight,
					radiusReductionRight,
					radiusReductionLeft,
					maxWidthRadius;
				this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
				for (i=0;i<this.valuesCount;i++){
					// 5px to space the text slightly out - similar to what we do in the draw function.
					pointPosition = this.getPointPosition(i, largestPossibleRadius);
					textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
					if (i === 0 || i === this.valuesCount/2){
						// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
						// of the radar chart, so text will be aligned centrally, so we'll half it and compare
						// w/left and right text sizes
						halfTextWidth = textWidth/2;
						if (pointPosition.x + halfTextWidth > furthestRight) {
							furthestRight = pointPosition.x + halfTextWidth;
							furthestRightIndex = i;
						}
						if (pointPosition.x - halfTextWidth < furthestLeft) {
							furthestLeft = pointPosition.x - halfTextWidth;
							furthestLeftIndex = i;
						}
					}
					else if (i < this.valuesCount/2) {
						// Less than half the values means we'll left align the text
						if (pointPosition.x + textWidth > furthestRight) {
							furthestRight = pointPosition.x + textWidth;
							furthestRightIndex = i;
						}
					}
					else if (i > this.valuesCount/2){
						// More than half the values means we'll right align the text
						if (pointPosition.x - textWidth < furthestLeft) {
							furthestLeft = pointPosition.x - textWidth;
							furthestLeftIndex = i;
						}
					}
				}

				xProtrusionLeft = furthestLeft;

				xProtrusionRight = Math.ceil(furthestRight - this.width);

				furthestRightAngle = this.getIndexAngle(furthestRightIndex);

				furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

				radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

				radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

				// Ensure we actually need to reduce the size of the chart
				radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
				radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

				this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

				//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
				this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

			},
			setCenterPoint: function(leftMovement, rightMovement){

				var maxRight = this.width - rightMovement - this.drawingArea,
					maxLeft = leftMovement + this.drawingArea;

				this.xCenter = (maxLeft + maxRight)/2;
				// Always vertically in the centre as the text height doesn't change
				this.yCenter = (this.height/2);
			},

			getIndexAngle : function(index){
				var angleMultiplier = (Math.PI * 2) / this.valuesCount;
				// Start from the top instead of right, so remove a quarter of the circle

				return index * angleMultiplier - (Math.PI/2);
			},
			getPointPosition : function(index, distanceFromCenter){
				var thisAngle = this.getIndexAngle(index);
				return {
					x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
					y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
				};
			},
			draw: function(){
				if (this.display){
					var ctx = this.ctx;
					each(this.yLabels, function(label, index){
						// Don't draw a centre value
						if (index > 0){
							var yCenterOffset = index * (this.drawingArea/this.steps),
								yHeight = this.yCenter - yCenterOffset,
								pointPosition;

							// Draw circular lines around the scale
							if (this.lineWidth > 0){
								ctx.strokeStyle = this.lineColor;
								ctx.lineWidth = this.lineWidth;

								if(this.lineArc){
									ctx.beginPath();
									ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
									ctx.closePath();
									ctx.stroke();
								} else{
									ctx.beginPath();
									for (var i=0;i<this.valuesCount;i++)
									{
										pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
										if (i === 0){
											ctx.moveTo(pointPosition.x, pointPosition.y);
										} else {
											ctx.lineTo(pointPosition.x, pointPosition.y);
										}
									}
									ctx.closePath();
									ctx.stroke();
								}
							}
							if(this.showLabels){
								ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
								if (this.showLabelBackdrop){
									var labelWidth = ctx.measureText(label).width;
									ctx.fillStyle = this.backdropColor;
									ctx.fillRect(
										this.xCenter - labelWidth/2 - this.backdropPaddingX,
										yHeight - this.fontSize/2 - this.backdropPaddingY,
										labelWidth + this.backdropPaddingX*2,
										this.fontSize + this.backdropPaddingY*2
									);
								}
								ctx.textAlign = 'center';
								ctx.textBaseline = "middle";
								ctx.fillStyle = this.fontColor;
								ctx.fillText(label, this.xCenter, yHeight);
							}
						}
					}, this);

					if (!this.lineArc){
						ctx.lineWidth = this.angleLineWidth;
						ctx.strokeStyle = this.angleLineColor;
						for (var i = this.valuesCount - 1; i >= 0; i--) {
							if (this.angleLineWidth > 0){
								var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
								ctx.beginPath();
								ctx.moveTo(this.xCenter, this.yCenter);
								ctx.lineTo(outerPosition.x, outerPosition.y);
								ctx.stroke();
								ctx.closePath();
							}
							// Extra 3px out for some label spacing
							var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
							ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
							ctx.fillStyle = this.pointLabelFontColor;

							var labelsCount = this.labels.length,
								halfLabelsCount = this.labels.length/2,
								quarterLabelsCount = halfLabelsCount/2,
								upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
								exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
							if (i === 0){
								ctx.textAlign = 'center';
							} else if(i === halfLabelsCount){
								ctx.textAlign = 'center';
							} else if (i < halfLabelsCount){
								ctx.textAlign = 'left';
							} else {
								ctx.textAlign = 'right';
							}

							// Set the correct text baseline based on outer positioning
							if (exactQuarter){
								ctx.textBaseline = 'middle';
							} else if (upperHalf){
								ctx.textBaseline = 'bottom';
							} else {
								ctx.textBaseline = 'top';
							}

							ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
						}
					}
				}
			}
		});

		// Attach global event to resize each chart instance when the browser resizes
		helpers.addEvent(window, "resize", (function(){
			// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
			var timeout;
			return function(){
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					each(Chart.instances,function(instance){
						// If the responsive flag is set in the chart instance config
						// Cascade the resize event down to the chart.
						if (instance.options.responsive){
							instance.resize(instance.render, true);
						}
					});
				}, 50);
			};
		})());


		if (amd) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
				return Chart;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module === 'object' && module.exports) {
			module.exports = Chart;
		}

		root.Chart = Chart;

		Chart.noConflict = function(){
			root.Chart = previous;
			return Chart;
		};

	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;


		var defaultConfig = {
			//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero : true,

			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - If there is a stroke on each bar
			barShowStroke : true,

			//Number - Pixel width of the bar stroke
			barStrokeWidth : 2,

			//Number - Spacing between each of the X value sets
			barValueSpacing : 5,

			//Number - Spacing between data sets within X values
			barDatasetSpacing : 1,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			name: "Bar",
			defaults : defaultConfig,
			initialize:  function(data){

				//Expose options as a scope variable here so we can access it in the ScaleClass
				var options = this.options;

				this.ScaleClass = Chart.Scale.extend({
					offsetGridLines : true,
					calculateBarX : function(datasetCount, datasetIndex, barIndex){
						//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
						var xWidth = this.calculateBaseWidth(),
							xAbsolute = this.calculateX(barIndex) - (xWidth/2),
							barWidth = this.calculateBarWidth(datasetCount);

						return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
					},
					calculateBaseWidth : function(){
						return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
					},
					calculateBarWidth : function(datasetCount){
						//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
						var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

						return (baseWidth / datasetCount);
					}
				});

				this.datasets = [];

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

						this.eachBars(function(bar){
							bar.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activeBars, function(activeBar){
							activeBar.fillColor = activeBar.highlightFill;
							activeBar.strokeColor = activeBar.highlightStroke;
						});
						this.showTooltip(activeBars);
					});
				}

				//Declare the extension of the default point, to cater for the options passed in to the constructor
				this.BarClass = Chart.Rectangle.extend({
					strokeWidth : this.options.barStrokeWidth,
					showStroke : this.options.barShowStroke,
					ctx : this.chart.ctx
				});

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset,datasetIndex){

					var datasetObject = {
						label : dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						bars : []
					};

					this.datasets.push(datasetObject);

					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.bars.push(new this.BarClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.strokeColor,
							fillColor : dataset.fillColor,
							highlightFill : dataset.highlightFill || dataset.fillColor,
							highlightStroke : dataset.highlightStroke || dataset.strokeColor
						}));
					},this);

				},this);

				this.buildScale(data.labels);

				this.BarClass.prototype.base = this.scale.endPoint;

				this.eachBars(function(bar, index, datasetIndex){
					helpers.extend(bar, {
						width : this.scale.calculateBarWidth(this.datasets.length),
						x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
						y: this.scale.endPoint
					});
					bar.save();
				}, this);

				this.render();
			},
			update : function(){
				this.scale.update();
				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor', 'strokeColor']);
				});

				this.eachBars(function(bar){
					bar.save();
				});
				this.render();
			},
			eachBars : function(callback){
				helpers.each(this.datasets,function(dataset, datasetIndex){
					helpers.each(dataset.bars, callback, this, datasetIndex);
				},this);
			},
			getBarsAtEvent : function(e){
				var barsArray = [],
					eventPosition = helpers.getRelativePosition(e),
					datasetIterator = function(dataset){
						barsArray.push(dataset.bars[barIndex]);
					},
					barIndex;

				for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
					for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
						if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
							helpers.each(this.datasets, datasetIterator);
							return barsArray;
						}
					}
				}

				return barsArray;
			},
			buildScale : function(labels){
				var self = this;

				var dataTotal = function(){
					var values = [];
					self.eachBars(function(bar){
						values.push(bar.value);
					});
					return values;
				};

				var scaleOptions = {
					templateString : this.options.scaleLabel,
					height : this.chart.height,
					width : this.chart.width,
					ctx : this.chart.ctx,
					textColor : this.options.scaleFontColor,
					fontSize : this.options.scaleFontSize,
					fontStyle : this.options.scaleFontStyle,
					fontFamily : this.options.scaleFontFamily,
					valuesCount : labels.length,
					beginAtZero : this.options.scaleBeginAtZero,
					integersOnly : this.options.scaleIntegersOnly,
					calculateYRange: function(currentHeight){
						var updatedRanges = helpers.calculateScaleRange(
							dataTotal(),
							currentHeight,
							this.fontSize,
							this.beginAtZero,
							this.integersOnly
						);
						helpers.extend(this, updatedRanges);
					},
					xLabels : labels,
					font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
					lineWidth : this.options.scaleLineWidth,
					lineColor : this.options.scaleLineColor,
					showHorizontalLines : this.options.scaleShowHorizontalLines,
					showVerticalLines : this.options.scaleShowVerticalLines,
					gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
					gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
					padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
					showLabels : this.options.scaleShowLabels,
					display : this.options.showScale
				};

				if (this.options.scaleOverride){
					helpers.extend(scaleOptions, {
						calculateYRange: helpers.noop,
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					});
				}

				this.scale = new this.ScaleClass(scaleOptions);
			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets
				helpers.each(valuesArray,function(value,datasetIndex){
					//Add a new point for each piece of data, passing any required data to draw.
					this.datasets[datasetIndex].bars.push(new this.BarClass({
						value : value,
						label : label,
						x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
						y: this.scale.endPoint,
						width : this.scale.calculateBarWidth(this.datasets.length),
						base : this.scale.endPoint,
						strokeColor : this.datasets[datasetIndex].strokeColor,
						fillColor : this.datasets[datasetIndex].fillColor
					}));
				},this);

				this.scale.addXLabel(label);
				//Then re-render the chart.
				this.update();
			},
			removeData : function(){
				this.scale.removeXLabel();
				//Then re-render the chart.
				helpers.each(this.datasets,function(dataset){
					dataset.bars.shift();
				},this);
				this.update();
			},
			reflow : function(){
				helpers.extend(this.BarClass.prototype,{
					y: this.scale.endPoint,
					base : this.scale.endPoint
				});
				var newScaleProps = helpers.extend({
					height : this.chart.height,
					width : this.chart.width
				});
				this.scale.update(newScaleProps);
			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				this.clear();

				var ctx = this.chart.ctx;

				this.scale.draw(easingDecimal);

				//Draw all the bars for each dataset
				helpers.each(this.datasets,function(dataset,datasetIndex){
					helpers.each(dataset.bars,function(bar,index){
						if (bar.hasValue()){
							bar.base = this.scale.endPoint;
							//Transition then draw
							bar.transition({
								x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
								y : this.scale.calculateY(bar.value),
								width : this.scale.calculateBarWidth(this.datasets.length)
							}, easingDecimal).draw();
						}
					},this);

				},this);
			}
		});


	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			//Cache a local reference to Chart.helpers
			helpers = Chart.helpers;

		var defaultConfig = {
			//Boolean - Whether we should show a stroke on each segment
			segmentShowStroke : true,

			//String - The colour of each segment stroke
			segmentStrokeColor : "#fff",

			//Number - The width of each segment stroke
			segmentStrokeWidth : 2,

			//The percentage of the chart that we cut out of the middle.
			percentageInnerCutout : 50,

			//Number - Amount of animation steps
			animationSteps : 100,

			//String - Animation easing effect
			animationEasing : "easeOutBounce",

			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate : true,

			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale : false,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			//Passing in a name registers this chart in the Chart namespace
			name: "Doughnut",
			//Providing a defaults will also register the deafults in the chart namespace
			defaults : defaultConfig,
			//Initialize is fired when the chart is initialized - Data is passed in as a parameter
			//Config is automatically merged by the core of Chart.js, and is available at this.options
			initialize:  function(data){

				//Declare segments as a static property to prevent inheriting across the Chart type prototype
				this.segments = [];
				this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

				this.SegmentArc = Chart.Arc.extend({
					ctx : this.chart.ctx,
					x : this.chart.width/2,
					y : this.chart.height/2
				});

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

						helpers.each(this.segments,function(segment){
							segment.restore(["fillColor"]);
						});
						helpers.each(activeSegments,function(activeSegment){
							activeSegment.fillColor = activeSegment.highlightColor;
						});
						this.showTooltip(activeSegments);
					});
				}
				this.calculateTotal(data);

				helpers.each(data,function(datapoint, index){
					this.addData(datapoint, index, true);
				},this);

				this.render();
			},
			getSegmentsAtEvent : function(e){
				var segmentsArray = [];

				var location = helpers.getRelativePosition(e);

				helpers.each(this.segments,function(segment){
					if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
				},this);
				return segmentsArray;
			},
			addData : function(segment, atIndex, silent){
				var index = atIndex || this.segments.length;
				this.segments.splice(index, 0, new this.SegmentArc({
					value : segment.value,
					outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
					innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
					fillColor : segment.color,
					highlightColor : segment.highlight || segment.color,
					showStroke : this.options.segmentShowStroke,
					strokeWidth : this.options.segmentStrokeWidth,
					strokeColor : this.options.segmentStrokeColor,
					startAngle : Math.PI * 1.5,
					circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
					label : segment.label
				}));
				if (!silent){
					this.reflow();
					this.update();
				}
			},
			calculateCircumference : function(value){
				return (Math.PI*2)*(Math.abs(value) / this.total);
			},
			calculateTotal : function(data){
				this.total = 0;
				helpers.each(data,function(segment){
					this.total += Math.abs(segment.value);
				},this);
			},
			update : function(){
				this.calculateTotal(this.segments);

				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor']);
				});

				helpers.each(this.segments,function(segment){
					segment.save();
				});
				this.render();
			},

			removeData: function(atIndex){
				var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
				this.segments.splice(indexToDelete, 1);
				this.reflow();
				this.update();
			},

			reflow : function(){
				helpers.extend(this.SegmentArc.prototype,{
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
				helpers.each(this.segments, function(segment){
					segment.update({
						outerRadius : this.outerRadius,
						innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
					});
				}, this);
			},
			draw : function(easeDecimal){
				var animDecimal = (easeDecimal) ? easeDecimal : 1;
				this.clear();
				helpers.each(this.segments,function(segment,index){
					segment.transition({
						circumference : this.calculateCircumference(segment.value),
						outerRadius : this.outerRadius,
						innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
					},animDecimal);

					segment.endAngle = segment.startAngle + segment.circumference;

					segment.draw();
					if (index === 0){
						segment.startAngle = Math.PI * 1.5;
					}
					//Check to see if it's the last segment, if not get the next and update the start angle
					if (index < this.segments.length-1){
						this.segments[index+1].startAngle = segment.endAngle;
					}
				},this);

			}
		});

		Chart.types.Doughnut.extend({
			name : "Pie",
			defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
		});

	}).call(this);
	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;

		var defaultConfig = {

			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - Whether the line is curved between points
			bezierCurve : true,

			//Number - Tension of the bezier curve between points
			bezierCurveTension : 0.4,

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 4,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			name: "Line",
			defaults : defaultConfig,
			initialize:  function(data){
				//Declare the extension of the default point, to cater for the options passed in to the constructor
				this.PointClass = Chart.Point.extend({
					strokeWidth : this.options.pointDotStrokeWidth,
					radius : this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius : this.options.pointHitDetectionRadius,
					ctx : this.chart.ctx,
					inRange : function(mouseX){
						return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
					}
				});

				this.datasets = [];

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
						this.eachPoints(function(point){
							point.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activePoints, function(activePoint){
							activePoint.fillColor = activePoint.highlightFill;
							activePoint.strokeColor = activePoint.highlightStroke;
						});
						this.showTooltip(activePoints);
					});
				}

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset){

					var datasetObject = {
						label : dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						pointColor : dataset.pointColor,
						pointStrokeColor : dataset.pointStrokeColor,
						points : []
					};

					this.datasets.push(datasetObject);


					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					},this);

					this.buildScale(data.labels);


					this.eachPoints(function(point, index){
						helpers.extend(point, {
							x: this.scale.calculateX(index),
							y: this.scale.endPoint
						});
						point.save();
					}, this);

				},this);


				this.render();
			},
			update : function(){
				this.scale.update();
				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor', 'strokeColor']);
				});
				this.eachPoints(function(point){
					point.save();
				});
				this.render();
			},
			eachPoints : function(callback){
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,callback,this);
				},this);
			},
			getPointsAtEvent : function(e){
				var pointsArray = [],
					eventPosition = helpers.getRelativePosition(e);
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,function(point){
						if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
					});
				},this);
				return pointsArray;
			},
			buildScale : function(labels){
				var self = this;

				var dataTotal = function(){
					var values = [];
					self.eachPoints(function(point){
						values.push(point.value);
					});

					return values;
				};

				var scaleOptions = {
					templateString : this.options.scaleLabel,
					height : this.chart.height,
					width : this.chart.width,
					ctx : this.chart.ctx,
					textColor : this.options.scaleFontColor,
					fontSize : this.options.scaleFontSize,
					fontStyle : this.options.scaleFontStyle,
					fontFamily : this.options.scaleFontFamily,
					valuesCount : labels.length,
					beginAtZero : this.options.scaleBeginAtZero,
					integersOnly : this.options.scaleIntegersOnly,
					calculateYRange : function(currentHeight){
						var updatedRanges = helpers.calculateScaleRange(
							dataTotal(),
							currentHeight,
							this.fontSize,
							this.beginAtZero,
							this.integersOnly
						);
						helpers.extend(this, updatedRanges);
					},
					xLabels : labels,
					font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
					lineWidth : this.options.scaleLineWidth,
					lineColor : this.options.scaleLineColor,
					showHorizontalLines : this.options.scaleShowHorizontalLines,
					showVerticalLines : this.options.scaleShowVerticalLines,
					gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
					gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
					padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
					showLabels : this.options.scaleShowLabels,
					display : this.options.showScale
				};

				if (this.options.scaleOverride){
					helpers.extend(scaleOptions, {
						calculateYRange: helpers.noop,
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					});
				}


				this.scale = new Chart.Scale(scaleOptions);
			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets

				helpers.each(valuesArray,function(value,datasetIndex){
					//Add a new point for each piece of data, passing any required data to draw.
					this.datasets[datasetIndex].points.push(new this.PointClass({
						value : value,
						label : label,
						x: this.scale.calculateX(this.scale.valuesCount+1),
						y: this.scale.endPoint,
						strokeColor : this.datasets[datasetIndex].pointStrokeColor,
						fillColor : this.datasets[datasetIndex].pointColor
					}));
				},this);

				this.scale.addXLabel(label);
				//Then re-render the chart.
				this.update();
			},
			removeData : function(){
				this.scale.removeXLabel();
				//Then re-render the chart.
				helpers.each(this.datasets,function(dataset){
					dataset.points.shift();
				},this);
				this.update();
			},
			reflow : function(){
				var newScaleProps = helpers.extend({
					height : this.chart.height,
					width : this.chart.width
				});
				this.scale.update(newScaleProps);
			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				this.clear();

				var ctx = this.chart.ctx;

				// Some helper methods for getting the next/prev points
				var hasValue = function(item){
					return item.value !== null;
				},
				nextPoint = function(point, collection, index){
					return helpers.findNextWhere(collection, hasValue, index) || point;
				},
				previousPoint = function(point, collection, index){
					return helpers.findPreviousWhere(collection, hasValue, index) || point;
				};

				this.scale.draw(easingDecimal);


				helpers.each(this.datasets,function(dataset){
					var pointsWithValues = helpers.where(dataset.points, hasValue);

					//Transition each point first so that the line and point drawing isn't out of sync
					//We can use this extra loop to calculate the control points of this dataset also in this loop

					helpers.each(dataset.points, function(point, index){
						if (point.hasValue()){
							point.transition({
								y : this.scale.calculateY(point.value),
								x : this.scale.calculateX(index)
							}, easingDecimal);
						}
					},this);


					// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
					// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
					if (this.options.bezierCurve){
						helpers.each(pointsWithValues, function(point, index){
							var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
							point.controlPoints = helpers.splineCurve(
								previousPoint(point, pointsWithValues, index),
								point,
								nextPoint(point, pointsWithValues, index),
								tension
							);

							// Prevent the bezier going outside of the bounds of the graph

							// Cap puter bezier handles to the upper/lower scale bounds
							if (point.controlPoints.outer.y > this.scale.endPoint){
								point.controlPoints.outer.y = this.scale.endPoint;
							}
							else if (point.controlPoints.outer.y < this.scale.startPoint){
								point.controlPoints.outer.y = this.scale.startPoint;
							}

							// Cap inner bezier handles to the upper/lower scale bounds
							if (point.controlPoints.inner.y > this.scale.endPoint){
								point.controlPoints.inner.y = this.scale.endPoint;
							}
							else if (point.controlPoints.inner.y < this.scale.startPoint){
								point.controlPoints.inner.y = this.scale.startPoint;
							}
						},this);
					}


					//Draw the line between all the points
					ctx.lineWidth = this.options.datasetStrokeWidth;
					ctx.strokeStyle = dataset.strokeColor;
					ctx.beginPath();

					helpers.each(pointsWithValues, function(point, index){
						if (index === 0){
							ctx.moveTo(point.x, point.y);
						}
						else{
							if(this.options.bezierCurve){
								var previous = previousPoint(point, pointsWithValues, index);

								ctx.bezierCurveTo(
									previous.controlPoints.outer.x,
									previous.controlPoints.outer.y,
									point.controlPoints.inner.x,
									point.controlPoints.inner.y,
									point.x,
									point.y
								);
							}
							else{
								ctx.lineTo(point.x,point.y);
							}
						}
					}, this);

					ctx.stroke();

					if (this.options.datasetFill && pointsWithValues.length > 0){
						//Round off the line by going to the base of the chart, back to the start, then fill.
						ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
						ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
						ctx.fillStyle = dataset.fillColor;
						ctx.closePath();
						ctx.fill();
					}

					//Now draw the points over the line
					//A little inefficient double looping, but better than the line
					//lagging behind the point positions
					helpers.each(pointsWithValues,function(point){
						point.draw();
					});
				},this);
			}
		});


	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			//Cache a local reference to Chart.helpers
			helpers = Chart.helpers;

		var defaultConfig = {
			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop : true,

			//String - The colour of the label backdrop
			scaleBackdropColor : "rgba(255,255,255,0.75)",

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY : 2,

			//Number - The backdrop padding to the side of the label in pixels
			scaleBackdropPaddingX : 2,

			//Boolean - Show line for each value in the scale
			scaleShowLine : true,

			//Boolean - Stroke a line around each segment in the chart
			segmentShowStroke : true,

			//String - The colour of the stroke on each segement.
			segmentStrokeColor : "#fff",

			//Number - The width of the stroke value in pixels
			segmentStrokeWidth : 2,

			//Number - Amount of animation steps
			animationSteps : 100,

			//String - Animation easing effect.
			animationEasing : "easeOutBounce",

			//Boolean - Whether to animate the rotation of the chart
			animateRotate : true,

			//Boolean - Whether to animate scaling the chart from the centre
			animateScale : false,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
		};


		Chart.Type.extend({
			//Passing in a name registers this chart in the Chart namespace
			name: "PolarArea",
			//Providing a defaults will also register the deafults in the chart namespace
			defaults : defaultConfig,
			//Initialize is fired when the chart is initialized - Data is passed in as a parameter
			//Config is automatically merged by the core of Chart.js, and is available at this.options
			initialize:  function(data){
				this.segments = [];
				//Declare segment class as a chart instance specific class, so it can share props for this instance
				this.SegmentArc = Chart.Arc.extend({
					showStroke : this.options.segmentShowStroke,
					strokeWidth : this.options.segmentStrokeWidth,
					strokeColor : this.options.segmentStrokeColor,
					ctx : this.chart.ctx,
					innerRadius : 0,
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.scale = new Chart.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY : this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					lineArc: true,
					width: this.chart.width,
					height: this.chart.height,
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2,
					ctx : this.chart.ctx,
					templateString: this.options.scaleLabel,
					valuesCount: data.length
				});

				this.updateScaleRange(data);

				this.scale.update();

				helpers.each(data,function(segment,index){
					this.addData(segment,index,true);
				},this);

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
						helpers.each(this.segments,function(segment){
							segment.restore(["fillColor"]);
						});
						helpers.each(activeSegments,function(activeSegment){
							activeSegment.fillColor = activeSegment.highlightColor;
						});
						this.showTooltip(activeSegments);
					});
				}

				this.render();
			},
			getSegmentsAtEvent : function(e){
				var segmentsArray = [];

				var location = helpers.getRelativePosition(e);

				helpers.each(this.segments,function(segment){
					if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
				},this);
				return segmentsArray;
			},
			addData : function(segment, atIndex, silent){
				var index = atIndex || this.segments.length;

				this.segments.splice(index, 0, new this.SegmentArc({
					fillColor: segment.color,
					highlightColor: segment.highlight || segment.color,
					label: segment.label,
					value: segment.value,
					outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
					circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
					startAngle: Math.PI * 1.5
				}));
				if (!silent){
					this.reflow();
					this.update();
				}
			},
			removeData: function(atIndex){
				var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
				this.segments.splice(indexToDelete, 1);
				this.reflow();
				this.update();
			},
			calculateTotal: function(data){
				this.total = 0;
				helpers.each(data,function(segment){
					this.total += segment.value;
				},this);
				this.scale.valuesCount = this.segments.length;
			},
			updateScaleRange: function(datapoints){
				var valuesArray = [];
				helpers.each(datapoints,function(segment){
					valuesArray.push(segment.value);
				});

				var scaleSizes = (this.options.scaleOverride) ?
					{
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					} :
					helpers.calculateScaleRange(
						valuesArray,
						helpers.min([this.chart.width, this.chart.height])/2,
						this.options.scaleFontSize,
						this.options.scaleBeginAtZero,
						this.options.scaleIntegersOnly
					);

				helpers.extend(
					this.scale,
					scaleSizes,
					{
						size: helpers.min([this.chart.width, this.chart.height]),
						xCenter: this.chart.width/2,
						yCenter: this.chart.height/2
					}
				);

			},
			update : function(){
				this.calculateTotal(this.segments);

				helpers.each(this.segments,function(segment){
					segment.save();
				});
				
				this.reflow();
				this.render();
			},
			reflow : function(){
				helpers.extend(this.SegmentArc.prototype,{
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.updateScaleRange(this.segments);
				this.scale.update();

				helpers.extend(this.scale,{
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				});

				helpers.each(this.segments, function(segment){
					segment.update({
						outerRadius : this.scale.calculateCenterOffset(segment.value)
					});
				}, this);

			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				//Clear & draw the canvas
				this.clear();
				helpers.each(this.segments,function(segment, index){
					segment.transition({
						circumference : this.scale.getCircumference(),
						outerRadius : this.scale.calculateCenterOffset(segment.value)
					},easingDecimal);

					segment.endAngle = segment.startAngle + segment.circumference;

					// If we've removed the first segment we need to set the first one to
					// start at the top.
					if (index === 0){
						segment.startAngle = Math.PI * 1.5;
					}

					//Check to see if it's the last segment, if not get the next and update the start angle
					if (index < this.segments.length - 1){
						this.segments[index+1].startAngle = segment.endAngle;
					}
					segment.draw();
				}, this);
				this.scale.draw();
			}
		});

	}).call(this);
	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;



		Chart.Type.extend({
			name: "Radar",
			defaults:{
				//Boolean - Whether to show lines for each scale point
				scaleShowLine : true,

				//Boolean - Whether we show the angle lines out of the radar
				angleShowLineOut : true,

				//Boolean - Whether to show labels on the scale
				scaleShowLabels : false,

				// Boolean - Whether the scale should begin at zero
				scaleBeginAtZero : true,

				//String - Colour of the angle line
				angleLineColor : "rgba(0,0,0,.1)",

				//Number - Pixel width of the angle line
				angleLineWidth : 1,

				//String - Point label font declaration
				pointLabelFontFamily : "'Arial'",

				//String - Point label font weight
				pointLabelFontStyle : "normal",

				//Number - Point label font size in pixels
				pointLabelFontSize : 10,

				//String - Point label font colour
				pointLabelFontColor : "#666",

				//Boolean - Whether to show a dot for each point
				pointDot : true,

				//Number - Radius of each point dot in pixels
				pointDotRadius : 3,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius : 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill : true,

				//String - A legend template
				legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

			},

			initialize: function(data){
				this.PointClass = Chart.Point.extend({
					strokeWidth : this.options.pointDotStrokeWidth,
					radius : this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius : this.options.pointHitDetectionRadius,
					ctx : this.chart.ctx
				});

				this.datasets = [];

				this.buildScale(data);

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

						this.eachPoints(function(point){
							point.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activePointsCollection, function(activePoint){
							activePoint.fillColor = activePoint.highlightFill;
							activePoint.strokeColor = activePoint.highlightStroke;
						});

						this.showTooltip(activePointsCollection);
					});
				}

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset){

					var datasetObject = {
						label: dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						pointColor : dataset.pointColor,
						pointStrokeColor : dataset.pointStrokeColor,
						points : []
					};

					this.datasets.push(datasetObject);

					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						var pointPosition;
						if (!this.scale.animation){
							pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
						}
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
							y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					},this);

				},this);

				this.render();
			},
			eachPoints : function(callback){
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,callback,this);
				},this);
			},

			getPointsAtEvent : function(evt){
				var mousePosition = helpers.getRelativePosition(evt),
					fromCenter = helpers.getAngleFromPoint({
						x: this.scale.xCenter,
						y: this.scale.yCenter
					}, mousePosition);

				var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
					pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
					activePointsCollection = [];

				// If we're at the top, make the pointIndex 0 to get the first of the array.
				if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
					pointIndex = 0;
				}

				if (fromCenter.distance <= this.scale.drawingArea){
					helpers.each(this.datasets, function(dataset){
						activePointsCollection.push(dataset.points[pointIndex]);
					});
				}

				return activePointsCollection;
			},

			buildScale : function(data){
				this.scale = new Chart.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY : this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					angleLineColor : this.options.angleLineColor,
					angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
					// Point labels at the edge of each line
					pointLabelFontColor : this.options.pointLabelFontColor,
					pointLabelFontSize : this.options.pointLabelFontSize,
					pointLabelFontFamily : this.options.pointLabelFontFamily,
					pointLabelFontStyle : this.options.pointLabelFontStyle,
					height : this.chart.height,
					width: this.chart.width,
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2,
					ctx : this.chart.ctx,
					templateString: this.options.scaleLabel,
					labels: data.labels,
					valuesCount: data.datasets[0].data.length
				});

				this.scale.setScaleSize();
				this.updateScaleRange(data.datasets);
				this.scale.buildYLabels();
			},
			updateScaleRange: function(datasets){
				var valuesArray = (function(){
					var totalDataArray = [];
					helpers.each(datasets,function(dataset){
						if (dataset.data){
							totalDataArray = totalDataArray.concat(dataset.data);
						}
						else {
							helpers.each(dataset.points, function(point){
								totalDataArray.push(point.value);
							});
						}
					});
					return totalDataArray;
				})();


				var scaleSizes = (this.options.scaleOverride) ?
					{
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					} :
					helpers.calculateScaleRange(
						valuesArray,
						helpers.min([this.chart.width, this.chart.height])/2,
						this.options.scaleFontSize,
						this.options.scaleBeginAtZero,
						this.options.scaleIntegersOnly
					);

				helpers.extend(
					this.scale,
					scaleSizes
				);

			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets
				this.scale.valuesCount++;
				helpers.each(valuesArray,function(value,datasetIndex){
					var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
					this.datasets[datasetIndex].points.push(new this.PointClass({
						value : value,
						label : label,
						x: pointPosition.x,
						y: pointPosition.y,
						strokeColor : this.datasets[datasetIndex].pointStrokeColor,
						fillColor : this.datasets[datasetIndex].pointColor
					}));
				},this);

				this.scale.labels.push(label);

				this.reflow();

				this.update();
			},
			removeData : function(){
				this.scale.valuesCount--;
				this.scale.labels.shift();
				helpers.each(this.datasets,function(dataset){
					dataset.points.shift();
				},this);
				this.reflow();
				this.update();
			},
			update : function(){
				this.eachPoints(function(point){
					point.save();
				});
				this.reflow();
				this.render();
			},
			reflow: function(){
				helpers.extend(this.scale, {
					width : this.chart.width,
					height: this.chart.height,
					size : helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				});
				this.updateScaleRange(this.datasets);
				this.scale.setScaleSize();
				this.scale.buildYLabels();
			},
			draw : function(ease){
				var easeDecimal = ease || 1,
					ctx = this.chart.ctx;
				this.clear();
				this.scale.draw();

				helpers.each(this.datasets,function(dataset){

					//Transition each point first so that the line and point drawing isn't out of sync
					helpers.each(dataset.points,function(point,index){
						if (point.hasValue()){
							point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
						}
					},this);



					//Draw the line between all the points
					ctx.lineWidth = this.options.datasetStrokeWidth;
					ctx.strokeStyle = dataset.strokeColor;
					ctx.beginPath();
					helpers.each(dataset.points,function(point,index){
						if (index === 0){
							ctx.moveTo(point.x,point.y);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					},this);
					ctx.closePath();
					ctx.stroke();

					ctx.fillStyle = dataset.fillColor;
					ctx.fill();

					//Now draw the points over the line
					//A little inefficient double looping, but better than the line
					//lagging behind the point positions
					helpers.each(dataset.points,function(point){
						if (point.hasValue()){
							point.draw();
						}
					});

				},this);

			}

		});





	}).call(this);

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2873f2b6668948f5fbcf89290ed8e928.jpg"

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "05280eae6a34c07b496ee70321944950.jpg"

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "734adb3c2f4a3c0c0536c64c7a14e951.jpg"

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5408461aad11722d72751393c99bd88a.jpg"

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a957999c8b42583f962f7b375c4256f9.jpg"

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f80729fa47f25e4b59a79d250d6f59a.jpg"

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "04c1ae101b8af01155632d1ba44152c4.jpg"

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f25f8bb5142cb454a388cc86f45bab22.jpg"

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "07cea4632c713af3c294a0b3e55a9ea7.jpg"

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "96051217e14135319ed3c16feb6bcbc1.jpg"

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bef51d6f564336dd89d7ed9bfc2b7306.jpg"

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "72636fbde5e77b64fb70dfe489c19e56.jpg"

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5f735c918fb696e1f4d00c5a314ff404.jpg"

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2820a93f4f2482da017881422f3782c9.jpg"

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "027ad06a6b0521de30106e4f383beb1f.jpg"

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60e2d747ff5550595ed87a3ac9825037.jpg"

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ffa179fc1630c306045cca50aa595726.jpg"

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d7d1238cf93e76dbad9087044c8cb534.jpg"

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e4bdf92102005f86d46e2c6581930964.jpg"

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "241c584492a17f028d4d95fd6de84897.jpg"

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de5dc17b5795657d3860f0b33340a386.jpg"

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bf777db163867bd5aea8d1ecb4c93e49.jpg"

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2f9e2e556fb89d9bce9baa8595b14b47.jpg"

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a7e16a8368f1478a747222f224e4e72d.jpg"

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e7f8036ba02a302cc534237405ca3611.jpg"

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "551d32e6c70b929c986aafd9c70e1c54.jpg"

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a1245c20cb7bce17691d727504d057b7.jpg"

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8a6301e0638637af58a2ac6aad1d7c2c.jpg"

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c87b2c686546dd54eb179bc98af43564.jpg"

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "105f7e4963762d7cd587a55864418e08.jpg"

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "455a22a851ecf5fd5a982dca3cd29202.jpg"

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1df65d17178ef6dca740942e91a49a1c.jpg"

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0caa674c86f24b9f98cbc8175df8c36b.jpg"

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "12d87dc5e79211fb8c2bc83a468678ac.jpg"

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e649f4bceb8cdfbcb7ef24151781a4f.jpg"

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b71123be2ce92f4348efa4f31ab85068.jpg"

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7c6b9bb82a33e4c681d21ee2c0f2bd15.jpg"

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "79e4e26bf257193cb2df25e50b25ff98.jpg"

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b3bf86477419c5d2178e4bf7aa25dc38.jpg"

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f9c16632d36c07d90c4ebf1fd1dae549.jpg"

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0ffaa2ccef6577c6adc3ee1b69c2cd40.jpg"

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "29dd80e57c4adf63e1a9d3e3d41f7cae.jpg"

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b5b18c9c06c6580a47dfbfb8b9993268.jpg"

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c2674e6c8e8fe2900668ee36de5b8e04.jpg"

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c1686f7c49364b4bdbe1470e8c3d30bb.jpg"

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9baa80d1b278a35ebf7d37fde55a5f31.jpg"

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6392f30989408e444364476a401d1882.jpg"

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "90e38594d4f6375065ec4e0c391368b1.jpg"

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9fd2c7c4d143ff0dfa1fdb57b505a41a.jpg"

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "794e76e1737b4a1a8ea27582ab03af7e.jpg"

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2ad097cb46a01216f7fc7e7a976bf200.jpg"

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ff51511d222a46d3de089bd7c6665855.jpg"

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0c12fcf76ae0844b3881e5586ac83905.jpg"

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d3912df78e5b9eeacaba504d1783ed58.jpg"

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "661a658d490954c172d63dd39f6b76fa.jpg"

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f616756cdeec2f5cbb74fae008be1013.jpg"

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d8badfb595044ec2b3c6ca747a1f9850.jpg"

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0c419cb8637679293438aeef57bee932.jpg"

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0d396d9483576cb81ea04b973611170.jpg"

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7b9e94670ac9ad70a00366821b846680.jpg"

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "88e4d1f1d168155a6662515a8f476d96.jpg"

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7c45a899c579b85e65633295654d0713.jpg"

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4165bce28dab462a92b4e5545b9e3585.jpg"

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8f8a5c16af3a8bc628a7272de19f24d1.jpg"

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d5785103d516e339e5fb9ed9bc910fea.jpg"

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7d434cc09f72f743ceba35cc40551c31.jpg"

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "74c5430e9eb6d167e57bb1a2c84963ec.jpg"

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4c87650b491facb510a05f4094cf8aab.jpg"

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6138ef8979fecdb11790fb45c5180189.jpg"

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6ace220b28d2d5186abb40ad740e96e9.jpg"

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bb568b04c873e3997ef976000abb9fb6.jpg"

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8d1a087da08be2e70126a7570dbaa6f4.jpg"

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0d7affadfcd3d1ac91c9f4997d01c59e.jpg"

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1bc3d7520ca8ee7159d685c520960cd0.jpg"

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dc349c11026d89f376c8679b31f08148.jpg"

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "993ee09bcf65d9e497382decf37d2d22.jpg"

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2a91470d94cf966efd72567c990cb584.jpg"

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d5e50f7252b39e2de5fe081cbf3eaaaf.jpg"

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a7ecd336b65b823d4a5ae2c615b8e956.jpg"

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1322538c5dffcb2bada9db7a8375889f.jpg"

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f0d1c0514fd17c5eaa4abbcb6342ea6a.jpg"

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "83d2295227ed22a556cacf40526c2329.jpg"

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "322a9df01071d2c2fbb9b19de5cab224.jpg"

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8aa828e588ed6bbc542c8cd53ba0a6bb.jpg"

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "feb05f6709606fedb50a605ab21fef49.jpg"

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "946485c6bf7bc6056bdc90febb74e925.jpg"

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dfa52b2b92d0255f17e932568be89413.jpg"

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8599639e71b2f1a75eeaae70e4c7edb0.jpg"

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "86baba823d80356c83dde6915965341b.jpg"

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "acb6efbac4e81865df86fdb22dbdb2f4.jpg"

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0b47521da179e821eaf45c60761b31dc.jpg"

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9d7269536205ef9a606469992d1811b0.jpg"

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fd48a76a13b73fdee680a4ae18ac1a21.jpg"

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "70f9222d9a163d3b13c25619bba3fbe5.jpg"

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2e94526ba209717f2648a9b687461a35.jpg"

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "12fc3758968bd2e0404679f42ed86a58.jpg"

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "91494a97d68d0dd5b197eec5a80eb3cf.jpg"

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a9afabf5f5344a947d5aca54a223b553.jpg"

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1534f2efc3a254b87ad12b801431b407.jpg"

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9c1fb3ee1e6ba466bbd96e4cb026c2cc.jpg"

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6501c0ac17dec50a49ddd8f43c713368.jpg"

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "16a74dfdafdb384fc5a2865e74c35116.jpg"

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e285762d03ced6a73891ad4a27fe538b.jpg"

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "11fad230b4ae60e5459f645b8398e2c9.jpg"

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "004b7b28d2672bf879f116afcc5dcf26.jpg"

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7daf9a99b3de4a5742900ba9edae4ffe.jpg"

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a3f961a36749519e3182ead6677af71b.jpg"

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "91d2608b81c84b11258d6130a074bf49.jpg"

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cb28d59423f199007ba08d9d8014ab63.jpg"

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2107d32d0829d13607d6c82e0a2bf6a6.jpg"

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "adae903708820c4e6344fa9c7d03cafc.jpg"

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dda6ae7028c1b21d1d911081c58f1127.jpg"

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "46f75ff5a7bfbf854a2e75e03185e05a.jpg"

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a7bbcf92cc95b9b0a75dd9ddace4ccce.jpg"

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "79a38586458e883d3df3e643cc99e78e.jpg"

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b089c7f94f8ec834909c02457ace0ea1.jpg"

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eb9517fd0955afbc37463130a6a71311.jpg"

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "48b0d610c4e72bf42524cb1c1546ba8f.jpg"

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e61ab6d65a6b410db6ff07bb64c092c1.jpg"

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ade184f54cf1552f59d607849618ce12.jpg"

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "75e17010cc26e946f06a30f8c015df3c.jpg"

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a02a623a5eed3283a1ea1865a9b13d66.jpg"

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9c10b856072fa653fc3badc660b06d62.jpg"

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3aee567116a70fb8e2586c91b3c8eee2.jpg"

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "55c0c00337dcbe60e7d96d90daf60d96.jpg"

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ffa84347cf517248fa1300d1b22df210.jpg"

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eeeb132363e4935879db6403fbea06bd.jpg"

/***/ },
/* 359 */,
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
]);