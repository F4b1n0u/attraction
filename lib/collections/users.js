Users = Meteor.users;

Users.allow({
    update: function(userId, doc) {
        return !!userId && doc._id === userId;
    }
});

Users.setReachable = function(userId, isReachable) {
    return Users.update({
        _id: userId
    }, {
        $set: {
            'status.isReachable': isReachable
        }
    });
};

Meteor.methods({
    getUsersIdFromEmails: function(emails) {
        var users = Users.find({
            'emails.address': {
                $in: emails
            }
        }).fetch();

        return users.map(function(user) {
            return user._id;
        });
    }
});
