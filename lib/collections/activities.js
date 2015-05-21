Activities = new Mongo.Collection('activities');

Activities.getAll = function() {
    var activities = Activities.find({}, {
        sort: {
            'owner': 1
        }
    });

    return activities;
};

Activities.getByStatusAndPeriod = function(status, daysAgo) {
    var query = {};
    query['status.label'] = status;
    
    if (daysAgo) {
        var now = moment();
        var minimalDate = now.subtract(daysAgo, 'days');
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

Activities.count = function(status, daysAgo) {
    return this.getByStatusAndPeriod(status, daysAgo).count() > 0;
};

Activities.getParticipants = function() {
    return [];
};

Meteor.methods({
    activityInsert: function(activityProperties) {
        activityProperties.status.date = moment().format();
        var activityId = Activities.insert(activityProperties);

        return {
            activityId: activityId
        };
    },
    activityMove: function(activityProperties) {
        activityProperties.status.date = moment().format();
        var activityId = Activities.update(activityProperties._id, activityProperties);
    }
});
