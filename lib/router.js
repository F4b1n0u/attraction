Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
        return Meteor.subscribe('activities');
    }
  });
});