var React = require('react/addons'),
    Match = require('../match/match'),
    DateHeader = require('../date_header/date_header');

require('./matchlist.css');


module.exports = React.createClass({
    render: function() {
        var subviews = [],
            lastDate;

        this.props.matches.forEach((match) => {
            if (match.date !== lastDate) {
                lastDate = match.date;
                subviews.push(<DateHeader date={match.date} />);
            }

            subviews.push(<Match key={match.match_id} match={match} />);
        });

        return (
            <ul className='matchlist'>
                {subviews}
            </ul>
        );
    }
});
