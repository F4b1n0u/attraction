Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('projects', Meteor.userId());
    }
});

Router.route('/', {
    name: 'projectsList',
    waitOn: function() {
        return Meteor.subscribe('directory');
    },
    data: function() {
        return {
            projects: Projects.getByParticipation(Meteor.userId())
        }
    }
});

Router.route('/project/:_id', {
    name: 'project',
    template: 'board',
    waitOn: function() {
        var projectId = this.params._id;
        return Meteor.subscribe('directory') && Meteor.subscribe('participation', projectId) && Meteor.subscribe('activities', projectId);
    },
    data: function() {
        var projectId = this.params._id;
        return {
            projectId: projectId,
            statuses: [{
                status: 'to-do'
            }, {
                status: 'in-progress'
            }, {
                status: 'done'
            }],
            activities: Activities.getAll(projectId),
            participants: Projects.getParticipants(projectId)
        };
    }
});

Router.onBeforeAction('dataNotFound', {
    only: ['board', 'projectsList']
});

Router.plugin('ensureSignedIn', {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword']
});
