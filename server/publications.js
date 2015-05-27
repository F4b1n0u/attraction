Meteor.publish('activities', function() {
    return Activities.getAll();
});

Meteor.publish('users', function() {
    return Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            '_id': 1,
            'username': 1,
            'timeZone': 1
        }
    });
})
