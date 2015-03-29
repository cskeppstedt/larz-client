var Reflux = require('reflux'),
    React  = require('react/addons'),
    postsStore = require('../../store/posts');

require('./videoblog.css');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(postsStore, 'posts')
    ],

    getInitialState: function() {
        return {
            posts: []
        };
    },

    render: function() {
        return (
            <div className='videoblog'>
                <h1 className='videoblog__title'>HoNt i veckan</h1>
                {this.state.posts.map(function(post) {
                    return <iframe
                        className='videoblog__post'
                        src={post.embed_url}
                        frameBorder='0'
                        allowFullScreen />;
                })}
            </div>
        );
    }
});
