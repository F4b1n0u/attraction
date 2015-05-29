Activities = new Mongo.Collection('activities');

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
        var activityId = Activities.insert(activityProperties);

        return {
            activityId: activityId
        };
    },
    activityMove: function(activityProperties, isReactive) {
        if (isReactive === undefined) {
            isReactive = true;
        }
        if (ownsDocument(Meteor.userId(), activityProperties)) {
            activityProperties.status.date = moment.utc().format();
            var activityId = Activities.update(activityProperties._id, activityProperties);
        }
    }
});
