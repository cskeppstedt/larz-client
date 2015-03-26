var React = require('react/addons'),
    Team  = require('../team/team');

require('./loader.styl');


module.exports = React.createClass({
    render: function() {

        var classes = React.addons.classSet({
            'loader': true,
            'is-visible': this.props.isVisible,
            'is-hidden': !this.props.isVisible
        });

        return (<div className={classes}>Loading</div>);
    }
});
