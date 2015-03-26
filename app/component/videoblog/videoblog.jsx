var React = require('react/addons');

require('./videoblog.css');


module.exports = React.createClass({
    render: function() {
        return (
            <div className='videoblog'>
                <h1 className='videoblog__title'>HoNt i veckan</h1>
                {this.props.posts.map(function(post) {
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
