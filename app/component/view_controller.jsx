var Reflux = require('reflux'),
    React  = require('react/addons'),
    matchesStore = require('../store/matches'),
    postsStore = require('../store/posts'),
    Logo = require('./logo/logo'),
    MatchList = require('./matchlist/matchlist'),
    VideoBlog  = require('./videoblog/videoblog');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(matchesStore, 'matches'),
        Reflux.connect(postsStore, 'posts')
    ],

    getInitialState: function() {
        return {
            matches: [],
            posts: []
        };
    },

    render: function() {
        return (
            <div>

                <MatchList matches={this.state.matches} />
            </div>
        );
    }
});
