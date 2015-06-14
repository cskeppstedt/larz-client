var players = require('../../config/config').team;

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
    return players.map( (key) => {
        return {
            label: key,
            color: color(key)
        };
    });
};

var filterData = (stats) => {
    // If any player has a value of null for a date,
    // the graph library fails to scale the y-axis.
    return stats.filter( s => {
        var p, data;

        for(p in players) {
            data = s.data[players[p]]
            if (data === null || data === undefined) {
                return false;
            }
        }

        return true;
    });
};

var mapData = (stats, player) => {
    var propName = 'mmr';

    return stats.map( s => {
        return parseInt(s.data[player][propName], 10);
    });
};

var toChart = (stats) => {
    stats = stats.reverse();

    if (!stats || !stats.length) {
        return {};
    }

    stats = filterData(stats);
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
