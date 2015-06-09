Meteor.publish('activities', function(projectId) {
    return Activities.getAll(projectId);
});

Meteor.publish('projects', function(userId) {
    return Projects.getByParticipation(userId);
});

Meteor.publish('participation', function(projectId) {
    return Projects.getParticipants(projectId);
});

Meteor.publish('directory', function() {
    return Users.find({}, {
        fields: {
            '_id': 1,
            'username': 1,
            'emails': 1,
            'status': 1
        }
    });
});
