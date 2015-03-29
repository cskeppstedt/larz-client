var React  = require('react/addons'),
    Logo = require('./logo/logo'),
    MatchList = require('./matchlist/matchlist'),
    VideoBlog  = require('./videoblog/videoblog');


module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Logo />
                <VideoBlog />
                <MatchList />
            </div>
        );
    }
});
