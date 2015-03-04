var React = require('react');

require('./match.css');


module.exports = React.createClass({
    render: function() {
        console.log('rendering', this.props);
        return (
            <li className='match'>
                {this.props.match.match_id}
            </li>
        );
    }
});
