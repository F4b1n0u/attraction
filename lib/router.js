Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.map(function() {
    this.route('home', {
        path: '/',
        onBeforeAction: function() {
            if (!Meteor.user()) {
                Router.go('logo');
            } else {
                Router.go('board');
            }
            this.next();
        }
    });
    this.route('logo', {
        path: '/logo'
    });
    this.route('board', {
        path: '/board',
        onBeforeAction: function() {
            if (!Meteor.user()) {
                Router.go('logo');
            } else {
                Router.go('board');
            }
            this.next();
        },
        waitOn: function() {
            return Meteor.subscribe('activities');
        }
    });
    this.route('profile', {
        path: '/profile'
            // onBeforeAction: function() {
            //  AccountsEntry.signInRequired(this);
            // }
    });
});
