Template.projectsList.helpers({
    projectCount: function() {
        var count = this.projects.fetch().length;
        if (count) {
            return TAPi18n.__("projects_count", {
                count: count
            });
        } else {
            return TAPi18n.__("no_projects");
        }
    }
});

Template.projectsList.onRendered(function() {
    var $projectsList = this.find('.projects-list');
    // var $collapsible = $('.collapsible');
    $projectsList._uihooks = {
        insertElement: function(node, next) {
            var animation = 'fadeInDown'
            $(node)
                .addClass('animated')
                .addClass(animation)
                .insertBefore(next);

            // $collapsible
            //     .collapsible()
            //     .find('.active')
            //     .removeClass('active')
            //     .find('.collapsible-body')
            //     .hide();

            $(node)
                .addClass('active')
                .show();

            $(node).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(node)
                    .removeClass('animated')
                    .removeClass(animation)
                    .addClass('active');
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
    'click .title': function(evt, tmpl) {
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
