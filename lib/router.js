Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('projects', Meteor.userId());
    }
});

Router.route('/profile', {
    name: 'profile'
});

Router.route('/', {
    name: 'projectsList',
    waitOn: function() {
        return Meteor.subscribe('directory');
    }
});

Router.route('/project/:_id', {
    name: 'project',
    template: 'board',
    waitOn: function() {
        var projectId = this.params._id;
        return Meteor.subscribe('activities', projectId) && Meteor.subscribe('participation', projectId);
    },
    data: function() {
        return Activities.getAll(this.params._id);
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
    only: ['board', 'projectsList']
});
Router.onBeforeAction(requireLogin, {
    only: ['board', 'profile', 'projectsList']
});
