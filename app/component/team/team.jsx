var React = require('react/addons'),
    { team } = require('../../config/config');

require('./team.styl');


module.exports = React.createClass({
    render: function() {
        var winningElem;
        if (this.props.winning === true) {
            winningElem = <span className='team__name__winning'>(winners)</span>;
        }

        var teamClasses = React.addons.classSet({
            'team': true,
            'team--winning': this.props.winning
        });

        return (
            <div className={teamClasses}>
                <h2 className='team__name'>
                    {this.props.name}
                    {winningElem}
                </h2>
                <ul className='team__players'>
                    {this.props.players.map(function(player) {
                        var heroClassName = 'player__hero-icon--' + player.hero_id,
                            isInTeam = team.indexOf(player.nickname) >= 0,
                            playerNameClasses = React.addons.classSet({
                                'player__name': !isInTeam,
                                'player__name--in-team': isInTeam
                            });

                        return (<li className='player' key={player.nickname}>
                            <div className='player__wrapper--left'>
                              <span className={heroClassName}></span>
                              <span className='player__name'>
                                {player.nickname}
                              </span>
                            </div>
                            <div className='player__wrapper--right'>
                              <span className='player__kills'>{player.herokills}</span>
                              <span className='player__deaths'>{player.deaths}</span>
                              <span className='player__assists'>{player.heroassists}</span>
                            </div>
                        </li>);
                    })}
                </ul>
            </div>
        );
    }
});
