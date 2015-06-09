Template.projectItem.helpers({
    isTheOwner: function() {
        return this.owner === Meteor.userId();
    },
    participant: function() {
        return Users.findOne({
            _id: this.toString()
        });
    }
});

Template.projectItem.onRendered(function() {
    $('.participant-bubble.add').leanModal();
})

Template.projectItem.events({
    'click .action.delete': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();
        var projectId = tmpl.data._id;
        Projects.remove(projectId);
    },
    'click .action.open': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();

        Router.go('project', tmpl.data);
    },
    'click .participant-bubble.add.from-project': function(evt, tmpl) {
        console.log($('#add-participant-modal')); 
        $('#add-participant-modal').attr('data-project-id', tmpl.data._id);
    }
});
