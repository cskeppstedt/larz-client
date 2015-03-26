var Reflux = require('reflux'),
    React  = require('react/addons'),
    postsStore = require('../store/posts'),
    Logo = require('./logo/logo'),
    MatchList = require('./matchlist/matchlist'),
    VideoBlog  = require('./videoblog/videoblog');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(postsStore, 'posts')
    ],

    getInitialState: function() {
        return {
            posts: []
        };
    },

    // <Logo />
    // <VideoBlog posts={this.state.posts} />

    render: function() {
        return (
            <div>
                <MatchList />
            </div>
        );
    }
});
