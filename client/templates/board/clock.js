Template.clock.onCreated(function() {
    var dateFormated = moment().format('LLL')
    console.log(dateFormated);
    Session.set('now', dateFormated);
    Meteor.setInterval(function() {
        Session.set('now', dateFormated);
    }, 1000);
});

Template.clock.helpers({
    time: function() {
        return Session.get('now');
    },
    timezone: function() {

    }
});
