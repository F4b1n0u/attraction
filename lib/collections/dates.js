Meteor.methods({
    getServerDate: function() {
        return moment.tz('Europe/London').format();
    }
});
