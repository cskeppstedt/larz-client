var Reflux = require('reflux'),
    React  = require('react/addons'),
    matchesStore = require('../store/matches'),
    Logo = require('./logo/logo'),
    MatchList  = require('./matchlist/matchlist');


module.exports = React.createClass({
    mixins: [Reflux.connect(matchesStore, 'matches')],

    getInitialState: function() {
        return {
            matches: []
        };
    },

    render: function() {
        return (
            <div>
                <Logo />
                <MatchList matches={this.state.matches} />
            </div>
        );
    }
});
