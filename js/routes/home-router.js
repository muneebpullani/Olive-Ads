var MainRouter = Backbone.Router.extend({
	initialize: function() {
		console.log('Main router loaded');
	},
	routes: {
		'home': 'loadHome',
		'work': 'loadWorks',
		'contact': 'loadContact',
		'service': 'loadService',
		'about': 'loadAbout'
	},
	loadHome: function () {
		this.view = new HomeView();
	},
	loadWorks: function() {
		this.view = new WorkView();
	},
	loadContact: function() {
		console.log('contact');
		this.view = new ContactView();
	},
	loadService: function() {
		console.log('service');
	},
	loadAbout: function() {
		console.log('about');
	}
});
