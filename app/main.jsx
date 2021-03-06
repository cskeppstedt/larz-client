'use strict';

var React            = require('react'),
    ReactDOM         = require('react-dom'),
    ViewController   = require('./component/view_controller'),
    posts_listener   = require('./listener/posts'),
    stats_listener   = require('./listener/stats'),
    matches_listener = require('./listener/matches'),
    cs_listener      = require('./listener/cs_players'),
    node = document.body;

require('./reset.css');
require('./main.css');

ReactDOM.render(<ViewController />, document.getElementById('app'));

// matches_listener.start();
// posts_listener.start();
// stats_listener.start();

cs_listener.start();