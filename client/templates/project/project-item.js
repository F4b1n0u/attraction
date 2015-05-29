Template.projectItem.helpers({
    isTheOwner: function() {
        return this.owner === Meteor.userId();
    },
    amountOfParticipants: function() {
        var amount = this.participants.length;
        return amount;
    }
});

Template.projectItem.onRendered(function() {
    this.$('.participants .bubble').hide();
})

Template.projectItem.events({
    'click .add-participant': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();

        var $bubble = tmpl.$('.participants .bubble');

        if (!$bubble.is(':visible')) {
            var animation = 'zoomIn';

            $bubble
                .addClass('animated')
                .addClass(animation)
                .show();

            $bubble.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $bubble
                    .removeClass('animated')
                    .removeClass(animation)
                    .find('input')
                    .focus();
            });
        }
    },
    'click .project': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();

        Router.go('project', tmpl.data);
    },
    'blur input': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();

        var $bubble = tmpl.$('.participants .bubble');

        var animation = 'zoomOut';
        $bubble
            .addClass('animated')
            .addClass(animation);
        $bubble.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $bubble
                .removeClass('animated')
                .removeClass(animation)
                .hide();
        });
    },
    'keyup input': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();

        if (evt.keyCode === 13) {
            var $input = tmpl.$('input');
            var email = $input.val();
            var match = Users.findOne({
                'emails.address': email
            });

            if (match) {
                Projects.update(tmpl.data._id, {
                    $addToSet: {
                        participants: match._id
                    }
                });
            }
            var animation = 'zoomOut';
            var $bubble = tmpl.$('.participants .bubble');
            $bubble
                .addClass('animated')
                .addClass(animation);
            $bubble.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $bubble
                    .removeClass('animated')
                    .removeClass(animation)
                    .hide();
            });
            $input.val('');
        }

    }
});
