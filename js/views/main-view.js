
var MainView = Backbone.View.extend({
	el: '#wrapper',
	initialize: function() {
		_.bindAll(this, 'render', 'loadTemplate');
		$.get({
			url: 'templates/main-view.html',
			success: this.loadTemplate,
			context: this,
			dataType: 'html'
		});

	},
	render: function(){
		this.$el.empty().append(this.template({}));
		var homeView = new HomeView();
		return this;
	},
	loadTemplate: function(data) {
		this.template = _.template(data, {});
		this.render();
	}
});
var mainView = new MainView();
Backbone.history.start();
