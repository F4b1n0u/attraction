Template.activitiesList.onRendered(function() {
    var $activitiesList = this.find('.activities-list');
    $activitiesList._uihooks = {
        insertElement: function(node, next) {
            var activityId = $(node).attr('id');
            var activity = Activities.findOne({
                _id: activityId
            });
            var newstatus = activity.status.label;
            var previousStatus = activity.status.previous;

            var animationName = 'fadeIn';

            if ((newstatus === 'to-do' && previousStatus === 'in-progress') || (newstatus === 'in-progress' && previousStatus === 'done')) {
                animationName += 'Up';
            } else if ((newstatus === 'in-progress' && previousStatus === 'to-do') || (newstatus === 'done' && previousStatus === 'in-progress')) {
                animationName += 'Down';
            }

            $(node).addClass('animated');
            $(node).addClass(animationName).insertBefore(next);

            $(node).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(node).removeClass('animated');
                $(node).removeClass(animationName).insertBefore(next);
            });
        },
        moveDOMElement: function(node, next) {
            console.log('moveElement');
        },
        removeElement: function(node, next) {
            var activityId = $(node).attr('id');
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
        var period;
        switch (this.status) {
            case 'to-do':
                period = null;
                break;
            case 'in-progress':
                period = null;
                break;
            case 'done':
                period = Session.get('donePeriod') | 0;
                break;
            default:
                period = 0;
                break
        }
        return Activities.getByStatusAndPeriod(this.status, period);
    },
    isDone: function() {
        return this.status == 'done'
    }
});
