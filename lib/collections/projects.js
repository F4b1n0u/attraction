Projects = new Mongo.Collection('projects');

Projects.getByParticipation = function(userId) {
    var projects = Projects.find({
        participants: userId
    }, {
        sort: {
            'date.creation': -1
        }
    });

    return projects;
};

Projects.getParticipants = function(projectId) {
    var project = Projects.findOne({
        _id: projectId
    });

    var participants = [];
    if (project) {
        participants = Users.find({
            _id: {
                $in: project.participants
            }
        }, {
            fields: {
                '_id': true,
                'username': true,
                'timeZone': true,
                'emails': true,
                'status': true
            }
        });
    }
    return participants;
};

Projects.allow({
    update: function(userId, doc) {
        return !!userId && doc.owner === userId;
    },
    remove: function(userId, doc) {
        return !!userId && doc.owner === userId;
    }
})

Meteor.methods({
    projectInsert: function(projectProperties) {
        projectProperties.owner = Meteor.userId();
        var timeZone = Users.findOne().timeZone;
        projectProperties.date = {
            creation: moment.tz(timeZone).format()
        };

        var projectId = Projects.insert(projectProperties);

        return {
            projectId: projectId
        };
    }
});
