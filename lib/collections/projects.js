Projects = new Mongo.Collection('projects');

Projects.getByParticipation = function(userId) {
    var projects = Projects.find({
        participants: userId
    });

    return projects;
};

Projects.getParticipation = function(projectId) {
    var projects = Projects.find({
            _id: projectId
        },{
        fields: {
            '_id': false,
            'participants': true
        }
    });

    return projects;
};

Projects.allow({
    update: function(userId, doc) {
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
