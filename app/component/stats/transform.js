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
    var mem = (function(memory) {
        return {
            store: (player, data) => {
                memory[player] = data;
            },

            recall: (player, s) => {
                if (memory[player]) {
                    console.log('actual recall for', player);
                    return memory[player];
                }

                // if we have no historic data, look ahead
                console.log('looking ahead for', player);
                for(var i = 1+stats.indexOf(s); i<stats.length; i++) {
                    if (stats[i] && stats[i].data && stats[i].data[player]) {
                        return memory[player] = stats[i].data[player];
                    }
                }
            }
        }
    })({});

    return stats.map( s => {
        var p, data, player;

        for(p in players) {
            player = players[p];
            data = s.data[player];

            if (data === null || data === undefined) {
                data = mem.recall(player, s);
                s.data[player] = data;
                console.log('recalled for', player, data);
            } else {
                mem.store(player, data);
            }
        }

        return s;
    });
};

var mapData = (stats, player) => {
    var propName = 'mmr';

    return stats
        .filter( s => s.data[player] && s.data[player] && s.data[player][propName])
        .map( s => {
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
