Template.activityItem.onRendered(function() {
    var activity = this.find('.activity');
    activity._uihooks = {
        insertElement: function(node, next) {
            $(node)
                .insertBefore(next);
        }
    }

    if (this.data.owner) {
        var $participant = this.$('.participant');
        var path = '/avatar/' + this.data.owner + '.png';
        $participant.css('background-image', 'url(' + path + ')');
    }
});

Template.activityItem.helpers({
    isToDo: function() {
        return this.status.label == 'to-do'
    },
    isDone: function() {
        return this.status.label == 'done'
    },
    isTheOwner: function() {
        return this.owner === Meteor.userId();
    },
    ownerName: function() {
        return Users.findOne({
            _id: this.owner
        }).username;
    },
    description: function() {
        var $activity = $('#' + this._id + '.activity');
        var animation = 'pulse';
        $activity.addClass('animated');
        $activity.addClass(animation);

        $activity.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $activity.removeClass('animated');
            $activity.removeClass(animation);
        });

        return this.description;
    },
    formId: function() {
        return 'form' + this._id;
    }, 
    owner : function() {
        return Users.findOne({_id: this.owner});
    }
});

function getCaretCharacterOffsetWithin(element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

Template.activityItem.events({
    'click .action.forward': function(evt, tmpl) {
        Meteor.call('activityMove', tmpl.data, 'forward', function(error, result) {
            if (error)
                return alert(error.reason);
        });
    },
    'click .action.backward': function(evt, tmpl) {
        Meteor.call('activityMove', tmpl.data, 'backward', function(error, result) {
            if (error)
                return alert(error.reason);
        });
    },
    'focus .description[contenteditable]': function(evt, tmpl) {
        $contenteditable = tmpl.$('[contenteditable]');
        $contenteditable.data('before', $contenteditable.text());
    },
    'keydown .description[contenteditable]': function(evt, tmpl) {
        $contenteditable = tmpl.$('[contenteditable]');
        var content = $contenteditable.text();
        if (evt.keyCode === 13) {
            $contenteditable = tmpl.$('[contenteditable]');
            $contenteditable.blur();
            return false;
        } else if (evt.keyCode === 32) {
            var position = getCaretCharacterOffsetWithin($contenteditable.get(0));
            if (position === 0) {
                if (position === content.length && content[content.length - 1] === ' ')
                    return false;
            }
        }
    },
    'keyup .description[contenteditable], paste .description[contenteditable]': function(evt, tmpl) {
        $contenteditable = tmpl.$('[contenteditable]');
        var content = $contenteditable.text();
        var before = $contenteditable.data('before');
        if (before !== content) {
            $contenteditable.data('before', content);
        }
    },
    'blur .description[contenteditable]': function(evt, tmpl) {
        window.getSelection().removeAllRanges();
        var content = $contenteditable.text();
        Activities.update(tmpl.data._id, {
            $set: {
                description: content
            }
        });
    }
});
