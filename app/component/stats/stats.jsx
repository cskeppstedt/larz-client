var Reflux = require('reflux'),
    React  = require('react'),
    statsStore = require('../../store/stats'),
    StatsLegend = require('./stats_legend'),
    StatsChart = require('./stats_chart');

require('./stats.styl');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(statsStore, 'stats')
    ],

    getInitialState: function() {
        return {
            stats: []
        };
    },

    render: function() {
        return (
            <div className='stats'>
                <h1 className='stats__title'>MMR last 14 days</h1>
                <div className='stats__chart'>
                    <StatsChart stats={this.state.stats} />
                </div>
                <div className='stats__legend'>
                    <StatsLegend stats={this.state.stats} />
                </div>
            </div>
        );
    }
});
