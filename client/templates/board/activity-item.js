Template.activityItem.helpers({
    isToDo: function() {
        return this.status.label == 'to-do'
    },
    isDone: function() {
        return this.status.label == 'done'
    },
    isTheOwner: function() {
        return this.owner._id === Meteor.userId();
    },
    description: function() {
        var $activity = $('#' + this._id + '.activity');
        var animation = 'swing';
        $activity.addClass('animated');
        $activity.addClass(animation);

        $activity.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $activity.removeClass('animated');
            $activity.removeClass(animation);
        });

        return this.description;
    }
});

Template.activityItem.events({
    'click .action.forward': function(evt, tmpl) {
        var activity = tmpl.data;

        activity.status.previous = activity.status.label;

        switch (activity.status.label) {
            case 'to-do':
                activity.status.label = 'in-progress'
                break;
            case 'in-progress':
                activity.status.label = 'done'
                break;
        }

        Meteor.call('activityMove', activity, function(error, result) {
            if (error)
                return alert(error.reason);
        });
    },
    'click .action.backward': function(evt, tmpl) {
        var activity = tmpl.data;

        activity.status.previous = activity.status.label;

        switch (activity.status.label) {
            case 'done':
                activity.status.label = 'in-progress'
                break;
            case 'in-progress':
                activity.status.label = 'to-do'
                break;
        }

        Meteor.call('activityMove', activity, function(error, result) {
            if (error)
                return alert(error.reason);
        });
    }
})
