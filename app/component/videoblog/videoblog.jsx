var React = require('react/addons');

require('./videoblog.css');


module.exports = React.createClass({
    render: function() {
        return (
            <div className='videoblog'>
                <h1 className='videoblog__title'>HoNt i veckan</h1>
                {this.props.posts.map(function(post) {
                    // <iframe width="560" height="315" src="https://www.youtube.com/embed/koTjAM1TD4k" frameborder="0" allowfullscreen></iframe>
                    return <iframe className='videoblog__post' src={post.embed_url}/>;
                })}
            </div>
        );
    }
});
