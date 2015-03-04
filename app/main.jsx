'use strict';

var React = require('react/addons'),
    ViewController = require('./component/view_controller'),
    listener = require('./listener/listener'),
    node = document.body;

require('./reset.css');
require('./main.css');

React.render(<ViewController />, node);

listener.start();
