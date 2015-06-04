'use strict';

var React = require('react/addons'),
    ViewController   = require('./component/view_controller'),
    posts_listener   = require('./listener/posts'),
    stats_listener   = require('./listener/stats'),
    matches_listener = require('./listener/matches'),
    node = document.body;

require('./reset.css');
require('./main.css');

React.render(<ViewController />, node);

matches_listener.start();
posts_listener.start();
stats_listener.start();
