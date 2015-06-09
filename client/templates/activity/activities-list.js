Template.activitiesList.onCreated(function() {
    Session.setDefault('to-do-Period', null);
    Session.setDefault('in-progress-period', null);
    Session.setDefault('done-period', Periods.values[0]);
})

Template.activitiesList.onRendered(function() {
    var activitiesList = this.find('.activities-list');
    activitiesList._uihooks = {
        insertElement: function(node, next) {
            var $activity = $(node).find('.activity');
            var activityId = $activity.attr('id');
            var activity = Activities.findOne({
                _id: activityId
            });
            var newstatus = activity.status.label;
            var previousStatus = activity.status.previous;

            var animationName = 'fadeIn';

            $activity.addClass('animated');
            $activity.addClass(animationName);
            $(node).insertBefore(next);

            $activity.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $activity.removeClass('animated');
                $activity.removeClass(animationName);
            });
        },
        moveElement: function(node, next) {
            console.log('moveElement');
        },
        removeElement: function(node, next) {
            var $activity = $(node).find('.activity');
            var activityId = $activity.attr('id');
            var activity = Activities.findOne({
                _id: activityId
            });
            var newstatus = activity.status.label;
            var previousStatus = activity.status.previous;

            var animationName = 'fadeOut';

            if ((newstatus === 'to-do' && previousStatus === 'in-progress') || (newstatus === 'in-progress' && previousStatus === 'done')) {
                animationName += 'Up';
            } else if ((newstatus === 'in-progress' && previousStatus === 'to-do') || (newstatus === 'done' && previousStatus === 'in-progress')) {
                animationName += 'Down';
            }

            $(node).addClass('animated');
            $(node).addClass(animationName).insertBefore(next);

            $(node).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(node).remove();
            });
        }
    }
});

Template.activitiesList.helpers({
    activities: function() {
        var projectId = Router.current().params._id;
        var status = this.status;
        var period = Session.get(this.status + '-period')
        return Activities.getByStatusAndPeriod(projectId, this.status, period);
    }
});
