Template.participantsList.onRendered(function() {
    var $participantsList = this.$('.participants-list');
    var $header = $('header');
    $participantsList.pushpin({
        offset: $header.height() + 15
    });

    $('.participant-bubble.add').leanModal();
});
