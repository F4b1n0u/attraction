var calls = [];
var peer = {};

function setCall(call) {
    var oldPeer = _.findWhere(calls, {
        peer: call.id
    });
    calls = _.difference(calls, [oldPeer]);
    calls.push(call);
    return call;
}

Template.board.onCreated(function() {
    Users.setReachable(Meteor.userId(), true);

    if (Session.get('timeZone')) {
        var timeZone = Users.findOne().timeZone;
        Session.set('timeZone', timeZone);
    }

    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

    if (!navigator.getUserMedia) {
        console.log("Your browser doesn't support getUserMedia.");
    } else {
        var participants = this.data.participants.fetch();
        console.log('Trying to access your microphone. Please click "Allow".');

        var audioStreamPromiseDefer = Q.defer();
        navigator.getUserMedia({
            video: false,
            audio: true
        }, function(audioStream) {
            audioStreamPromiseDefer.resolve(audioStream);
        }, function(error) {
            audioStreamPromiseDefer.reject(error);
        });

        audioStreamPromiseDefer.promise
            .then(function(audioStream) {
                console.log('Microphone is open.');
                console.log('Connecting to PeerJS...');

                var projectId = Router.current().params._id;
                var userId = Meteor.userId();
                var peerId = projectId + '-' + userId;

                peer = new Peer(peerId, {
                    key: 'u02gfkf4vro4j9k9'
                });

                peer.on('open', function() {
                    console.log('Connected.');
                    console.log('ID: ' + peer.id);

                    participants
                        .filter(function(participant) {
                            return participant.status.online && participant.status.isReachable;
                        })
                        .forEach(function(participant) {
                            var participantPeerId = projectId + '-' + participant._id;
                            if (participantPeerId != peerId) {
                                var call = peer.call(participantPeerId, audioStream);
                                setCall(call);

                                call.on('stream', function(stream) {
                                    console.log('Connected to ' + this.peer + '.');
                                    console.log('Adding outgoing stream to ' + this.peer);
                                    var audio = $('<audio id="' + this.peer + '" autoplay />').appendTo('body');
                                    audio[0].src = (URL || webkitURL || mozURL).createObjectURL(stream);
                                });

                                call.on('close', function() {
                                    var peerId = this.peer;
                                    console.log('removing incoming stream from ' + peerId);
                                    $('#' + peerId).remove();
                                });

                                call.on('error', function(err) {
                                    console.log(err);
                                });
                            }
                        });
                });

                peer.on('call', function(incoming) {
                    console.log('Answering incoming call from ' + incoming.peer);
                    var call = incoming;
                    setCall(call)
                    call.answer(audioStream);
                    call.on('stream', function(stream) {
                        console.log('Adding incoming stream from ' + this.peer);
                        var audio = $('<audio id="' + this.peer + '" autoplay />').appendTo('body');
                        audio[0].src = (URL || webkitURL || mozURL).createObjectURL(stream);
                    });
                });
                peer.on('close', function() {
                    Object.keys(this.connections).forEach(function(peerId) {
                        console.log('removing incoming stream from ' + peerId);
                        $('#' + peerId).remove();
                    });
                });
                peer.on('error', function(err) {
                    console.log(err);
                });
            })
            .fail(function(error) {
                console.log('Couldn\'t connect to microphone. Reload the page to try again.');
            });
    }
});

Template.board.onDestroyed(function() {
    while (calls.length > 0) {
        var call = calls.pop();
        call.close();
        peer.destroy();
    }
    Users.setReachable(Meteor.userId(), false);
});

Template.board.events({
    'click .participant-bubble.add.from-board': function(evt, tmpl) {
        $('#add-participant-modal').attr('data-project-id', tmpl.data.projectId);
    }
});
