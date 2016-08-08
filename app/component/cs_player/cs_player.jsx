var React = require('react'),
    playerNames  = require('../../config/config').players;

require('./cs_player.styl');

function kd (kills, deaths) {
    return kills + '/' + deaths + ' (' + (kills / deaths).toFixed(2) + ')'
}

function hours (seconds) {
    return (seconds / 3600).toFixed(1) + 'h';
}

function percentage (number, total) {
    return (100 * number / total).toFixed(1) + '%';
}

function matchOutcome (wins, rounds) {
    var loses = rounds - wins;
    if (wins === 15 && rounds === 30) {
        return 'Draw (15-15)';
    } else if (wins > 15) {
        return 'Won (' + wins + '-' + loses + ')'
    } else {
        return 'Lost (' + loses + '-' + wins + ')'
    }
}

module.exports = React.createClass({
    render: function() {
        var stats = this.props.stats;

        return (
            <li className='cs-player'>
                <h2 className='cs-player__title'>
                    {playerNames[this.props.steamid]}
                </h2>

                <div className='cs-player__content'>
                    <div className='content__column'>
                        <h3 className='cs-player__header'>Last match</h3>
                        <dl className='cs-player__stats-list'>
                            <dt className='stats-list__label'>Kills/deaths</dt>
                            <dd className='stats-list__value'>{kd(stats.last_match_kills, stats.last_match_deaths)}</dd>

                            <dt className='stats-list__label'>Match outcome</dt>
                            <dd className='stats-list__value'>{matchOutcome(stats.last_match_wins, stats.last_match_rounds)}</dd>
                        </dl>
                    </div>
                    <div className='content__column'>
                        <h3 className='cs-player__header'>Totals</h3>
                        <dl className='cs-player__stats-list'>
                            <dt className='stats-list__label'>Kills/deaths</dt>
                            <dd className='stats-list__value'>{kd(stats.total_kills, stats.total_deaths)}</dd>

                            <dt className='stats-list__label'>Time played</dt>
                            <dd className='stats-list__value'>{hours(stats.total_time_played)}</dd>

                            <dt className='stats-list__label'>Matches</dt>
                            <dd className='stats-list__value'>Won {stats.total_matches_won} of {stats.total_matches_played} ({percentage(stats.total_matches_won, stats.total_matches_played)})</dd>
                        </dl>
                    </div>
                </div>
            </li>
        );
    }
});
