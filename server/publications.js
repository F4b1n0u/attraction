Meteor.publish('activities', function(projectId) {
    return Activities.getAll(projectId);
});

Meteor.publish('projects', function(userId) {
    return Projects.getByParticipation(userId);
});

Meteor.publish('participation', function(projectId) {
    var participantIds = Projects.getParticipation(projectId).fetch();
    if (participantIds.length) {
        participantIds = participantIds[0].participants
        var participants = Users.find({
            _id: {
                $in: participantIds
            }
        }, {
            fields: {
                '_id': true,
                'username': true,
                'timeZone': true,
                'emails': true
            }
        });

        return participants;
    }
});

Meteor.publish('directory', function() {
    var directory = Users.find({}, {
        fields: {
            '_id': true,
            'emails': true
        }
    });

    return directory;
});
