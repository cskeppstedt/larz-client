var React  = require('react/addons'),
    transform = require('./transform');

require('./stats.styl');


module.exports = React.createClass({
    render: function() {
        var data = transform.toLegend(this.props.stats);

        return (
            <ul className='legend'>
                {data.map(d => {
                    var style = {
                        backgroundColor: d.color
                    };
                    return <li className='legend__item' key={d.label}>
                      <span className='legend__item__color' style={style}></span>
                      <span className='legend__item__label'>{d.label}</span>
                    </li>
                })}
            </ul>
        );
    }
});
