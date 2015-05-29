Template.projectsList.helpers({
    projects: function() {
        return Projects.getByParticipation(Meteor.userId());
    }
});

Template.projectsList.onRendered(function() {
    var projectsList = this.find('.projects-list');
    projectsList._uihooks = {
        insertElement: function(node, next) {

            var animation = 'fadeIn'
            $(node)
                .addClass('animated')
                .addClass(animation)
                .insertBefore(next);

            $(node).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(node)
                    .removeClass('animated')
                    .removeClass(animation)
                    .insertBefore(next);
            });
        },
        removeElement: function(node, next) {
            var animation = 'fadeOut';

            $(node).addClass('animated');
            $(node).addClass(animation);

            $(node).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(node).remove();
            });
        }
    }
});

Template.projectsList.events({
    'dblclick .title': function(evt, tmpl) {
        evt.preventDefault();
        var userId = Meteor.userId();
        if (userId) {
            var project = {
                name: 'new project',
                participants: [userId]
            };

            Meteor.call('projectInsert', project, function(error, result) {
                if (error)
                    return alert(error.reason);
                $.extend(project, result);
            });
        }
    }
})
