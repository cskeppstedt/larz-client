var classnames   = require('classnames'),
    Loader       = require('../loader/loader'),
    loadingStore = require('../../store/cs_players_loading'),
    playersStore = require('../../store/cs_players'),
    CsPlayer     = require('../cs_player/cs_player'),
    React        = require('react'),
    Reflux       = require('reflux');


require('./cs_players.css');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(playersStore, 'players'),
        Reflux.connect(loadingStore, 'loading')
    ],

    getInitialState: function() {
        return {
            players: [],
            loading: {
                playersLoading: false
            }
        };
    },

    render: function() {
        var classes = classnames({
            'cs-players': true,
            'is-loading': this.state.loading.playersLoading
        });

        return (
            <div className={classes}>
                <Loader isVisible={this.state.loading.playersLoading} />
                {this.renderPlayers()}
            </div>
        );
    },

    renderPlayers: function () {
        if (!this.state.players || this.state.players.count === 0) {
            return false;
        }

        return (
            <ul className='cs-players__list'>
                {this.state.players.map((player) => (
                    <CsPlayer key={player.id} {...player} />
                ))}
            </ul>
        )
    }
});
