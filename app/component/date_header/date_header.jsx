var React = require('react'),
    dateUtil = require('../../util/date');

require('./date_header.styl');


module.exports = React.createClass({
    render: function() {
        return (
            <li className='date-header'>
                {dateUtil.toFriendlyDate(this.props.date)}
            </li>
        );
    }
});
