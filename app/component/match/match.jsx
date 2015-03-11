var React = require('react/addons'),
    Team  = require('../team/team');

require('./match.styl');


module.exports = React.createClass({
    render: function() {
        var titlePrefix = this.props.match.date || 'Unknown date';

        return (
            <li className='match'>
                <h2 className='match__title'>
                    {titlePrefix}
                    <span className='match__title__id'>{this.props.match.match_id}</span>
                </h2>
                <Team players={this.props.match.team1} name='Team 1' winning={this.props.match.winning_team === '1'}/>
                <Team players={this.props.match.team2} name='Team 2' winning={this.props.match.winning_team === '2'}/>
            </li>
        );
    }
});
