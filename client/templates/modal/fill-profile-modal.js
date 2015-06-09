Template.fillProfileModal.onRendered(function() {
    var $validateProfileBtn = $('.validate-profile-btn');
    var $fillProfileModal = $('#fill-profile-modal');

    $fillProfileModal.leanModal({
        dismissible: false
    });

    if (!Meteor.user().username) {
        $fillProfileModal.openModal();
    }
    $validateProfileBtn.addClass('disabled');

    $('#lean-overlay').dismissible = false;
});

Template.fillProfileModal.helpers({
    username: function() {
        return Meteor.user().username;
    }
});

Template.fillProfileModal.events({
    'click .validate-profile-btn': function(evt, tmpl) {
        var $validateProfileBtn = $('.validate-profile-btn');

        if (!$validateProfileBtn.hasClass('disabled')) {
            Users.update(Meteor.userId(), {
                $set: {
                    username: $('#username').val().trim()
                }
            }, function(error) {
                if (error) {
                    alert(error.reason);
                } else {
                    var $fillProfileModal = tmpl.$('#fill-profile-modal');
                    $fillProfileModal.closeModal();
                }
            });
        }
    },
    'keyup #username': function(evt, tmpl) {
        var $validateProfileBtn = tmpl.$('.validate-profile-btn');
        if ($('#username').val().trim().length > 3) {
            $validateProfileBtn.removeClass('disabled');
        } else {
            $validateProfileBtn.addClass('disabled');
        }
    },
    'click #lean-overlay': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();
    }
});
