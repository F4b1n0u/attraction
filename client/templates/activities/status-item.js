Template.statusItem.events({
    'dblclick .title': function(evt, tmpl) {
        event.preventDefault();
        var date = moment().format('YYYY-MM-DD');

        var activity = {
            owner: 'Fabien',
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
})