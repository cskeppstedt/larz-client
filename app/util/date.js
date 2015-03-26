var DATE_EXPRESSION = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,

    MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    toFriendlyDate = (yyyy_mm_dd) => {
        var yyyy, mm, dd;

        [_, yyyy, mm, dd] = yyyy_mm_dd.match(DATE_EXPRESSION);
        mm = parseInt(mm, 10);
        dd = parseInt(dd, 10);

        return `${MONTHS[mm-1]} ${dd}, ${yyyy}`;
    };


module.exports = {
    toFriendlyDate
};