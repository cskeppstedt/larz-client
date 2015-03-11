var React = require('react/addons');

require('./team.styl');


module.exports = React.createClass({
    render: function() {
        var winningElem;
        if (this.props.winning === true) {
            winningElem = <span className='team__name__winning'>(winners)</span>;
        }

        var classes = React.addons.classSet({
            'team': true,
            'team--winning': this.props.winning
        });

        return (
            <div className={classes}>
                <h2 className='team__name'>
                    {this.props.name}
                    {winningElem}
                </h2>
                <ul className='team__players'>
                    {this.props.players.map(function(player) {
                        var heroClassName = 'player__hero-icon--' + player.hero_id;

                        return (<li className='player' key={player.nickname}>
                            <span className={heroClassName}></span>
                            <span className='player__name'>{player.nickname}</span>
                            <span className='player__kills'>{player.herokills}</span> |
                            <span className='player__deaths'>{player.deaths}</span> | 
                            <span className='player__assists'>{player.heroassists}</span>
                        </li>);
                    })}
                </ul>
            </div>
        );
    }
});
