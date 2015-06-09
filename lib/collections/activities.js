Activities = new Mongo.Collection('activities');

Activities.allow({
    update: function(userId, doc) {
        return !!userId && doc.owner === userId;
    },
    remove: function(userId, doc) {
        return !!userId && doc.owner === userId;
    }
});

Activities.attachSchema(new SimpleSchema({
    'owner': {
        type: String,
        optional: true
    },
    'project': {
        type: String,
        optional: false
    },
    'description': {
        type: String,
        optional: false
    },
    'status': {
        type: Object,
        optional: false
    },
    'status.label': {
        type: String,
        optional: false
    },
    'status.date': {
        type: String,
        optional: true
    },
    'status.previous': {
        type: String,
        optional: true
    }
}));

Activities.getAll = function(projectId) {
    var activities = Activities.find({
        'project': projectId
    }, {
        sort: {
            'owner': 1
        }
    });

    return activities;
};

Activities.getByStatusAndPeriod = function(projectId, status, period) {
    var query = {
        'project': projectId,
        'status.label': status
    };

    if (period) {
        var timeZone = Users.findOne().timeZone;
        var now = moment.tz(timeZone);
        var minimalDate = now.subtract(period.value, period.unit);
        query['status.date'] = {
            $gt: minimalDate.format()
        };
    }

    var activities = Activities.find(query, {
        sort: {
            'owner': 1,
            'status.date': 1
        }
    });

    return activities;
};

Meteor.methods({
    activityInsert: function(projectId, activityProperties) {
        var timeZone = Users.findOne().timeZone;

        activityProperties.project = projectId;
        activityProperties.status.date = moment.tz(timeZone).format();
        activityProperties.status.previous = '';

        var activityId = Activities.insert(activityProperties);

        return {
            activityId: activityId
        };
    },
    activityMove: function(activityProperties, direction) {
        if (ownsDocument(Meteor.userId(), activityProperties)) {
            var status = activityProperties.status.label;
            switch (direction) {
                case 'forward':
                    switch (status) {
                        case 'to-do':
                            status = 'in-progress'
                            break;
                        case 'in-progress':
                            status = 'done'
                            break;
                    }
                    break;
                case 'backward':
                    switch (status) {
                        case 'done':
                            status = 'in-progress'
                            break;
                        case 'in-progress':
                            status = 'to-do'
                            break;
                    }
                    break;
            }

            var activityId = Activities.update(activityProperties._id, {
                $set: {
                    'status.label': status,
                    'status.date': moment.utc().format(),
                    'status.previous': activityProperties.status.label
                }
            });
        }
    }
});
