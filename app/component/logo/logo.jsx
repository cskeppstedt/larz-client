var React = require("react");

require("./logo.css");

const embedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/670122530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

module.exports = React.createClass({
  render: function() {
    return (
      <div className="themesongWrapper">
        <iframe
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src={embedUrl}
          className="themesong"
        />
      </div>
      // <div className='logo'/>
    );
  }
});
