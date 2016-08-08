var React  = require('react'),
    Logo = require('./logo/logo'),
    MatchList = require('./matchlist/matchlist'),
    Stats = require('./stats/stats'),
    VideoBlog  = require('./videoblog/videoblog'),
    HonHonHon = require('./honhonhon/honhonhon');


module.exports = React.createClass({
    render: function() {
        return this.renderHon();
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
