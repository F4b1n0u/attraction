Template.statusItem.helpers({
    isInProgress: function() {
        return this.status === 'in-progress';
    },
    isDone: function() {
        return this.status === 'done';
    }
});

Template.statusItem.events({
    'click .title': function(evt, tmpl) {
        evt.preventDefault();

        if (Meteor.user()) {
            var projectId = Router.current().params._id;
            var userId = Meteor.userId();
            
            var activity = {
                project: projectId,
                owner: userId,
                description: 'Please type a description',
                status: {
                    label: tmpl.data.status,
                    date: null
                }
            };

            Meteor.call('activityInsert', projectId, activity, function(error, result) {
                if (error)
                    return alert(error.reason);
            });
        }
    }
});
