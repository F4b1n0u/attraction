Template.participantBubble.onRendered(function() {
    // var $participantBubble = this.$('.participant-bubble');
    // var path = '/avatar/' + this.data._id + '.png';
    // $participantBubble.css('background-image', 'url(' + path + ')');
    // 
    var hash = CryptoJS.MD5(this.data.username).toString();
    var rgb = '#' + hash.substring(0, 2) + hash.substring(2, 4) + hash.substring(4, 6);
    this.$('.participant-bubble').css('color', rgb);
});

Template.participantBubble.helpers({
    initials: function() {
        var initials = '';
        var username = this.username;
        if (username) {
            var split = username.split(' ');
            if (split.length > 1) {

                initials = split[0].toUpperCase()[0] + split[1].toUpperCase()[0];
            } else {
                initials = split[0].substring(0, 2);
                initials = initials.charAt(0).toUpperCase() + initials.slice(1);
            }
        }
        return initials;
    },
    status: function() {
        var status;
        if (this.status.online) {
            if (this.status.isReachable) {
                status = 'present';
            } else {
                status = 'online';
            }
        } else {
            status = 'offline';
        }
        return status;
    }
});
