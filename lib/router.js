Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'welcome'
});
Router.route('/board', {
    name: 'board',
    waitOn: function() {
        return Meteor.subscribe('activities') && Meteor.subscribe('users');
    }
});

Router.route('/profile', {
    name: 'profile',
    waitOn: function() {
        return Meteor.subscribe('users');
    }
});

var requireLogin = function() {
    if (!Meteor.user()) {
        this.render('welcome');
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {
    only: 'board'
});
Router.onBeforeAction(requireLogin, {
    only: ['board', 'profile']
});
