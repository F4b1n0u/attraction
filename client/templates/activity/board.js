Template.board.onCreated(function() {
    if (Session.get('timeZone')) {
        var timeZone = Users.findOne().timeZone;
        Session.set('timeZone', timeZone);
    }
});

Template.board.helpers({
    statuses: function() {
        return [{
            status: 'to-do'
        }, {
            status: 'in-progress'
        }, {
            status: 'done'
        }];
    },
});
