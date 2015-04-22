var React  = require('react/addons'),
    Player = require('../player/player');

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
                        return <Player key={player.nickname} player={player}/>;
                    })}
                </ul>
            </div>
        );
    }
});
/*
apm: "122"
deaths: "5"
delta_mmr: "4.940"
denies: "6"
gpm: "349"
hero_id: "14"
heroassists: "10"
herokills: "8"
lasthits: "133"
level: "19"
nickname: "kha_alim"
wards: "0"
xpm: "517"
*/
