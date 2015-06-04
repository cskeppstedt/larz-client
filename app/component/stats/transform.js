var color = (key) => {
    var defaultColor = '#000000';
    var map = {
        'skepparn_': '#F4B350',
        'Schln': '#87D37C',
        'zwex': '#52B3D9',
        'Pacoloco': '#D35400',
        'Adelsmansman': '#6C7A89'
    };

    return map[key] || defaultColor;
};

var toLegend = (stats) => {
    if (!stats || !stats.length) {
        return [];
    }

    var sample = stats[stats.length-1];

    return Object.keys(sample.data).map( (key) => {
        return {
            label: key,
            color: color(key)
        };
    });
};

var mapData = (stats, player) => {
    var dataPoints = [],
        lastPoint  = null,
        propName   = 'mmr';

    stats.forEach( s => {
        var value = lastPoint;
        if (s.data[player] && s.data[player][propName] !== undefined)
            lastPoint = value = parseInt(s.data[player][propName], 10);
        dataPoints.push(value);
    });

    return dataPoints;
};

var toChart = (stats) => {
    stats = stats.reverse();

    if (!stats || !stats.length) {
        return {};
    }

    var sample  = stats[stats.length-1];
    var players = Object.keys(sample.data);

    var labels = stats.map( s => '' );

    var datasets = players.map( player => { return {
            label: player,
            strokeColor: color(player),
            pointColor: color(player),
            pointStrokeColor: color(player),
            pointHighlightFill: '#fff',
            pointHighlightStroke: color(player),
            data: mapData(stats, player)
        };
    });


    return {
        labels,
        datasets
    };
};

module.exports = {
    toLegend,
    toChart
};
