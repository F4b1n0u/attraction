Accounts.config({
    sendVerificationEmail: true,
    restrictCreationByEmailDomain: 'pccwglobal.com'
});

EditableText.registerCallbacks({
    triggerChange: function(doc) {
        if (Meteor.isClient) {
            $('#' + this.context._id + ' .editable').trigger('change');
        }
        return doc;
    }
});
