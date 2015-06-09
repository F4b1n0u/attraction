var checkEmailsInvalidity = function(values) {
    var regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;
    var isInvalid = values.some(function(value) {
        return !regex.test(value);
    });
    return isInvalid;
}

Template.addParticipantModal.onRendered(function() {
    this.$('.add-particupant-btn').addClass('disabled');
})

Template.addParticipantModal.events({
    'keyup #profil-emails': function(evt, tmpl) {
        var $profilEmails = tmpl.$('#profil-emails');
        var emails = $profilEmails
            .val()
            .split('\n')
            .filter(function(email) {
                return email.trim() != ''
            });


        var $addParticupantBtn = tmpl.$('.add-particupant-btn');
        var isInvalidity = checkEmailsInvalidity(emails)
        console.log(emails, 'isInvalidity', isInvalidity);
        if (isInvalidity) {
            $addParticupantBtn.addClass('disabled');
        } else {
            $addParticupantBtn.removeClass('disabled');
        }
    },
    'click .add-particupant-btn': function(evt, tmpl) {
        evt.preventDefault();
        evt.stopPropagation();

        var $addParticupantBtn = tmpl.$('.add-particupant-btn');
        if (!$addParticupantBtn.hasClass('disabled')) {
            var $profilEmails = tmpl.$('#profil-emails');
            var emails = $profilEmails
                .val()
                .split('\n')
                .filter(function(email) {
                    return email.trim() != ''
                });
            console.log('emails', emails);
        
            Meteor.call('getUsersIdFromEmails', emails, function(error, userIds) {
                if (error) {
                    return alert(error.reason);
                }
                var $modal = tmpl.$('#add-participant-modal');
                if (userIds.length) {
                    var projectId = $modal.attr('data-project-id');
                    Projects.update(projectId, {
                        $addToSet: {
                            participants: {
                                $each: userIds
                            }
                        }
                    });
                    $profilEmails.val('');
                    modal.closeModal();
                } else {
                    // TODO display no user with this emails :(
                }
            });
        }
    }
});
