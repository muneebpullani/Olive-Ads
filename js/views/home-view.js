var HomeView = Backbone.View.extend({
	el: '#foo',
	events: {
		'click #btn-work': 'loadWorks',
		'click #btn-contact': 'loadContact',
		'click #btn-service': 'loadService',
		'click #btn-about': 'loadAbout'
	},
	initialize: function(){
		_.bindAll(this, 'render', 'loadTemplate');
		console.log('main');
		$.get({
			url: 'templates/home-view.html',
			success: this.loadTemplate,
			context: this,
			dataType: 'html'
		});
	},
	render: function(){
		this.$el.empty().append(this.template({}));
		this.loadRouter();
		return this;
	},
	loadTemplate: function(data){
		this.template= _.template(data, {});
		this.render();
	},
	loadRouter: function(){
		this.route = new MainRouter();
		this.route.navigate('home', {trigger: true});
	},
	loadWorks: function() {
		this.route.navigate('work', {trigger: true});
	},
	loadService: function() {
		this.route.navigate('service', {trigger: true});
	},
	loadContact: function() {
		this.route.navigate('contact', {trigger: true});
	},
	loadAbout: function() {
		this.route.navigate('about', {trigger: true});
	}
});
