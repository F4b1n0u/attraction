Template.clock.onCreated(function() {
    var format = 'LL HH:mm:ss';

    var timeZone = Session.get('timeZone');
    Session.set('now', moment.tz(timeZone).format(format));
    Meteor.setInterval(function() {
        var timeZone = Session.get('timeZone');
        Session.set('now', moment.tz(timeZone).format(format));
    }, 1000);
});

Template.clock.helpers({
    now: function() {
        return Session.get('now');
    },
    timeZone: function() {
        return Session.get('timeZone');
    }
});
