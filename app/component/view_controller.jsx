var React  = require('react'),
    Logo = require('./logo/logo'),
    MatchList = require('./matchlist/matchlist'),
    Stats = require('./stats/stats'),
    VideoBlog  = require('./videoblog/videoblog'),
    HonHonHon = require('./honhonhon/honhonhon'),
    CsPlayers = require('./cs_players/cs_players');


module.exports = React.createClass({
    render: function() {
        return this.renderCs();
    },

    renderCs: function () {
        return (
            <div>
                <Logo />
                <CsPlayers />
            </div>
        )
    },

    renderHon: function() {
        return (
            <div>
                <Logo />
                <HonHonHon />
                <VideoBlog />
                <Stats />
                <MatchList />
            </div>
        );
    }
});
