'use strict';

var React = require('react'),
    ViewController = require('./component/view_controller'),
    listener = require('./listener/listener'),
    node = document.body;

require('./main.css');

React.render(<ViewController />, node);

listener.start();
