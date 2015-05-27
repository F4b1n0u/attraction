Users = Meteor.users;

Users.allow({
    update: function(userId, doc) {
        return !!userId && doc._id === userId;
    }
});
