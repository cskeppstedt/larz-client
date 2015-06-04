var React  = require('react/addons'),
    LineChart = require("react-chartjs").Line,
    transform = require('./transform');

require('./stats.styl');


var chartOptions = {
        scaleShowGridLines: false,
        pointDotRadius: 3,
        scaleIntegersOnly: false,
        multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",
        datasetFill: false,
        responsive: true
    };

module.exports = React.createClass({
    render: function() {
        //var chartData = transform.toChart(this.props.stats);
        chartData = transform.toChart(this.props.stats);
        console.log('chartData', chartData);
        if (!chartData || !chartData.datasets) {
            return <div />;
        }

        return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>;
    }
});
