var classnames   = require('classnames'),
    DateHeader   = require('../date_header/date_header'),
    Loader       = require('../loader/loader'),
    loadingStore = require('../../store/loading'),
    Match        = require('../match/match'),
    matchesStore = require('../../store/matches'),
    React        = require('react'),
    Reflux       = require('reflux');


require('./matchlist.css');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(matchesStore, 'matches'),
        Reflux.connect(loadingStore, 'loading')
    ],

    getInitialState: function() {
        return {
            matches: [],
            loading: {
                matchesLoading: false
            }
        };
    },

    render: function() {
        var subviews = [],
            lastDate,
            classes = classnames({
                'matchlist': true,
                'is-loading': this.state.loading.matchesLoading
            });


        this.state.matches.forEach((match) => {
            if (match.date !== lastDate) {
                lastDate = match.date;
                subviews.push(<DateHeader key={'dateheader' + match.match_id} date={match.date} />);
            }

            subviews.push(<Match key={'match' + match.match_id} match={match} />);
        });

        return (
            <div className={classes}>
                <Loader isVisible={this.state.loading.matchesLoading} />
                <ul className='matchlist__list'>
                    {subviews}
                </ul>
            </div>
        );
    }
});
