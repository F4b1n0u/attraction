Template.header.onRendered(function() {
    this.$('.button-collapse').sideNav();
})

Template.header.helpers({
    userConnected: function() {
        return !!Meteor.user();
    }
});
