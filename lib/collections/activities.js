Activities = new Mongo.Collection('activities');

Activities.getAll = function() {
    var activities = Activities.find({}, {
        sort: {
            'owner': 1
        }
    });

    return activities;
};

Activities.getByStatusAndPeriod = function(status, period) {
    var query = {};
    query['status.label'] = status;

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

Activities.getParticipants = function() {
    return [];
};

Meteor.methods({
    activityInsert: function(activityProperties) {
        if (ownsDocument(Meteor.userId()), activityProperties) {
            var timeZone = Users.findOne().timeZone;
            activityProperties.status.date = moment.tz(timeZone).format();
            var activityId = Activities.insert(activityProperties);

            return {
                activityId: activityId
            };
        }
    },
    activityMove: function(activityProperties, isReactive) {
        if(isReactive === undefined) {
            isReactive = true;
        }
        if (ownsDocument(Meteor.userId()), activityProperties) {
            activityProperties.status.date = moment.utc().format();
            var activityId = Activities.update(activityProperties._id, activityProperties);
        }
    }
});
