var React = require('react/addons');

require('./player.styl');


module.exports = React.createClass({
    getInitialState: function() {
        return {
            showStats: false
        };
    },

    onClick: function() {
        this.setState({
            showStats: !this.state.showStats
        });
    },

    render: function() {
        var player = this.props.player,
            heroClassName = 'player__hero-icon--' + player.hero_id,
            classes = React.addons.classSet({
                'player': true,
                'is-expanded': this.state.showStats
            }),
            statsContent;

        if (this.state.showStats) {
            statsContent = (
              <dl className='player__stats'>
                <dt className='player__stats__label'>LVL</dt>
                <dd className='player__stats__value'>{player.level}</dd>
                <dt className='player__stats__label'>APM</dt>
                <dd className='player__stats__value'>{player.apm}</dd>
                <dt className='player__stats__label'>GPM</dt>
                <dd className='player__stats__value'>{player.gpm}</dd>
                <dt className='player__stats__label'>XPM</dt>
                <dd className='player__stats__value'>{player.xpm}</dd>
              </dl>
            );
        } else {
            statsContent = (
              <dl className='player__stats is-hidden'></dl>
            );
        }

        return (
          <li className={classes} onClick={this.onClick}>
              <div className='player__wrapper--left'>
                <span className={heroClassName}></span>
                <span className='player__name'>
                  {player.nickname}
                </span>
                {statsContent}
              </div>
              <div className='player__wrapper--right'>
                <span className='player__kills'>{player.herokills}</span>
                <span className='player__deaths'>{player.deaths}</span>
                <span className='player__assists'>{player.heroassists}</span>
              </div>
          </li>
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

