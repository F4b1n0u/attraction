Template.statusItem.helpers({
    isInProgress: function() {
        return this.status === 'in-progress';
    },
    isDone: function() {
        return this.status === 'done';
    }
})
Template.statusItem.events({
    'dblclick .title': function(evt, tmpl) {
        evt.preventDefault();
        if (Meteor.user()) {
            var activity = {
                owner: Meteor.user(),
                description: 'Please type a description',
                status: {
                    label: tmpl.data.status,
                    date: null
                }
            };

            Meteor.call('activityInsert', activity, function(error, result) {
                if (error)
                    return alert(error.reason);
            });
        }
    }
})
