Meteor.publish('activities', function() {
    return Activities.getAll();
});