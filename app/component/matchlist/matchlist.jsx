var React = require('react/addons'),
    Match = require('../match/match');

require('./matchlist.css');


module.exports = React.createClass({
    render: function() {
        console.log('rendering', this.props.matches);
        return (
            <ul className='matchlist'>
                {this.props.matches.map(function(match) {
                    return <Match key={match.match_id} match={match}/>;
                })}
            </ul>
        );
    }
});
