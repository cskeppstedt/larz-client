var classnames   = require('classnames'),
    React = require('react'),
    Team  = require('../team/team');

require('./loader.styl');


module.exports = React.createClass({
    render: function() {

        var classes = classnames({
            'loader': true,
            'is-visible': this.props.isVisible,
            'is-hidden': !this.props.isVisible
        });

        return (<div className={classes}>Loading</div>);
    }
});
