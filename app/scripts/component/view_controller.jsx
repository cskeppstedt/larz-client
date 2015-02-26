var Reflux = require('reflux'),
    React  = require('react'),
    matchesStore = require('../store/matches'),
    MatchesList  = require('./matches_list');


module.exports = React.createClass({
    mixins: [Reflux.connect(matchesStore, 'matches')],

    getInitialState: function() {
        return {
            matches: []
        };
    },

    render: function() {
        return <MatchesList matches={this.state.matches} />
    }
});
