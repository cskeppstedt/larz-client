var React = require('react');


module.exports = React.createClass({
    render: function() {
        console.log('rendering', this.props);
        return (
            <li>
                {this.props.match.match_id}
            </li>
        );
    }
});
