var React = require('react'),
    Match = require('../match/match');


module.exports = React.createClass({
    render: function() {
        console.log('rendering', this.props.matches);
        return (
            <ul>
                {this.props.matches.map(function(match) {
                    return <Match key={match.match_id} match={match}/>;
                })}
            </ul>
        );
    }
});
