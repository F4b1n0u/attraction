Template.activityItem.onRendered(function() {

    var $activity = $('#' + this.data._id);
    console.log('setup $activity', $activity);
    var $editable = $('#' + this.data._id + ' .editable');
    console.log('setup $editable', $editable);
    $editable.change(function() {
        $activity.addClass('animated');
        $activity.addClass('pulse');

        $activity.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $activity.removeClass('animated');
            $activity.removeClass('pulse');
        });
    });
    // change() trigger on the callback define for {{editableText}}
    // done at the dom level to be sure it appears also on the client who didn't initiate the change
});

Template.activityItem.helpers({
    isToDo: function() {
        return this.status.label == 'to-do'
    },
    isDone: function() {
        return this.status.label == 'done'
    }
});

Template.activityItem.events({
    'click .action.forward': function(evt, tmpl) {
        // TODO add a wait to lets the animation appear
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
        // TODO add a wait to lets the animation appear
        console.log('click .action.forward');
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
