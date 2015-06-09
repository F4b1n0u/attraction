Template.board.onCreated(function() {
    if (Session.get('timeZone')) {
        var timeZone = Users.findOne().timeZone;
        Session.set('timeZone', timeZone);
    }

    Session.set('projectId', this.data.projectId);
});

Template.board.events({
    'click .participant-bubble.add.from-board': function(evt, tmpl) {
        $('#add-participant-modal').attr('data-project-id', tmpl.data.projectId);
    }
});
