var Reflux = require('reflux'),
    React  = require('react'),
    matchesStore = require('../store/matches'),
    MatchList  = require('./matchlist/matchlist');


module.exports = React.createClass({
    mixins: [Reflux.connect(matchesStore, 'matches')],

    getInitialState: function() {
        return {
            matches: []
        };
    },

    render: function() {
        return <MatchList matches={this.state.matches} />
    }
});
